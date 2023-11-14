import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { baseUrl } from '../firebase'

export const billApi = createApi({
  reducerPath: 'billApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getBill: builder.query({
      query: ({ category }) => ({
        url: 'bill.json',
        method: 'GET',
        params: { category }
      })
    }),
    postBill: builder.mutation({
      query: ({ invoices }) => ({
        url: 'bill.json',
        method: 'POST',
        body: { invoices }
      })
    })
  })
})

export const {
  useGetBillQuery,
  usePostBillMutation

} = billApi
