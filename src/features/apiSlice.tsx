import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiProducts = createApi({
    reducerPath: "apiProducts",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://dummyjson.com/`,
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products",
        }),
        getSingleProduct:builder.query({
            query:(productName)=>`products/search?q=${productName}`
        })
    }),
});
export const { useGetAllProductsQuery,useGetSingleProductQuery } = apiProducts;
export default apiProducts;
