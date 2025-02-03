// import Swiper core and required modules

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { asset } from '../assets/assets'

const ClientSayHome3 = () => {
    return (
        <section className="client-say-area-home-3 client-say-area-home-1">
            <img src={asset.client_say} alt="VRE" className="client-say-bg" />
            <div className="container">
                <div className="client-say-title">
                    <h3 className="font-size-1-45">What Our Clients Say</h3>
                </div>
                <div className="client-say-wrapper">
                    <Swiper
                        // install Swiper modules
                        slidesPerView={1}
                        loop={true}
                        className="client-say-home-3"
                    >
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="client-say-inner">
                                    <p>
                                        “I’m pleased to say that boyerman
                                        agement.com has drawn <br /> rave
                                        reviews. It positions us as a
                                        world-class organization <br /> and adds
                                        credibility to our brand. I’ve seen no.”
                                    </p>
                                    <h5 className="font-size-1-35">
                                        Aiden Markram
                                    </h5>
                                    <span className="font-size-1-18 client-work-name">
                                        Digital Marketing
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="client-say-inner">
                                    <p>
                                        “I’m pleased to say that boyerman
                                        agement.com has drawn <br /> rave
                                        reviews. It positions us as a
                                        world-class organization <br /> and adds
                                        credibility to our brand. I’ve seen no.”
                                    </p>
                                    <h5 className="font-size-1-35">
                                        Aiden Markram
                                    </h5>
                                    <span className="font-size-1-18 client-work-name">
                                        Digital Marketing
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperNav />
                    </Swiper>
                    {/* <div className="swiper client-say-home-3">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="client-say-inner">
                                    <p>
                                        “I’m pleased to say that boyerman
                                        agement.com has drawn <br /> rave
                                        reviews. It positions us as a
                                        world-class organization <br /> and adds
                                        credibility to our brand. I’ve seen no.”
                                    </p>
                                    <h5 className="font-size-1-35">
                                        Aiden Markram
                                    </h5>
                                    <span className="font-size-1-18 client-work-name">
                                        Digital Marketing
                                    </span>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="client-say-inner">
                                    <p>
                                        “I’m pleased to say that boyerman
                                        agement.com has drawn <br /> rave
                                        reviews. It positions us as a
                                        world-class organization <br /> and adds
                                        credibility to our brand. I’ve seen no.”
                                    </p>
                                    <h5 className="font-size-1-35">
                                        Aiden Markram
                                    </h5>
                                    <span className="font-size-1-18 client-work-name">
                                        Digital Marketing
                                    </span>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="client-say-inner">
                                    <p>
                                        “I’m pleased to say that boyerman
                                        agement.com has drawn <br /> rave
                                        reviews. It positions us as a
                                        world-class organization <br /> and adds
                                        credibility to our brand. I’ve seen no.”
                                    </p>
                                    <h5 className="font-size-1-35">
                                        Aiden Markram
                                    </h5>
                                    <span className="font-size-1-18 client-work-name">
                                        Digital Marketing
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="slider-btn-1 slider-client-say-home-3-btn">
                            <div className="swiper-button-next">
                                <svg
                                    width="5"
                                    height="10"
                                    viewBox="0 0 9 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.98633 7.64286C8.98633 7.52679 8.92829 7.39621 8.84124 7.30915L2.08008 0.54799C1.99302 0.460938 1.86244 0.4029 1.74637 0.4029C1.6303 0.4029 1.49972 0.460938 1.41267 0.54799L0.687221 1.27344C0.600167 1.36049 0.542132 1.49107 0.542132 1.60714C0.542132 1.72321 0.600167 1.85379 0.687221 1.94085L6.38923 7.64286L0.687221 13.3449C0.600167 13.4319 0.542132 13.5625 0.542132 13.6786C0.542132 13.8092 0.600167 13.9252 0.687221 14.0123L1.41267 14.7377C1.49972 14.8248 1.6303 14.8828 1.74637 14.8828C1.86244 14.8828 1.99302 14.8248 2.08008 14.7377L8.84124 7.97656C8.92829 7.88951 8.98633 7.75893 8.98633 7.64286Z"
                                        fill="#CCDEFF"
                                    />
                                </svg>
                            </div>
                            <div className="swiper-button-prev">
                                <svg
                                    width="5"
                                    height="10"
                                    viewBox="0 0 9 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.45061 1.60714C8.45061 1.47656 8.39258 1.36049 8.30552 1.27344L7.58008 0.54799C7.49302 0.460938 7.36244 0.4029 7.24637 0.4029C7.1303 0.4029 6.99972 0.460938 6.91267 0.54799L0.151507 7.30915C0.0644532 7.39621 0.00641744 7.52679 0.00641744 7.64286C0.00641744 7.75893 0.0644532 7.88951 0.151507 7.97656L6.91267 14.7377C6.99972 14.8248 7.1303 14.8828 7.24637 14.8828C7.36244 14.8828 7.49302 14.8248 7.58008 14.7377L8.30552 14.0123C8.39258 13.9252 8.45061 13.7946 8.45061 13.6786C8.45061 13.5625 8.39258 13.4319 8.30552 13.3449L2.60352 7.64286L8.30552 1.94085C8.39258 1.85379 8.45061 1.72321 8.45061 1.60714Z"
                                        fill="#CCDEFF"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

const SwiperNav = () => {
    const swiper = useSwiper()

    return (
        <div className="slider-btn-1 slider-client-say-home-3-btn">
            <div
                onClick={() => swiper.slideNext()}
                className="swiper-button-next"
            >
                <svg
                    width="5"
                    height="10"
                    viewBox="0 0 9 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.98633 7.64286C8.98633 7.52679 8.92829 7.39621 8.84124 7.30915L2.08008 0.54799C1.99302 0.460938 1.86244 0.4029 1.74637 0.4029C1.6303 0.4029 1.49972 0.460938 1.41267 0.54799L0.687221 1.27344C0.600167 1.36049 0.542132 1.49107 0.542132 1.60714C0.542132 1.72321 0.600167 1.85379 0.687221 1.94085L6.38923 7.64286L0.687221 13.3449C0.600167 13.4319 0.542132 13.5625 0.542132 13.6786C0.542132 13.8092 0.600167 13.9252 0.687221 14.0123L1.41267 14.7377C1.49972 14.8248 1.6303 14.8828 1.74637 14.8828C1.86244 14.8828 1.99302 14.8248 2.08008 14.7377L8.84124 7.97656C8.92829 7.88951 8.98633 7.75893 8.98633 7.64286Z"
                        fill="#CCDEFF"
                    />
                </svg>
            </div>
            <div
                onClick={() => swiper.slidePrev()}
                className="swiper-button-prev"
            >
                <svg
                    width="5"
                    height="10"
                    viewBox="0 0 9 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.45061 1.60714C8.45061 1.47656 8.39258 1.36049 8.30552 1.27344L7.58008 0.54799C7.49302 0.460938 7.36244 0.4029 7.24637 0.4029C7.1303 0.4029 6.99972 0.460938 6.91267 0.54799L0.151507 7.30915C0.0644532 7.39621 0.00641744 7.52679 0.00641744 7.64286C0.00641744 7.75893 0.0644532 7.88951 0.151507 7.97656L6.91267 14.7377C6.99972 14.8248 7.1303 14.8828 7.24637 14.8828C7.36244 14.8828 7.49302 14.8248 7.58008 14.7377L8.30552 14.0123C8.39258 13.9252 8.45061 13.7946 8.45061 13.6786C8.45061 13.5625 8.39258 13.4319 8.30552 13.3449L2.60352 7.64286L8.30552 1.94085C8.39258 1.85379 8.45061 1.72321 8.45061 1.60714Z"
                        fill="#CCDEFF"
                    />
                </svg>
            </div>
        </div>
    )
}

export default ClientSayHome3
