import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { MAIN_URL } from '../MAIN_URL/URL'


export const productApi = createApi({
  reducerPath: "productApi",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: `${MAIN_URL}` }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => `products`,
    })
  }),
});


export const {useGetProductsQuery}=productApi