import { primary, tertiary } from './colors'
import './globals.css'

export const metadata = {
  "title":'Booth-E',
  'description':'Your friendly footfall manager'
}

export default function RootLayout({
  children
}:{
  children:React.ReactNode
}){
  return(
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </head>
      <body style={{
        backgroundColor:primary,
        color:tertiary
      }}>
        <div className="w-screen h-screen flex justify-center items-center">
          {children}          
        </div>
      </body>
    </html>
  )
}