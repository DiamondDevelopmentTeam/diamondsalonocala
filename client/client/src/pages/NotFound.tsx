import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <span>404</span>
        <h1>This page slipped out for a blowout.</h1>
        <p>The link may be old, or the page may have moved.</p>
        <Link className="button button--gold" to="/">Return Home</Link>
      </div>
    </section>
  );
}
