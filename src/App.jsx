import React from "react";
import HeroSection from "./components/HeroSection";
import WhyLiveViewsMatter from "./components/WhyLiveViewsMatter";
import WhyChooseInstaLiveViews from "./components/WhyChooseInstaLiveViews";
import PricingPlans from "./components/PricingPlans";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ResultsStats from "./components/ResultsStats";
import SafetyFAQ from "./components/SafetyFAQ";
import BenefitsFlipCards from "./components/BenefitsFlipCards";
import FAQSection from "./components/FAQSection";
import AboutSection from "./components/AboutSection";
import ProTipsSection from "./components/ProTipsSection";
import ReadyToOwnSpotlight from "./components/ReadyToOwnSpotlight";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";
import ContactSupport from "./pages/ContactSupport";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen flex flex-col bg-gradient-to-tr from-insta-blue via-insta-pink to-insta-yellow">
              <HeroSection />
              <WhyLiveViewsMatter />
              <WhyChooseInstaLiveViews />
              <PricingPlans />
              <HowItWorksSection />
              <TestimonialsSection />
              <ResultsStats />
              <SafetyFAQ />
              <BenefitsFlipCards />
              <FAQSection />
              <AboutSection />
              <ProTipsSection />
              <ReadyToOwnSpotlight />
              <ContactSection />
              <ScrollToTopButton />
              <Footer />
            </div>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/contact-support" element={<ContactSupport />} />
      </Routes>
    </BrowserRouter>
  );
}
