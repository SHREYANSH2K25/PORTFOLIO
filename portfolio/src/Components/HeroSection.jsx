import { ArrowDown } from "lucide-react"   // Importing an arrow icon from lucide-react for scroll indication

const HeroSection = () => {
    return (
        // "hero" id is used so navbar links can directly scroll to this section
        <section 
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            {/* Container to center and control width of the content */}
            <div className="container max-w-4xl mx-auto text-center z-10"> 
                <div className="space-y-6">
                    
                    {/* Main Heading with animated introduction */}
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        {/* Fade-in text animations create a smooth entry effect */}
                        <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            Shreyansh
                        </span>
                        <span className="text-gradient ml-2 animate-fade-in-delay-1">
                            Jain
                        </span>
                    </h1>

                    {/* Short introduction */}
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I am a Computer Science student at MNNIT Allahabad with strong foundations in C/C++, 
                        DSA, and hands-on experience in React.js, Tailwind CSS, and modern frontend development. 
                        I enjoy solving challenging problems, building efficient and user-friendly applications, 
                        and continuously learning new technologies. With a blend of technical skills, creativity, 
                        and teamwork, I aim to contribute to innovative projects that deliver real-world impact.
                    </p>

                    {/* Call-to-action button to show projects */}
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        {/* "cosmic-button" is a custom-styled button class in index.css */}
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator at bottom of the hero section */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                {/* Small text above the arrow */}
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                {/* Downward arrow icon */}
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    )
}

export default HeroSection
