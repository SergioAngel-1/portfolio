import { Navbar } from "./components/Navigation/Navbar";
import { Footer } from "./components/Footer/Footer";
import { ScrollIndicator } from "./components/ScrollIndicator";
import {
  AboutMe,
  Profile,
  Skills,
  Projects,
  Contact,
} from "./components/sections";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ScrollIndicator />
      <Navbar />
      <main className="pt-16">
        <AboutMe />
        <Profile />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
