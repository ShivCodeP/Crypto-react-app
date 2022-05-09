import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeader = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'a2ef515696msh0a42a7ab3d716f0p1a6f94jsn1c250ca25d16'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createrequest = (url) => ({url,headers:cryptoApiHeader});

export const cryptoApi = createApi({
    reducerPath:"cryptoapi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query:() => createrequest("/coins")
        })
    })
})

export const {
    useGetCryptosQuery
} = cryptoApi

// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//     'X-RapidAPI-Key': 'a2ef515696msh0a42a7ab3d716f0p1a6f94jsn1c250ca25d16'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });