const response = {
    data : [
        {
            id: 1,
            name: 'product 1'
        },
        {
            id: 2,
            name: 'product 2'
        }
    ]
}

export async function GET(){
    return  new Response(JSON.stringify(response));
}