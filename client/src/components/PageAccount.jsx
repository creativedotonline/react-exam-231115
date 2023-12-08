
import { useEffect, useState } from 'react';
import * as userService from "/src/services/userService"

import Account from "./account/Account";
import AminBg from "./AnimBg";


export default function PageAccount(){
    const [user, setuser] = useState([]);
	
    useEffect(() => {
		userService.getAll()
			.then(result => setuser(result))
			.catch(err=>{
				console.log(err);
			});
	}, []);

    return(
        <>
        <main className="main">
				<section className="account-page">
					<div className="container width-half">
                        {user.map(user => (
							<Account key={user.email} {...user} />
						))}
                        {/* {comments.map(({ _id, text, owner:{email} }) => (
								<li key={_id} className="comment">
									<div className="user-bio">
										<span className="user-img">
											<img className="single-post-grid-img-top" src=" " alt={post.title} />
										</span>
									<span className="username">{email}</span>
										</div>
									<p>{text}</p>
								</li>
							))} */}

						{user.length === 0 && <h3 className='no-article'>No article yet</h3>}
					</div>
				</section>
			</main>

		<AminBg />
        </>
    );
}