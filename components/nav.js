import Link from "next/link";

export default () => (
  <div className="nav-bar">
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/talks">
      <a>Talks</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>

    <Link href="/forever">
      <a>Forever</a>
    </Link>

    <style jsx global>{`
      .nav-bar {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 0.5rem;
        padding-bottom: 1rem;
      }
      .nav-bar a {
        margin-right: 1rem;
      }
    `}</style>
  </div>
);
