import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Container from '@/components/Container';
import TokenProvider from '@/services/tokenContext';
import InitProvider from '@/services/initContext';
import InitializeSDK from '@/components/InitializeSDK';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Check SDK methods',
  description: 'Check SDK methods selfcare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='flex'>
          <TokenProvider>
            <InitProvider>
              <Container>
                <InitializeSDK />
                {children}
              </Container>
            </InitProvider>
          </TokenProvider>
        </main>
      </body>
    </html>
  )
}
