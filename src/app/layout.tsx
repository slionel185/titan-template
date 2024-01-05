import 'src/app/globals.css'

import type { Metadata, Viewport } from 'next'

import { GeistSans } from 'geist/font/sans'

const RootLayout = () => {
    return (
        <html>
            <head />
            <body className={GeistSans.className}>

            </body>
        </html>
    )
}

export default RootLayout