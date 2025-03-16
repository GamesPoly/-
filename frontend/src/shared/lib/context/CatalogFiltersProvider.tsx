import React, {
    createContext,
    useContext,
    useState,
    PropsWithChildren,
    FC,
} from 'react'

interface CatalogFiltersContextType {
    selectedGenre: string
    selectedSet: string
    isLoading: boolean
    changeSelectedGenre: (genre: string) => void
    changeSelectedSet: (set: string) => void
    changeLoadingState: (state: boolean) => void
}

const CatalogFiltersContext = createContext<
    CatalogFiltersContextType | undefined
>(undefined)

export const CatalogFiltersProvider: FC<PropsWithChildren> = ({ children }) => {
    const [selectedGenre, setSelectedGenre] = useState<string>('all')
    const [selectedSet, setSelectedSet] = useState<string>('all')
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const changeSelectedGenre = (genre: string) => {
        if (selectedGenre === genre) return
        setSelectedGenre(genre)
    }

    const changeSelectedSet = (set: string) => {
        if (selectedSet === set) return
        setSelectedSet(set)
    }

    const changeLoadingState = (state: boolean) => {
        setIsLoading(state)
    }

    return (
        <CatalogFiltersContext.Provider
            value={{
                selectedGenre,
                selectedSet,
                changeSelectedGenre,
                changeSelectedSet,
                isLoading,
                changeLoadingState,
            }}
        >
            {children}
        </CatalogFiltersContext.Provider>
    )
}

export function useCatalogFilters(): CatalogFiltersContextType {
    const context = useContext(CatalogFiltersContext)

    if (context === undefined) {
        throw new Error(
            'useCatalogFilters must be used within a CatalogFiltersProvider'
        )
    }

    return context
}
