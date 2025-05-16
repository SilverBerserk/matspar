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

    axios.request(reqOptions)
        .then(function (response) {
            console.log(response.data)
            res.status(200).json({ data:response.data })
            // setBody(response.data);
            // setLoading(false)
        })
}
