export const metadata = {
  title: 'Kwiz',
  description: 'FStival',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="faded-background">{children}</body>
    </html>
  )
}
