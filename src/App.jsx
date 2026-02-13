import './App.css'
import Header from './components/Header'
import PartySection from './components/PartySection'
import HeroSection from './components/HeroSection'
import SloganSection from './components/SloganSection'
import WhyCandidateSection from './components/WhyCandidateSection'
import DevelopmentPriorities from './components/DevelopmentPriorities'
import VillageIdentity from './components/VillageIdentity'
import PublicFeedback from './components/PublicFeedback'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-election-red to-election-yellow">
      <Header />
      <PartySection />
      <HeroSection />
      <SloganSection />
      <WhyCandidateSection />
      <DevelopmentPriorities />
      <VillageIdentity />
      <PublicFeedback />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
