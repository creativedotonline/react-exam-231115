import HeroSection from "./header/HeroSection";
import About from "./About";
import Footer from "./footer/Footer";
import UserList from "./users/UserList";
import Whyus from "./Whyus"
import ClientSection from "./ClientSection"
import ControlledForm from "./ControledForm";
import PostList from "./post/post-list/PostList"

export default function PageHome() {
    return(
        <>
		<HeroSection />
        <div className="wrapper">	
			<main className="main">
				<PostList />
			<ControlledForm />
			<UserList />      
			<About />
			<Whyus />
			<ClientSection />      
		</main>
		</div>
		<Footer />
    </>
    );
}