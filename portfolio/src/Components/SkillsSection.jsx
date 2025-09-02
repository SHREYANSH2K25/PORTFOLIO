import {useState} from "react"
import {cn} from "@/lib/utilis"
const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "React.js", level: 80, category: "Frontend" },
  { name: "Redux Toolkit", level: 75, category: "Frontend" },
  { name: "Context API", level: 75, category: "Frontend" },
  { name: "Responsive Design", level: 85, category: "Frontend" },

  // Tools
  { name: "Git & GitHub", level: 85, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
  { name: "NPM & Yarn", level: 50, category: "Tools" },

  // Other
  { name: "Data Structures & Algorithms", level: 80, category: "Other" },
  { name: "Problem Solving", level: 85, category: "Other" }
];


// Categories to filter skills (Note: "All" shows everything)
const categories = ["All", "Frontend", "Tools", "Other"];

const SkillsSection = () =>{
    const [activeCategory, setActiveCategory] = useState("All");

    // Filter skills according to selected category
    // If category is "All" → return all skills
    // Else → return only skills that match the selected category
    const filteredSkills = skills.filter((skill) => activeCategory === "All" || skill.category === activeCategory);

    return (
        // JSX: looks like HTML but is actually JavaScript syntax sugar
        // Important JSX Rule → always close tags properly (e.g., <div /> not just <div>)
    <section id="skills" 
             className = "py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            {/* Section Title */}
            <h2 className = "text-3xl md:text-4xl font-bold mb-12 text-center">My 
                <span className = "text-primary">Skills</span>
            </h2>

            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {/* Loop through categories array and create a button for each */}
                {/* This is for adding options at the top to view categories of skills */}
                {categories.map((category, key) => (
                    <button key = {key} 
                        onClick = {() => setActiveCategory(category)}
                        className ={cn(
                            "px-5 py-2 rounded-full transisiton-colors duration-300 capitalize cursor-pointer",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}>
                                
                    {category}</button>
                ))}
            </div>

                {/* SKILL CARDS GRIDS */}

            {/* we loop through FILTERED skills list and create a card for each skill */}
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">

                        {/* Skill Title */}
                        <div className = "text-left mb-4">
                            <h3 className = "font-semibold text-lg">{skill.name} </h3>
                        </div>

                        {/* Progress Bar Background */}
                        <div className="w-full bg-secondary/50 h-2 rounded-full oberflow-hidden">
                            <div className = "bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                            // Note***********
                            // Inline styles – { width: skill.level + "%" } likhte waqt curly braces double lagti hain because pehla {} JSX ke andar JS denote karta hai aur second {} ek object hai.
                                style={{width:skill.level + "%"}} 
                            />
                        </div>

                        {/* Skill Percentage */}
                        <div className = "text-right mt-1">
                            <span className = "text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    </section>
    )
}

export default SkillsSection;