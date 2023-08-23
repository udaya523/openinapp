import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react"
import Navigation from './Navigation'
import Dashboard from './Dashboard'

export default function Dashboardss() {
    const { data: session, status } = useSession()
    console.log(session)
  return (
    <div>
      <Navigation />
      <Dashboard />
      <a
                href={`/api/auth/signout`}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
    </div>

  )
}
