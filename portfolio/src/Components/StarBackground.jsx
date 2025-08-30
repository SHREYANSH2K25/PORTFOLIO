import { useEffect, useState } from "react"

// StarBackground component -> creates animated stars + meteors on the screen
export const StarBackground = () => {

    // useState stores an array of star objects 
    // Each star has -> id, size, x, y, opacity,
    const [stars, setStars] = useState([]);
    // State for meteors
    // Each meteor has -> id, size, x, y, delay, animationDuration
    const [meteors, setMeteors] = useState([]);

    // Runs only once when the component mounts
    // Calls functions to generate stars + meteors only when page loads
    useEffect(() => {
        generateStars();
        generateMeteors();

        // when we see the response on small screen there are way too many stars on the screen
        const handleResize = () =>{
            generateStars();
        }
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Function to generate meteors
    const generateMeteors = () => {
        const numberOfMeteors = 4; // fixed small number of meteors
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i, // unique key
                size: Math.random() * 2 + 1, // size (1–3)
                x: Math.random() * 100, // random x position
                y: Math.random() * 20, // start near top (0–20px)
                delay: Math.random() * 15, // random delay (0–15s)
                animationDuration: Math.random() * 3 + 3, // fall speed (3–6s)
            });
        }

        setMeteors(newMeteors);
    };

    // Function to generate stars dynamically based on window size
    const generateStars = () => {
        // Number of stars depends on screen area
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
        const newStars = [];
        
        // Loop to create each star object 
        // each loop creates a star object with random properties
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i, // unique key for React
                size: Math.random() * 3 + 1, // size (1–4)
                x: Math.random() * window.innerWidth, // random x position
                y: Math.random() * window.innerHeight, // random y position
                opacity: Math.random() * 0.5 + 0.5, // opacity (0.5–1)
                animationDuration: Math.random() * 4 + 2, // twinkle speed (2–6s)
            });
        }

        setStars(newStars);
    };

    // Render meteors + stars
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            
            {/* Render stars */}
            {stars.map((star) => (
                <div
                // Each star is a div styled with random properties
                    key={star.id}

                    // "star" className -> defined in index.css to give base styling (like rounded, white color, glow, etc.) 
                    // "animate-pulse-subtle" -> custom animation (faint pulsing) 
                    // this mapping mean take each star object from array and transform it into a div jsx element
                    className="star animate-pulse-subtle" // star style + twinkle animation
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "px",
                        top: star.y + "px",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                        position: "absolute",
                    }}
                />
            ))}

            {/* Render meteors */}
            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor" // define in CSS with falling animation
                    style={{
                        width: meteor.size * 50 + "px",  // long stretched shape
                        height: meteor.size * 2 + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay ,
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}

        </div>
    );
};
