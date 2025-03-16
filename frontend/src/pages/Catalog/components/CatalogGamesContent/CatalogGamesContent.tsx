import React, { useState, useEffect } from 'react'
import { useCatalogFilters } from '../../../../shared/lib/context/CatalogFiltersProvider'
import GamesList from './components/GamesList/GamesList'
import SkeletonSlider from './components/skeletons/SkeletonSlider/SkeletonSlider'
import SkeletonGamesList from './components/skeletons/SkeletonGamesList/SkeletonGamesList'
import AdSlider from './components/AdSlider/AdSlider'
import type { Game, GamesListData } from './types'

function CatalogGamesContent() {
    const { selectedGenre, selectedSet, isLoading, changeLoadingState } =
        useCatalogFilters()

    const [gamesList, setGamesList] = useState<GamesListData[]>([])
    const [adSliderGames, setAdSliderGames] = useState<Game[]>([])

    const getAPIUrl = (selectedGenre: string, selectedSet: string): string => {
        let url = `http://localhost:3001/games/?`

        if (selectedGenre && selectedGenre !== 'all') {
            url += `&ganre=${selectedGenre}`
        }

        if (selectedSet && selectedSet !== 'all') {
            url += `&set[0]=${selectedSet}`
        }

        return url
    }

    /* Запрос для AdSlider --- 5 самых популярных по выбранным жанрам */
    const fetchAdSliderGames = async (url: string): Promise<void> => {
        const response = await fetch(url + '&_sort=-rating&_limit=5')
        const data: Game[] = await response.json()
        setAdSliderGames(data)
    }

    /* Запрос для GamesList */
    const fetchGamesList = async (url: string): Promise<void> => {
        const response = await fetch(url)
        const data: Game[] = await response.json()

        const formattedData: GamesListData = {
            title: `Лучшие представители ${selectedGenre === 'all' ? 'всех жанров' : `жанра ` + selectedGenre}${selectedSet === 'all' ? '' : ', набор ' + selectedSet}`,
            games: data,
        }

        setGamesList([formattedData])
    }

    /* Запрос при selectedGenre и selectedSet === 'all', возвращающий 3 секции для GamesList */
    const initialFetchGamesList = async (url: string): Promise<void> => {
        const formattedData: GamesListData[] = []

        const response1 = await fetch(url + '&_sort=-rating&_limit=6')
        const data1: Game[] = await response1.json()

        formattedData.push({
            title: `Лучшие представители своих жанров`,
            games: data1,
        })

        const response2 = await fetch(url + '&_sort=-views&_limit=6')
        const data2: Game[] = await response2.json()

        formattedData.push({
            title: `Самое популярное в последнее время`,
            games: data2,
        })

        const response3 = await fetch(url + '&_sort=-publishDate&_limit=6')
        const data3: Game[] = await response3.json()

        formattedData.push({
            title: `Специально для тебя`,
            games: data3,
        })

        setGamesList(formattedData)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                changeLoadingState(true)
                const APIUrl = getAPIUrl(selectedGenre, selectedSet)

                if (selectedGenre === 'all' && selectedSet === 'all') {
                    await fetchAdSliderGames(APIUrl)
                    await initialFetchGamesList(APIUrl)
                } else {
                    await fetchAdSliderGames(APIUrl)
                    await fetchGamesList(APIUrl)
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                changeLoadingState(false)
            }
        }

        fetchData()
    }, [selectedGenre, selectedSet])

    return (
        <>
            {!isLoading ? (
                <AdSlider games={adSliderGames} />
            ) : (
                <SkeletonSlider />
            )}
            {!isLoading ? (
                gamesList.map((list, index) => (
                    <GamesList
                        title={list.title}
                        games={list.games}
                        key={index}
                    />
                ))
            ) : (
                <SkeletonGamesList title={''} />
            )}
        </>
    )
}

export default CatalogGamesContent
