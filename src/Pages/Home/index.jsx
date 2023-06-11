import About from "components/About";
import Footer from "components/Footer";
import Highlights from "components/Highlight";
import Showcases from "components/Showcase";
import Testimonial from "components/Testimonial";

const Home = () => {
    return (
        <>
            <Showcases />
            <Highlights />
            <Testimonial />
            <About />
            <Footer />
        </>
    );
};

export default Home;