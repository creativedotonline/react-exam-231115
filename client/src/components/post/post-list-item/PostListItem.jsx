import {Link} from "react-router-dom"

export default function PostListItem({
	title,
	category,
	userLevel,
	imageUrl,
	summary,
	_id,
}) {
	return(
		<>
		<div className="single-post-grid" id={_id} >
			<div className="single-post-grid-image">
				<Link to={`/post/${_id}`}>
					<img className="single-post-grid-img-top" src={imageUrl} />
				</Link>
			</div>
			<div className="single-post-grid-body">
				<div className="single-post-grid-title">
					<h3>{title}</h3>
					<span>{category}</span>
					<span>{userLevel}</span>
				</div>
				<div className="single-post-grid-text">	
					{summary}
				</div>
				<Link className="btn btn-green-gradient">Read More</Link>
			</div>
		</div>
		</>
	);
}