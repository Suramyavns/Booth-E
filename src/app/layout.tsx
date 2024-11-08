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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </head>
      <body>
        {children} 
      </body>
    </html>
  )
}