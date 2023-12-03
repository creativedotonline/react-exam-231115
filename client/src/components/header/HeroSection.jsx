import "./HeroSectionStyle.css"
import Button from "../molecules/Button"
import { Link } from "react-router-dom";

export default function HeroSection(){
    return(
	<>
	
	<div className="hero_area">
        <div className="hero_bg_box">
          <div className="bg_img_box">
			
          </div>
        </div>		
        <section className="slider_section ">
          <div id="customCarousel1" className="carousel slide client_owl-carousel" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1 className='heading'>FASHION GAME</h1>
                        <p>Play for Free. Join Millions of Players. Create a Lady as unique as yourself!. Explore hundreds of outfits and accessories. Change your look at any time!</p>
                        {/* <Link to="" className="button btn btn-green-gradient edit-btn" >Raed More</Link> */}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="src/assets/images/slide-1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-6 ">
                      <div className="detail-box">
                        <h1>
                          Crypto
                          Currency
                        </h1>
                        <p>
                          Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                        </p>
                        <Button>Ok</Button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="src/assets/images/apartment-bg.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-6 ">
                      <div className="detail-box">
                        <h1>
                          Appartment
                        </h1>
                        <p>
						This is your place, where you can display and use your new items, arranged them in the rooms and open even more secret zones and rewards.
                        </p>
                        <div className="btn-box">
                          <a href="#" className="btn1">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="src/assets/images/apartment-bg.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <ol className="carousel-indicators">
              <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
            </ol> */}
          </div>
  
        </section>
      </div>
	</>	
    
    );
}

