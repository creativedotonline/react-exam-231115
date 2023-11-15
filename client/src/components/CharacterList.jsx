import { useEffect, useState } from "react"

const CharacterList = () => {
const [character, setCharacters] = useState([])

    useEffect(()=> {
        fetch(`${base_url}/people`)
            .then(res => res.json)
            .then(setCharacters)
    }, []);

    return(
        <>
            <ul>
                {CharacterList.map(character => <li key={character.name}>{character.name}</li>)}
            </ul>
        </>
    );
}