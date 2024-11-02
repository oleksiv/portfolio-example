import HeroComponent from "@/components/components-hero";
import AboutComponent from "@/components/components-about";
import TechnologiesComponent from "@/components/components-technologies";
import ProjectsComponent from "@/components/components-projects";
import ContactComponent from "@/components/components-contact";
import {FooterComponent} from "@/components/components-footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <HeroComponent/>
            <AboutComponent/>
            <TechnologiesComponent/>
            <ProjectsComponent/>
            <ContactComponent/>
            <FooterComponent />
        </main>
    );
}
