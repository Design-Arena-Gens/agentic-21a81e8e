import Link from "next/link";

const links = [
  { href: "https://nextjs.org/docs", label: "Next.js Docs" },
  { href: "https://react.dev/learn", label: "React Learn" },
  { href: "https://vercel.com/docs", label: "Vercel Docs" }
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <h1>Hello, world.</h1>
        <p>
          This site was provisioned autonomously and is ready to deploy to{" "}
          <span className="highlight">Vercel</span>.
        </p>
      </section>
      <section className="resources">
        <h2>Explore</h2>
        <ul>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
