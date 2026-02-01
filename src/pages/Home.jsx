import React from "react";
import Mission from "../components/Mission";
import ImpactMap from "../components/ImpactMap";
import Programs from "../components/Programs";
import Impact from "../components/Impact";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import GetInvolved from "../components/GetInvolved";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <main>
            <Mission />
            <ImpactMap />
            <Programs />
            <Impact />
            <Testimonials />
            <Gallery />
            <GetInvolved />
            <Contact />
        </main>
    );
};

export default Home;
