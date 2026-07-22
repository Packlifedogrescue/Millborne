import "./globals.css";

export const metadata = {
  title: "Millborne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
