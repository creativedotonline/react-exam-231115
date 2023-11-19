import "./FooterStyle.css"
import "../search/SearchStyle.css"

const Footer = () => {
    return (
        <section className="footer footer_section">
            <div className="info_section">
                <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 info_col">
                        <div className="info_contact">
                            <h4>How to play</h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 info_col">
                        <div className="info_contact">
                            <h4>Contact Us</h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 info_col">
                        <div className="info_contact">
                            <h4>Terms & Conditions</h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 info_col ">
						<div className="info_contact">
                            <h4>Privacy Policy</h4>
                        </div>
                    </div>
                </div>
				<div className="row width-half text-align-center row-underline">
					<div className="subscribe col col-6 col-md-4 ">					
						<form action="#" className="form-wrapper horizontal-over-btn">
							<div className="input-container">
								<div className="input-wrapper">
									<span><i className="fa-regular fa-envelope-open"></i></span>
									<input type="text" placeholder="Enter email" name="subscribe" />
								</div>
								<button className="btn close-btn btn-pink-gradient">
									<i className="fa-solid fa-xmark"></i>
									Submit
								</button>
							</div>
						</form>
					</div>
					<div className="col-6 col-md-4 col">
						<a href="https://www.xs-software.com/" target="_blank" rel="noreferrer" className="xs-logo"></a>
					</div>
				</div>	
				<div className="footer-copy text-align-center row">
                    <p>For the best gaming experience, we recommend using the latest available versions of the browsers Firefox & Chrome
                    © 2023 XS Software. All rights reserved.</p>
                    <p><strong>This project is a matter of educational purposes.</strong></p>
                </div>
                
                </div>
                </div>
        </section>
    );
};

export default Footer;