import PostCreate from "./post-create/PostCreate"
import AminBg from "../animbg/AnimBg";

export default function PagePostCreate(){
	
	return(
		<>

			<main className="main">
				<section>
					<div className="container width-half">
					<div className="content-title">
					<h1>Create Post</h1>
					</div>
						<PostCreate />
					</div>
				</section>
			</main>

		<AminBg />
		</>
	);
}