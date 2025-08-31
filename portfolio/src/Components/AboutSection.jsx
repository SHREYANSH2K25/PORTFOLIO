// Importing icons from lucide-react library
// These are vector icons (SVGs) you can use as React components
import { Briefcase, Code, User } from "lucide-react";

// AboutSection Component
// This represents the "About Me" section on your portfolio website
const AboutSection = () => {
  return (
    // Main section wrapper with spacing and relative positioning
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section heading */} 
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        {/* Two-column grid layout: left (intro + buttons), right (skills cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN - Personal intro */}
          <div className="space-y-6">
            {/* Subtitle */}
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & DSA Enthusiast
            </h3>

            {/* Short description paragraphs */}
            <p className="text-muted-foreground">
              I like creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              {/* Contact button */}
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              {/* Download CV button */}
              <a
                href="" // You can later link this to your resume PDF
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - Skills/Services cards */}
          <div className="grid grid-cols-1 gap-6">

            {/* Card 1 - Web Development */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                {/* Icon inside circular background */}
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                {/* Card text */}
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - UI/UX Design */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Project Management */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Projects & Teamwork</h4>
                  <p className="text-muted-foreground">
                    Building academic and personal projects while collaborating
                    with peers to improve problem-solving and coding skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End of right column */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
