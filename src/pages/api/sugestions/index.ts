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
    const {query} = req.query

    console.log({query})

    let headersList = {
        "Accept": "*/*",
    }

    // let reqOptions = {
    //     url: `https://api.matspar.se/autocomplete?query=${query}`,
    //     method: "GET",
    //     headers: headersList,
    // }

    axios.request({
        url: `https://api.matspar.se/autocomplete?query=${query}`,
        method: "GET",
        headers: headersList,
    })
        .then(function (response) {
            res.status(200).json({ data: response.data })
            // setBody(response.data);
            // setLoading(false)
        })


}
