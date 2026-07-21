import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { PageMeta } from './PageMeta';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <PageMeta />
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
