import Button from "../molecules/Button";

export default function PostGridItem(){
    return(
        <>
        <div className="box ">
            <div className="img-box">
                <img src="src/assets/images/client1.jpg" alt="" className="box-img" />
            </div>
            <div className="detail-box">
                <div className="post-img">
                    <img src="src/assets/images/city.jpg" alt="" className="box-img" />
                </div>
                <h5>
                Heading Here
                </h5>
                <p>
                fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
                </p>
                <Button />
            </div>
        </div>
        </>
    );
}