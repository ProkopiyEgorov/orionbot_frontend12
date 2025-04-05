export const metadata = {
  title: 'OrionBot',
  description: 'Юридический AI-бот 24/7',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
