import { useEffect, useState } from "react";

import HeroSection from "./header/HeroSection";
import About from "./About";
import UserList from "./users/UserList";
import Whyus from "./Whyus"
import ClientSection from "./ClientSection"
import ControlledForm from "./ControledForm";
import LatestPost from "./post/latest-post/LatestPost";
import * as postServices from "../services/postServices"

export default function PageHome(
	_id,
	accessToken,
	email,
) {
	const [latestPost, setLatestPost] = useState([]);

	useEffect(() =>{
		postServices.getLatest()
			.then(result => setLatestPost(result));
	},[])

    return(
        <>
		<HeroSection />
        <div className="wrapper">	
			<main className="main">
				{LatestPost.map(latestPost =>  <LatestPost /> )}
				{!latestPost.length && <p className="no-articles">No posts yet.</p>}
			<ControlledForm />
			<UserList />      
			<About />
			<Whyus />
			<ClientSection />      
		</main>
		</div>
    </>
    );
}
