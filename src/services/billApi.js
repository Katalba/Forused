import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { baseUrl } from '../firebase'

export const billApi = createApi({
  reducerPath: 'billApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getBill: builder.query({
      query: () => 'bill.json'
    }),
    postBill: builder.mutation({
      query: ({ ...bill }) => ({
        url: 'bill.json',
        method: 'POST',
        body: bill
      })
    })
  })
})

export const {
  useGetBillQuery,
  usePostBillMutation

} = billApi
