import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className="not-found">
      <h2>sorry not found</h2>
      <Link to="/">Go back to home page...</Link>
      
    </div>
  )
}
