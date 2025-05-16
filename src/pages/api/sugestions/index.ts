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
    const { query } = req.query

    const reqOptions = {
        url: `https://api.matspar.se/autocomplete?query=${query}`,
        method: "GET",
    }

    axios.request(reqOptions)
        .then(function (response) {
            res.status(200).json({ data: response.data })
        })


}
