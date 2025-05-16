import { KeyboardEvent } from "react"

import Image from "next/image"

import styles from './SearchItem.module.css'

interface SearchItemProps {
    text: string,
    icon: { alt: string, src: string },
    textAction(text: string): any,
    iconAction(text: string): any,

}

const SearchItem = ({ text, icon, textAction, iconAction }: SearchItemProps) => {

    const handleTextKey = (e: KeyboardEvent<HTMLSpanElement>, text: string) => {
        if (e.key === 'Enter')
            textAction(text)
    }

    const handleIconKey = (e: KeyboardEvent<HTMLSpanElement>, text: string) => {
        if (e.key === 'Enter')
            iconAction(text)
    }


    return (
        <div className={styles.searchItem}>
            <span className={styles.text} tabIndex={0} onKeyDown={e => handleTextKey(e, text)}
                onClick={() => textAction(text)}>{text}</span>
            <span tabIndex={0} onKeyDown={e => handleIconKey(e, text)}>
                <Image className={styles.icon}
                    alt={icon.alt} src={icon.src}
                    width={20} height={20}
                    onClick={() => iconAction(text)} />
            </span>
        </div>
    )
}

export default SearchItem