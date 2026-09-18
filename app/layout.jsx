import './globals.css';

export const metadata = {
  title: 'Beloveeth Realty & PropTech',
  description: 'Verified real estate opportunities and market intelligence across Nigeria.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}