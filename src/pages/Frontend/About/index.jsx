import AboutSection from "./AboutSection"
import OurFeatures from "./OurFeatures"
import OurMission from "./OurMission"
import OurStory from "./OurStory"
import OurTeam from "./OurTeam"
import Map from "../../../components/Map"

const About = () => {
    return (
        <main>
            <AboutSection />
            <OurMission />
            <OurStory />
            <OurFeatures />
            <OurTeam />
            <Map />
        </main>
    )
}

export default About