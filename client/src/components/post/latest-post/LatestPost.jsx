import { Link } from "react-router-dom";
import Path from "../../../paths";
import { pathToUrl } from "../../../utils/dataUtils";

export default function LatestPost({
	title,
	category,
	userLevel,
	imageUrl,
	summary,
	_id,
}){
	return(
		<>
		<div className="single-post-grid" id={_id} >
			<div className="single-post-grid-image">
				<Link to={pathToUrl(Path.SinglePostId, {postId:_id})} >
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
				<Link className="btn btn-green-gradient" to={pathToUrl(Path.SinglePostId, {postId:_id})} >Read More</Link>
			</div>
		</div>
		
		</>
	);
}