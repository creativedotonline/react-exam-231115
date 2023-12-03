import "../post/PostStyle.css"
import { Link } from 'react-router-dom';
import "./TestimonialsStyle.css"


const SingleTestimonial  = ({
	title,
	img,
	description,
	_id,
}) => {
	return(
		<>
		<div className="single-post-list" id={_id} >
			<div className="single-post-list-image">
				<img className="single-post-list-img-top" src={img} />
			</div>
			<div className="single-post-list-body">
				<div className="single-post-list-title">
					<h3>{title}</h3>
				</div>
				<div className="single-post-list-text">{description}</div>
			</div>
		</div>
		</>
	);
}

export default SingleTestimonial;