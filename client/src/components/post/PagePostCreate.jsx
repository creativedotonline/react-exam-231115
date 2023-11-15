import PostCreate from "./PostCreate"
import HeadingSection from "../header/HeadingSection"


export default function PagePostCreate(){
	
	return(
		<>
		<HeadingSection />
		<div className="wrapper">
			<main className="main">
				<section className="post-list">
					<div className="container">
					<h1>Create Post</h1>
						<PostCreate />
					</div>
				</section>
			</main>
		</div>
		</>
	);
}