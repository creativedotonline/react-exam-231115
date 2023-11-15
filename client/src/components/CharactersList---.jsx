import { useEffect } from "react";
import CharacterListItem from "./CharacterListItem";
const base_url = 'https://swapi.dev/api'

export default function CharacterList() {
	const [characters, setCharacters] = useState([]);
	
	useEffect(()=>{
		fetch(`${base_url}/people`)
			.then(res => res.json())
			.then(data =>{
			setCharacters(data.result);
		})
	}, []);
		
	return(
		<>
		<div>
			{characters.map((character, index) => 
				<CharacterListItem key={character.name} id={index + 1} {...character} />
			)}
		</div>
		</>
	);
}