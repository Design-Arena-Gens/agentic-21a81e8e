import "./globals.css";

export const metadata = {
  title: "Agentic Hello",
  description: "Minimal Next.js app generated autonomously."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
