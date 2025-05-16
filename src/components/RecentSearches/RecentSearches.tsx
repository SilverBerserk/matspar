import { useState } from 'react'

import SearchItem from '../SearchItem/SearchItem'

import styles from './RecentSearches.module.css'

interface RecentSearchesProps {
    handleSearch(text: string): any
}

const RecentSearches = ({ handleSearch }: RecentSearchesProps) => {
    const [searches, setSearches] = useState<string[]>(JSON.parse(window.localStorage.getItem('searched-items') ?? '[]'))


    const removeStore = (item: string) => {
        const newSearches = searches?.filter(e => e !== item)
        setSearches(newSearches)
        window.localStorage.setItem('searched-items', JSON.stringify(newSearches))
    }
    const removeAll = () => {
        setSearches([])
        window.localStorage.setItem('searched-items', "[]")
    }

    return (
        <div className={styles.recentSearch}>
            <div className={styles.title}>
                <span className={styles.text}>Recent Searches</span>
                <span className={styles.text} onClick={removeAll}>Clear all</span>
            </div>
            <hr />
            <div className={styles.list}>
                {searches?.map((e, i) => <SearchItem key={'item' + i} text={e} icon={{ alt: 'Close', src: '/Close.svg' }}
                    iconAction={removeStore}
                    textAction={handleSearch} />)}
            </div>
        </div >
    )
}

export default RecentSearches