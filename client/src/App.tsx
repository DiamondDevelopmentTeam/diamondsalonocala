import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Contact } from './pages/Contact';
import { FormDetail } from './pages/FormDetail';
import { Forms } from './pages/Forms';
import { GivingBack } from './pages/GivingBack';
import { Home } from './pages/Home';
import { JoinTeam } from './pages/JoinTeam';
import { NotFound } from './pages/NotFound';
import { OurSpace } from './pages/OurSpace';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { SalonEtiquette } from './pages/SalonEtiquette';
import { Services } from './pages/Services';
import { Specials } from './pages/Specials';
import { Team } from './pages/Team';
import { Terms } from './pages/Terms';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="our-space" element={<OurSpace />} />
          <Route path="services" element={<Services />} />
          <Route path="giving-back" element={<GivingBack />} />
          <Route path="forms" element={<Forms />} />
          <Route path="forms/:slug" element={<FormDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="specials" element={<Specials />} />
          <Route path="join-our-team" element={<JoinTeam />} />
          <Route path="salon-etiquette" element={<SalonEtiquette />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="terms-conditions" element={<Navigate to="/terms" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
