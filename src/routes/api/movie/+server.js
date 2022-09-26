export async function GET() {
    return new Response(JSON.stringify({ movies: ['thor', 'Hulk']}), {
        headers: {
            'content-type': 'application/j charset=utf-8'
        }

    })
}