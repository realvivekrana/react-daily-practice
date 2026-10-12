import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";

function Hero(){
    return(
        <div className="hero">
            <img src={Image1} alt="" width="300px" />
            <img src={Image2} alt="" width="300px"/>
            <img src={Image3} alt="" width="300px"/>
        </div>
    )
}

export default Hero