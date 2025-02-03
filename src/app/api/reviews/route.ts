import { NextRequest } from "next/server";
import { reviewData } from "../comments/data";

// normal get all operation

// export async function GET(){
//     return Response.json(reviewData);
// }

// get with query parameters
export async function GET(request : NextRequest){
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
    if(query){
        const filteredData = reviewData.filter((review) => review.review.includes(query));
        return new Response(JSON.stringify(filteredData), {
        headers: {
            "Content-Type": "application/json",
        },
        });
    }
}


export async function POST(request : Request){
    const review = await request.json();
    const newReview= {
        id: reviewData.length + 1,
        name: review.name,
        review: review.review,
        rating: review.rating
    }

    reviewData.push(newReview)
    return new Response("Review added successfully !")
}

