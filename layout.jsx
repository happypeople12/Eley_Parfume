import './globals.css';

export const metadata = {
  title: 'Happy People YELEY Perfume',
  description: 'YELEY — The Fragrance of Purpose by Happy People.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="noise">{children}</body>
    </html>
  );
}
