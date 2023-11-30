import { Link } from "react-router-dom";


export default function About(){
    return(
        <><section className="about_section pink-gradient-bg">
			<div className="decor layout_padding ">
        <div className="container  ">
          <div className="heading_container heading_center">
            <h2>
			Welcome to the world of <span><img src="/src/assets/images/logo.png" alt="" /></span>
            </h2>
            <p>
              Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 ">
              <div className="img-box">
                <img src="/src/assets/images/ladies.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h3>
				JOIN THOUSANDS OF PLAYERS ONLINE
                </h3>
                <p>
				Ladies, A fantasy world full of magic! And now you can be part of it! Transform yourself with this new collection and show us your goddess / fantasy creation.
				As always, let us know which 1 item you really, really want and you might be lucky enough to be touched by the gods.
                </p>
                <p>
				Customize your own supermodel and guide her through the glamorous world of fashion! Completely free and easy to play, in the Lady Popular world is full of mini-games, malls, pets, boyfriends, and duels!                </p>
                <Link href="" className="btn btn-white">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
		</div>
        </section>
        
        </>
    );
}