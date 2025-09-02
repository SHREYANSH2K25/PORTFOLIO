import { cn } from '@/lib/utilis'; // utility function that merges Tailwind classes without conflicts
import { useState, useEffect } from "react" // React hooks for state and lifecycle
import { X, Menu } from "lucide-react" // icons for hamburger menu and close button

// list of links we want to show in the navbar
const navItems = [
    { name: "Home", href: "#hero" }, // goes to section with id="Home"
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
]


const Navbar = () => {
    // track if user has scrolled down (for background blur effect)
    const [isScrolled, setIsScrolled] = useState(false);

    // track if mobile menu (hamburger) is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // run once when navbar loads → listens for scrolling
    useEffect(() => {
        const handleScroll = () => {
            // if user scrolls more than 10px → mark navbar as "scrolled"
            setIsScrolled(window.scrollY > 10);
        }

        // start listening for scroll events
        window.addEventListener("scroll", handleScroll);

        // cleanup: stop listening when component unmounts
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        // outer <nav> wrapper
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300", // always fixed at top
                isScrolled
                    ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" // when scrolled → shrink + blur + shadow
                    : "py-5" // when at top → bigger padding, no blur
            )}
        >
            <div className="container flex justify-between items-center">
                {/* Brand / Logo */}
                <a
                    className="text-xl font-bold text-primary flex items-center"
                    href="#hero"
                >
                    <span className="relative z-10">
                        {/* glowing text for name */}
                        <span className="text-glow text-foreground">Shreyansh's</span>{" "}
                        Portfolio
                    </span>
                </a>

                {/* Desktop navigation (hidden on mobile, visible on md and above) */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        // mapping over navItems → creates a <a> link for each
                        <a
                            key={key} // unique key for React
                            href={item.href} // scrolls to section
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile menu toggle button (only visible on mobile) */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)} // toggle menu open/close
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"} // accessibility
                >
                    {/* if open → show "X", if closed → show "Menu" icon */}
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile navigation (full-screen overlay menu) */}
                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden", // only mobile
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto" // visible when open
                            : "opacity-0 pointer-events-none" // hidden when closed
                    )}
                >
                    {/* vertical list of nav links in mobile menu */}
                    <div className="flex flex-col space-y-8 text-xl">
                        {/* for each item in navItems create a link using anchor tag */}
                        {navItems.map((item, key) => (
                            <a
                                key={key} // React used a unique key to map
                                href={item.href} // link of item 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)} // close menu when clicked
                            >
                                {/* item name */}
                                {item.name} 
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
