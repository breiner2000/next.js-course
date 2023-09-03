import React from 'react'
import getUser  from '@/lib/getUser'
import getUserPost from '@/lib/getUserPosts'

import { Suspense } from 'react'
import UserPosts from './components/UserPosts'
import type { Metadata } from 'next'

type Params = {
    params : {
        userId : string
    }
}

export async function generateMetadata({params: {userId}} : Params) : Promise<Metadata> {
    // debido al deduplicate se puede hacer de nuevo la peticion
    const userData: Promise<User> = getUser(userId) 
    const user: User = await userData

    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }
}

export default async function UserPage( {params: {userId}} : Params) {
    const userData: Promise<User> = getUser(userId)
    const userPostsData: Promise<Post[]> = getUserPost(userId)

    // hacer las peticiones al mismo tiempo
    // const [user, userPosts] = await Promise.all([userData, userPostsData])

    // hacer la peticion del usuario y hacer suspence de los posts (ir cargando los posts)
    const user = await userData


    return (
        <>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback= {<h2>Loading...</h2>}>
                <UserPosts promise={userPostsData} />
            </Suspense>
            
        </>
    )
}
