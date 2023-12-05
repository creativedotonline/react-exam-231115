import { Link } from "react-router-dom"

export default function PostListItem ({
	title,
	category,
	userLevel,
	imageUrl,
	summary,
	_id,
}) {
	let letters ='';
	let exerpt = '';
	for(let i=0; i<30;i++){
		letters = summary[i];
		exerpt = letters +'';
	} 
	console.log(exerpt)
	
	return (
		<>
			<div className="single-post-grid" id={_id} >
				<div className="single-post-grid-image">
					<Link to={`/post-list/${_id}`}>
						<img className="single-post-grid-img-top" src={imageUrl} />
					</Link>
				</div>
				<div className="single-post-grid-body">
					<div className="single-post-grid-title">
						<h3>{title}</h3>
						<span>{category}</span>
					</div>
					<div className="single-post-grid-text">
						{summary}
					</div>
					<Link className="btn btn-green-gradient" to={`/post-list/${_id}`} >Read More</Link>
				</div>
			</div>
		</>
	);
}