import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Restaurant } from "../../types";

export const restaurantsApi = createApi({
    reducerPath: "restaurantsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://ebac-fake-api.vercel.app/api/efood/",
    }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<Restaurant[], void>({
            query: () => "restaurantes",
        }),
    }),
});

export const { useGetRestaurantsQuery } = restaurantsApi;
