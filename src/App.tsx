/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Sidebar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import PortfolioSection from './components/portfolio/PortfolioSection';
import PricingTiers from './components/pricing/PricingTiers';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Testimonials from './components/home/Testimonials';

export default function App() {
  return (
    <div className="flex bg-brand-bg min-h-screen">
      <Sidebar />
      <div className="flex-1 md:ml-72 flex flex-col min-w-0">
        <main className="bg-white flex-1 overflow-x-hidden">
          <Hero />
          <Services />
          <PortfolioSection />
          <Testimonials />
          <PricingTiers />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
