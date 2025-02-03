import { reviewData } from "../../comments/data";

export async function GET(
     request : Request,
     {params}: {params : {id : string}}
){
    const review = reviewData.find(
        (review) => review.id === parseInt(params.id)
    );
    if(review == null){
        return Response.error
    }
    return Response.json(review);

}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const body = await request.json();
        const index = reviewData.findIndex(
            (review) => review.id === parseInt(params.id)
        );

        if (index === -1) {
            return new Response(JSON.stringify({ message: "Review not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        reviewData[index] = {
            ...reviewData[index],
            name: body.name,
            review: body.review,
            rating: body.rating,
        };

        return new Response(JSON.stringify({ message: "Updated successfully" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Invalid request" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }
}


export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const index = reviewData.findIndex(
        (review) => review.id === parseInt(params.id)
    );

    if (index === -1) {
        return new Response(JSON.stringify({ message: "Review not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }

    reviewData.splice(index, 1);

    return new Response(JSON.stringify({ message: "Deleted successfully" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
