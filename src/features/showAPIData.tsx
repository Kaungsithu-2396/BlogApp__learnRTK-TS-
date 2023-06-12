import { useGetAllProductsQuery, useGetSingleProductQuery } from "./apiSlice";

function ShowAPIData() {
    const { data } = useGetAllProductsQuery("");
    const { data: singleProduct } = useGetSingleProductQuery("iphone");
    console.log(data, singleProduct);
    return <div></div>;
}

export default ShowAPIData;
