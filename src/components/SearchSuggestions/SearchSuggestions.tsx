import SearchItem from '../SearchItem/SearchItem'
import styles from './SearchSuggestions.module.css'


interface SearchSuggestionsProps {
    suggestions: { text: string }[],
    handleSearch(text: string): any
}

const SearchSuggestions = ({ suggestions, handleSearch }: SearchSuggestionsProps) => {

    return (
        <div className={styles.recentSearch}>
            <div className={styles.title}>
                <span className={styles.text}>Popular searches</span>
            </div>
            <hr />
            <div className={styles.list}>
                {suggestions?.map((e, i) => <SearchItem key={'item' + i} text={e.text} icon={{ alt: 'Search', src: '/Search.svg' }}
                    iconAction={handleSearch}
                    textAction={handleSearch} />)}
            </div>
        </div >
    )
}

export default SearchSuggestions