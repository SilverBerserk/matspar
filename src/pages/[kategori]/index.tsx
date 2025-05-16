import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const kategori = () => {
    const [loading, setLoading] = useState(true)
    const [body, setBody] = useState("")
    const router = useRouter()
    const { q } = router.query

    const fetchKategory = async (q:string) => {
        setLoading(true)
        const res = await fetch(`/api/kategory?q=${q}`);
        const result = await res.json();
        setBody(result.data)
        setLoading(false)
    };

    useEffect(() => {
        typeof q === 'string' && fetchKategory(q)
    }, [q])

    return loading ? '...loading' : <div dangerouslySetInnerHTML={{ __html: body }}></div>
}

export default kategori