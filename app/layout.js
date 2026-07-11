import './globals.css';

export const metadata = {
  title: 'Mikita Yemialyanau — Head of Design',
  description: 'Brand, marketing, and product design under one strategic direction.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
