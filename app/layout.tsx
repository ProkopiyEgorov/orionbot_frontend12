export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head />
      <body style={{ fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
