// dynamic routes
import { notFound } from "next/navigation";
function ProductDetails({ params}: {
    params : {productId: string}
}){
    //if productId is greater than 1000 then return 404
    if(parseInt(params.productId)> 1000){
        return notFound();
    }
    return (
        <div>
            <h1>This is product details page {params.productId}</h1>
        </div>
    );
}

export default ProductDetails;