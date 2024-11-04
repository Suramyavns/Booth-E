import './globals.css'

export const metadata = {
  "title":'Welcome to Booth-E',
  'description':'Manage your exhibition footfall'
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
      <body>
        <div className='w-full h-full flex justify-center items-center'>
          {children}
        </div>
      </body>
    </html>
  )
}