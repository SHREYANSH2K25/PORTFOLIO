import { ThemeToggle } from "../Components/ThemeToggle";
import {StarBackground} from "@/Components/StarBackground"
const Home = ()=>{
    return (
        <div className="mih-h-screen bg-background text-foreground overflow-x-hidden">
            
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Background Effects */}
            <StarBackground />
            {/* NavBar */}

            {/* Main Content */}

            {/* Footer */}
        </div>
    )
}  

export default Home;