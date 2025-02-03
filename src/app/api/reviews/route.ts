import { reviewData } from "../comments/data";

export async function GET(){
    return Response.json(reviewData);
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