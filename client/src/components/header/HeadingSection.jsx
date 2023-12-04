import "./HeadingSectionStyle.css"
import "./HeroSectionStyle.css"

const HeadingSection = (heading) => {
    return(
    <div className="hero_area">
        <div className="hero_bg_box">
          <div className="bg_img_box">
          </div>
        </div>
        <section className="page-heading ">
		<div className="wrapper">
            <div className="row">
                <div className="col-md-6">
                    <div className="detail-box">
                        <h1 className='heading'>
                            test
                        </h1>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="img-box">
                        <img src="/src/assets/images/l4.png" alt="" />
                        <img src="/src/assets/images/l4-2.png" alt="" className="p-absolute" />
                    </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}
export default HeadingSection;