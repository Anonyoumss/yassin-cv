import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yassin Abdalla - CV',
  description: 'High school innovator specializing in AI, robotics, and embedded systems',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}
