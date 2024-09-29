import React from 'react'
import './style.css'
import { Cairo } from 'next/font/google'

const cairo = Cairo({
  subsets:['latin'],
  weight:['400','700']
})

export const metadata = {
  title: "Sayartech",
  description: "Your kids journey to school is our mission",
};


export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={cairo.className} id='app-container'>
        {children}
      </body>
    </html>
  )
}
