import { useEffect, useState } from 'react'

const kategori = () => {
    const [loading, setLoading] = useState(true)
    const [body, setBody] = useState("")

    const fetchKategory = async () => {
        setLoading(true)
        const res = await fetch('/api/kategory');
        const result = await res.json();
        setBody(result.data)
        setLoading(false)
    };

    useEffect(() => {
        fetchKategory()
    },[])

    return loading ? '...loading' : <div dangerouslySetInnerHTML={{ __html: body }}></div>
}

export default kategori