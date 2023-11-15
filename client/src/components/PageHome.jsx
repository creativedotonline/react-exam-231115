import HeroSection from "./header/HeroSection";
import About from "./About";
import Footer from "./footer/Footer";
import UserList from "./users/UserList";
import PostGrid3 from "./post/PostGrid3";
import Whyus from "./Whyus"
import ClientSection from "./ClientSection"
import ControlledForm from "./ControledForm";

export default function PageHome() {
    return(
        <>
		<HeroSection />
        <div className="wrapper">	
			<main className="main">
			<ControlledForm />
			<UserList />      
			<PostGrid3 />    
			<About />
			<Whyus />
			<ClientSection />      
		</main>
		</div>
		<Footer />
    </>
    );
}