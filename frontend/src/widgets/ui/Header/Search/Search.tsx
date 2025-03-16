import React, { isValidElement, useEffect, useRef, useState } from 'react'
import styles from './Search.module.scss'
import { gamesSearchError, gamesSearchResults, game } from './types'
import SearchCard from './components/SearchCard/SearchCard'
import { jsonData } from './consts/data'

const SearchBar = () => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<gamesSearchResults>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [IsVisible, setIsVisible] = useState(false)
    const searchRef = useRef<HTMLDivElement>(null)

    const searchFor = async (query: string) => {
        try {
            setIsLoading(true)
            setIsVisible(true)
            console.log('searching ofr ', query)

            const response = await fetch(
                `http://localhost:3001/games/?_limit=8`
            )
            const data = await response.json()

            setResults(data)
            console.log(data)
        } catch (error: any) {
            setError(error.message)
            console.log(error)
            console.log(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target as Node)
            ) {
                setIsVisible(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    useEffect(() => {
        if (query.length > 2) {
            searchFor(query)
        }
    }, [query])
    return (
        <div ref={searchRef} className={styles.search}>
            <div className={styles.search__field}>
                <input
                    type="text"
                    placeholder="Поиск по играм"
                    value={query}
                    onFocus={() =>
                        query.length > 2 ? setIsVisible(true) : console.log()
                    }
                    onChange={(e) => setQuery(e.target.value)}
                    className={styles.search__input}
                    style={{
                        borderRadius: IsVisible ? '25px 25px 0 0' : '25px',
                    }}
                />
                <svg
                    className={styles.search__icon}
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="10.3535" cy="10.5" r="9.5" />
                    <path
                        d="M16.8535 17.5L19.8535 20.5"
                        stroke-linecap="round"
                    />
                </svg>
            </div>
            {IsVisible && (
                <div className={styles.search__results}>
                    {isLoading ? (
                        <p className={styles.search__loading}>Загрузка...</p>
                    ) : error !== '' ? (
                        <p className={styles.search__error}>{error}</p>
                    ) : (
                        results.map((result) => (
                            <SearchCard gameData={result} />
                        ))
                    )}
                </div>
            )}
        </div>
    )
}

export default SearchBar
