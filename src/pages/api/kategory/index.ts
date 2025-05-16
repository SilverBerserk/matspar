import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message?: string,
    data: any
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {

    const {q} = req.query

    const reqOptions = {
        url: `https://www.matspar.se/kategori?q=${q}`,
        method: "GET",
    }

    axios.request(reqOptions)
        .then(function (response) {
            console.log(response.data)
            res.status(200).json({ data:response.data })
        })
}
