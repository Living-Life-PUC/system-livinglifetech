import About from "../components/home/About";
import Banner from "../components/home/Banner";
import Community from "../components/home/Community";
import Register from "../components/home/Register";
import Resourses from "../components/home/Resources";
import Trainer from "../components/home/Trainer";

function Home() {
  return (
    <>
      <Banner />
      <About />
      <Resourses />
      <Trainer />
      <Community />
      <Register />
    </>
  );
}

export default Home;
