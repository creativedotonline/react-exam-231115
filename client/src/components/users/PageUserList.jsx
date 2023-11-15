import Footer from "../footer/Footer";
import HeadingSection from "../header/HeadingSection";
import UserList from "./UserList";

export default function PageUserList(){
    return(
        <>
		<HeadingSection></HeadingSection>
		<div className="wrapper">	
			<main className="main">
				<UserList />
			</main>
		</div>
        <Footer />
        </>
    );
}