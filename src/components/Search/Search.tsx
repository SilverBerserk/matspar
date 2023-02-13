import Image from 'next/image'
import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from 'react'

import styles from './Search.module.css'


interface searchProps {
    handleSearch(text: string): any,
    setSearch: Dispatch<SetStateAction<string>>,
    search: string
}

const Search = ({ search, setSearch, handleSearch }: searchProps) => {


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch(search)
        }
    }

    return (
        <div className={styles.searchBox}>
            <Image
                onClick={() => handleSearch(search)}
                src="/Search.svg"
                alt="Search"
                className={styles.searchIcon}
                width={24}
                height={24}
                priority />
            <input
                className={styles.searchInput}
                onChange={handleChange}
                value={search}
                onKeyDown={handleKeyDown}
                placeholder='Search Product'>

            </input>
        </div>
    )
}

export default Search