import PostCreate from "./post-create/PostCreate"
import AminBg from "../AnimBg";

export default function PagePostCreate(){
	
	return(
		<>
		<div className="wrapper">
			<main className="main">
				<section>
					<div className="container">
					<div className="content-title">
					<h1>Create Post</h1>
					</div>
						<PostCreate />
					</div>
				</section>
			</main>
		</div>
		<AminBg />
		</>
	);
}