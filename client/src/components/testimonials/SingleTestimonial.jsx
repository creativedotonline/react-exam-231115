import "../post/PostStyle.css"
import { Link } from 'react-router-dom';
import "./TestimonialsStyle.css"
import { formatDate } from "../../utils/dataUtils";


const SingleTestimonial  = ({
	ownername,
	ownerimg,
	testimonial,
	_id,
	_createdOn,
}) => {
	return(
		<>
		<div className="single-post-list" id={_id} >
			<div className="single-post-list-feature">
			<div className="single-post-list-image">
				<img className="single-post-list-img-top" src={ownerimg} />
			</div>
			<span>{formatDate(_createdOn)}</span></div>
			<div className="single-post-list-body">

				<div className="single-post-list-title">
					<h3>{ownername}</h3>
				</div>
				<div className="single-post-list-text">{testimonial}</div>
			</div>
		</div>
		</>
	);
}

export default SingleTestimonial;