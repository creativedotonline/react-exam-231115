
import PostGridItem from "./PostGridItem";
import Button from "../molecules/Button";
const base_url='https://swapi.dev/api';

import { useState, useEffect } from "react";

export default function PostGrid3(){
    const [post, setPosts] = useState([]);	

	useEffect(()=>{
		fetch(`${base_url}/people`)
		.then(res => res.json())
		.then(data => {
			setPosts(data.results);
		})
	}, []);
    return(
        <>
        <section className="post-list">
                <div className="container">
                {post.map((post,index) =>
                    <PostGridItem key={post.name} id={index+1} {...post}/>
                )}
            </div>
		</section>
        </>
    );
}