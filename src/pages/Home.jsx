import Mission from "../components/Mission";
import Programs from "../components/Programs";
import Gallery from "../components/Gallery";
import GetInvolved from "../components/GetInvolved";

const Home = () => {
    return (
        <main className="overflow-x-hidden">
            <Mission />
            <Programs />
            <Gallery />
            <GetInvolved />
        </main>
    );
};

export default Home;

