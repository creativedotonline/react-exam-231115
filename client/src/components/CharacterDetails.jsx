import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import HeadingSection from "./header/HeadingSection"
const CharacterDetails = () => {
	const {id} = useParams();
	const location = useLocation();
	const navigate = useNavigate();
	const [character, setCharacter] = useState({});
	
	console.log(location.pathname);
	useEffect (()=>{
		fetch(`https://swapi.dev/api/people/${id}`)
			.then(res => {
				if(!res.ok){
					throw new Error('Not found');
				}
				return res.json();
			})
			.then(setCharacter)
			.catch((err) =>{
				navigate('/404')
			});
	},[id]);
	return(
		<>
		<HeadingSection />
		<div className="wrapper">	
			<main className="main">								
				<section className="post-list">
					<div className="container">
					<h1>{character.name}</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. {character.height}</p>
					</div>
			</section>
			</main>
		</div>
		</>
	);
} 

export default CharacterDetails;