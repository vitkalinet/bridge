import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PeopleCards from "@/components/PeopleCards";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <PeopleCards />
      <ContactForm />
      <Footer />
    </main>
  );
}
