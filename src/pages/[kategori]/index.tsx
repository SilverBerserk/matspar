import axios from 'axios'
import { useEffect, useState } from 'react'


const kategori = () => {
    const [loading, setLoading] = useState(true)
    const [body, setBody] = useState()

    useEffect(() => {
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json"
        }

        let reqOptions = {
            url: "https://www.matspar.se/kategori?q=coca%20cola%20zero",
            method: "GET",
            headers: headersList,
        }

        axios.request(reqOptions).then(function (response) {
            setBody(response.data);
            setLoading(false)
        })
    })

    return loading ? '...loading' : body

    // return (<>
    //     <header className={styles.header}>
    //         <Image
    //             src="/Menu.svg"
    //             alt="Menu"
    //             width={30}
    //             height={18}
    //             priority
    //         />
    //         {/* <Search search={search} setSearch={setSearch} handleSearch={getSugestions} /> */}
    //     </header>
    //     <h1 className={styles.title}>
    //         Find your favorite products now.
    //     </h1>
    //     <Tabs />
    //     <div className={styles.items}>
    //         {itemsPrice.map((e, i) =>
    //             <Item image={{ alt: 'cola', src: '/cola.png' }}
    //                 name='Product name' brand='Brand' price={`$${e}`} />)}
    //     </div>
    // </>)
}

export default kategori