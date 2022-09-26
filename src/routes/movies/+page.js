import {error} from '@sveltejs/kit'

export async function load( { fetch }){
    const res = await fetch('/api/movie')


    if (res.ok) return res.json()
    throw error(400, 'Movie not found')

     
    }
   