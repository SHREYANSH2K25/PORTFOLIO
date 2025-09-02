import { ThemeToggle } from "../Components/ThemeToggle";
import {StarBackground} from "@/Components/StarBackground"
import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection"
import AboutSection from "@/Components/AboutSection"
import SkillsSection from "@/Components/SkillsSection"
import ContactSection from "@/Components/ContactSection"
import Footer from "@/Components/Footer"
const Home = ()=>{
    return (
        <div className="mih-h-screen bg-background text-foreground overflow-x-hidden">
            
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Background Effects */}
            <StarBackground />
            {/* NavBar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ContactSection />
            </main>
            {/* Footer */}
            <Footer />
        </div>
    )
}  

export default Home;