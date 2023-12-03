import Footer from "./footer/Footer"
import { useState, useEffect } from "react";
import HeadingSection from "./header/HeadingSection"
import CharacterListItem from "./CharacterListItem"

const base_url='https://swapi.dev/api';

const CharacterList = () => {
	const [characters, setCharacters] = useState([]);
	
	useEffect(()=>{
		fetch(`${base_url}/people`)
		.then(res => res.json())
		.then(data => {
			setCharacters(data.results);
		})
	}, []);

	return(
		<>
		<HeadingSection />
	
			<main className="main">								
				<section className="post-list">
				<div className="container">
					{characters.map((characters,index) =>
						<CharacterListItem key={characters.name} id={index+1} {...characters}/>
					)}
					</div>
				</section>
			</main>

        <Footer />
		</>
	);
}

export default CharacterList;