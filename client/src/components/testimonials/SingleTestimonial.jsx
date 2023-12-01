import "../post/PostStyle.css"
import { Link } from 'react-router-dom';


const SingleTestimonial  = ({
	id,
	name,
	hair_color,
	skin_color,
	eye_color,
	birth_year,
}) => {
	return(
		<>
		<div className="single-post-grid" id={id} >
			<div className="single-post-grid-image">
				<Link to={`/post/${id}`}>
					<img className="single-post-grid-img-top" src="https://placehold.co/600x400" />
				</Link>
			</div>
			<div className="single-post-grid-body">
				<div className="single-post-grid-title">
					<h3>{name}</h3>
				</div>
				<div className="single-post-grid-text">	
					<ul>
						<li>hair_color: {hair_color}</li>
						<li>skin_color: {skin_color}</li>
						<li>eye_color: {eye_color}</li>
						<li>birth_year: {birth_year}</li>
					</ul>
				</div>
				<Link as={Link} to={`/post/${id}`} className="btn btn-pink-gradient">Read More</Link>
			</div>
		</div>
		</>
	);
}

export default SingleTestimonial;