import type { Metadata } from 'next'
import './fonts.css'
import './global-styles.css'

export const metadata: Metadata = {
  title: 'Interop',
  description: '세상에서 가장 조화로운 한글 alphabet 고딕체',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko-KR">
      <body>{children}</body>
    </html>
  )
}
