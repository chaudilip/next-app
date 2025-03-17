"use client;"

import React from 'react'
import { auth } from "@clerk/nextjs/server"

async function Homepage() {

    const { userId, redirectToSignIn, getToken,sessionId} = await auth()
    const token = await getToken()
    console.log(token)

   console.log(sessionId) 

    if (!userId) return redirectToSignIn()

    return (
        <div>Hello ${userId}</div>
    )
}

export default Homepage