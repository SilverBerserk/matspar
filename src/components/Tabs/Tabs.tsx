import { useState } from 'react'
import styles from './Tabs.module.css'


const Tabs = () => {
    const [active, setActive] = useState(0)
    const tabs = ['Trendy foods', 'Bread', 'Milk', 'Egg']
    return (
        <div className={styles.tabs}>
            {tabs.map((e, i) =>
                <span key={"tab" + i} className={i === active ? styles.tabActive : styles.tab}
                    onClick={() => setActive(i)}>
                    {e}
                </span>
            )}
        </div>
    )
}

export default Tabs