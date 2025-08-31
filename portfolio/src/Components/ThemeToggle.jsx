import { Moon, Sun } from "lucide-react"; // Importing icons for dark & light mode
import { useState, useEffect } from "react";
import {cn} from '@/lib/utilis'; // import tailwindmerge class name
// ThemeToggle component → used for switching between Dark Mode and Light Mode
export const ThemeToggle = () => {
    // State to check whether dark mode is ON or OFF
    const [isDarkMode, setIsDarkMode] = useState(false);

    // useEffect → runs when the component is first loaded (refresh/open page)
    // Here we check if the user had selected dark mode earlier and saved in localStorage
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme"); // get saved theme from localStorage

        if (storedTheme === "dark") {
            setIsDarkMode(true);                          // update state
            document.documentElement.classList.add("dark"); // add "dark" class to <html> → enables Tailwind dark styles
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark"); // remove "dark" → back to light mode
        }
    }, []); // dependencies -> [] means run only once when component is mounted

    // Function to toggle (switch) between Dark and Light mode
    const toggleTheme = () => {
        if (isDarkMode) {
            // If currently in Dark Mode → switch to Light
            document.documentElement.classList.remove("dark"); // remove "dark" class from <html>
            setIsDarkMode(false);                              // update state to light
            localStorage.setItem("theme", "light");            // save choice in localStorage
        } else {
            // If currently in Light Mode → switch to Dark
            document.documentElement.classList.add("dark");    // add "dark" class to <html>
            setIsDarkMode(true);                               // update state to dark
            localStorage.setItem("theme", "dark");             // save choice in localStorage
        }
    };

    // UI part (JSX) → A button with icon (sun or moon depending on state)
    return (

        // to apply styling we used tailwind merge which removes conflict and classes can be passed as multiple strings like here we put comma between two strings of classes
        <button 
            onClick={toggleTheme} 
            className= {cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-hidden"
            )}
        >
            {isDarkMode ? (
                // If dark mode is active → show Sun icon
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                // If light mode is active → show Moon icon
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    );
};
