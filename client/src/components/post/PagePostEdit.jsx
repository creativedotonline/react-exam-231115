import PostEdit from "./post-edit/PostEdit"
import AminBg from "../AnimBg";

export default function PagePostEdit(){	
	return(
		<>

			<main className="main">
				<section>
					<div className="container width-half">
					<div className="content-title">
					<h1>Edit Your Post</h1>
					</div>
						<PostEdit />
					</div>
				</section>
			</main>

		<AminBg />
		</>
	);
}