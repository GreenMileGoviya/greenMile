import React, { useEffect } from 'react'
import './Test.css';
import $ from 'jquery'

function Test() {

    $(document).ready(function () {
        $(".SlickCarousel").slick({
            rtl: false, // If RTL Make it true & .slick-slide{float:right;}
            autoplay: true,
            autoplaySpeed: 5000, //  Slide Delay
            speed: 800, // Transition Speed
            slidesToShow: 4, // Number Of Carousel
            slidesToScroll: 1, // Slide To Move 
            pauseOnHover: false,
            appendArrows: $(".Container .Head .Arrows"), // Class For Arrows Buttons
            prevArrow: '<span class="Slick-Prev"></span>',
            nextArrow: '<span class="Slick-Next"></span>',
            easing: "linear",
            responsive: [
                {
                    breakpoint: 801, settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 641, settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 481, settings: {
                        slidesToShow: 1,
                    }
                },
            ],
        })
    })
    return (
        <div className="Container">
            <h3 className="Head">Featured Products <span className="Arrows"></span></h3>
            {/* Carousel Container */}
            <div className="SlickCarousel">
                {/* Item */}
                <div className="ProductBlock">
                    <div className="Content">
                        <div className="img-fill">
                            <img src="https://41.media.tumblr.com/4f61413965b53d9cc901e2f8241a64bd/tumblr_nh1zmuXYUM1su4a4ho1_1280.jpg" />
                        </div>
                        <h3>Block Title</h3>
                    </div>
                </div>
                {/* <!-- Item --> */}
                {/* <!-- Item --> */}
                <div className="ProductBlock">
                    <div className="Content">
                        <div className="img-fill">
                            <img src="https://41.media.tumblr.com/4f61413965b53d9cc901e2f8241a64bd/tumblr_nh1zmuXYUM1su4a4ho1_1280.jpg" />
                        </div>
                        <h3>Block Title</h3>
                    </div>
                </div>
                {/* <!-- Item -->
                <!-- Item --> */}
                <div className="ProductBlock">
                    <div className="Content">
                        <div className="img-fill">
                            <img src="https://41.media.tumblr.com/4f61413965b53d9cc901e2f8241a64bd/tumblr_nh1zmuXYUM1su4a4ho1_1280.jpg" />
                        </div>
                        <h3>Block Title</h3>
                    </div>
                </div>
                {/* <!-- Item -->
                <!-- Item --> */}
                <div className="ProductBlock">
                    <div className="Content">
                        <div className="img-fill">
                            <img src="https://41.media.tumblr.com/4f61413965b53d9cc901e2f8241a64bd/tumblr_nh1zmuXYUM1su4a4ho1_1280.jpg" />
                        </div>
                        <h3>Block Title</h3>
                    </div>
                </div>
                {/* <!-- Item -->
                <!-- Item --> */}
                <div className="ProductBlock">
                    <div className="Content">
                        <div className="img-fill">
                            <img src="https://41.media.tumblr.com/4f61413965b53d9cc901e2f8241a64bd/tumblr_nh1zmuXYUM1su4a4ho1_1280.jpg" />
                        </div>
                        <h3>Block Title</h3>
                    </div>
                </div>
                {/* <!-- Item --> */}
            </div>
            {/* <!-- Carousel Container --> */}
        </div>
    )
}

export default Test