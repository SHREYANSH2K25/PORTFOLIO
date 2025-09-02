import {
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utilis";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ContactSection = () => {
  // Toast hook (for showing success notifications)
  const { toast } = useToast();

  // State to show "Sending..." while submitting
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State to store form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Function to handle user typing in inputs
  const handleChange = (e) => {
    setFormData({
      ...formData, // keep old values
      [e.target.name]: e.target.value, // update only the changed input
    });
  };

  // Function that runs when user submits the form
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents full page refresh

    setIsSubmitting(true); // show "Sending..." on button

    // Simulate sending message (like API request)
    setTimeout(() => {
      // Show success toast notification
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form values after submit
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Re-enable the button
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        {/* Two-column layout: Contact info (left) + Form (right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* ---------------- LEFT SIDE ---------------- */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            {/* Contact details with icons */}
            <div className="space-y-6 justify-center">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:shreyanshjain354@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    shreyanshjain354@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    MNNIT, INDIA
                  </a>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center ">
                <a
                  href="https://www.linkedin.com/in/shreyansh-jain-9a2067325/"
                  target="_blank"
                  rel="noreferrer"
                  className = "hover:text-primary"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/SHREYANSH2K25"
                  target="_blank"
                  rel="noreferrer"
                  className = "hover:text-primary"
                >
                  <Github />
                </a>
                <a href="#" target="_blank" rel="noreferrer" className = "hover:text-primary">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* ---------------- RIGHT SIDE (FORM) ---------------- */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Alan..."
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
