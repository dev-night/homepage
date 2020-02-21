import Link from '../lib/ActiveLink';

export default () => (
  <div className="nav-bar">
    <Link activeClassName="active" href="/">
      <a>Home</a>
    </Link>
    <Link activeClassName="active" href="/talks">
      <a>Talks</a>
    </Link>
    <Link activeClassName="active" href="/about">
      <a>About</a>
    </Link>
    <Link activeClassName="active" href="/gallery">
      <a>Photo Gallery</a>
    </Link>
    <Link activeClassName="active" href="/events">
      <a>Past Meetups</a>
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

      .active {
        color: gold;
      }
    `}</style>
  </div>
);
