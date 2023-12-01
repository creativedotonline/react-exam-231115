import PostDetails from "./post-details/PostDetails"
import AminBg from "../AnimBg";

export default function PageSinglePost(){
	
	return(
		<>
		<div className="wrapper">
			<main className="main">
				<PostDetails />
			</main>
		</div>
		<AminBg />
		</>
	);
}