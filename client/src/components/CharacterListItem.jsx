import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./post/PostStyle.css"
import { Link } from 'react-router-dom';

const CharacterListItem = ({
	id,
	name,
	hair_color,
	skin_color,
	eye_color,
	birth_year,
}) => {
	return(
		<>
		<Card style={{ width: '18rem' }} id={id} className='test'>
			<Link as={Link} to={`/CharacterList/${id}`}>
			<Card.Img variant="top" src="https://placehold.co/600x400" />
			</Link>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>	
					<ul>
						<li>hair_color: {hair_color}</li>
						<li>skin_color: {skin_color}</li>
						<li>eye_color: {eye_color}</li>
						<li>birth_year: {birth_year}</li>
					</ul>
				</Card.Text>
				<Button as={Link} to={`/CharacterList/${id}`} className="btn btn-pink-gradient">Read More</Button>
			</Card.Body>
		</Card>
		</>
	);
}

export default CharacterListItem;