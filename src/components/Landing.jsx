import { Link } from "react-scroll";
import BgImage from "../assets/images/peter-herrmann-aT88kga0g_M-unsplash.jpg"

function Landing() {

    return (
        <div>
            <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${BgImage})` }}>
                <div className="absolute inset-0 text-center z-10 bg-black bg-opacity-30 flex items-center justify-center flex-col">
                    <h1 className=" text-[25px] sm:text-4xl text-white font-bold md:text-4xl lg:text-5xl xl:text-[40px] lg:mb-3 max-w-[90%]">Discover Worlds Between Pages</h1>
                    <p className="mt-1 w-1/2 xl:w-fit text-[10px] text-white sm:text-[15px] md:text-[18px] lg:text-[24px] lg-w-3/5 xl:text-[25px] mb-4 md:mb-8 lg:mb-12">Discover and buy books online. Wide selection of physical books. Easy browsing. Secure checkout. Order now!</p>
                    <Link to="menu" activeClass="active"
                        spy={true}
                        // smooth={true}
                        offset={-150}
                        duration={500}
                        className=" px-8 py-3 cursor-pointer border-[3px] border-solid border-blue-600 rounded-3xl bg-blue-600 text-white text-[15px] font-bold hover:bg-white hover:text-blue-600 transition-colors duration-300 md:text-[20px]">DISCOVER NOW!</Link>
                </div>
            </div>
        </div>
    )
}


export default Landing;