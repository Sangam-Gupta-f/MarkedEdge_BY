export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <iframe
          src="https://gamma.app/embed/t0yoc0t4ejc1zkd"
          className="min-h-screen"
          width="100%"
          height="100%"
          allow="fullscreen"
          title="Unlock Your Potential: Book Your Free Consultation Today"
        ></iframe>
      </body>
    </html>
  );
}
