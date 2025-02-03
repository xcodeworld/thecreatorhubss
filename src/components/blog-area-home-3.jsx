import { asset } from '../assets/assets'
import SectionSlideDown from './shared/gsap/slide-down'
import AnimateTitle from './shared/gsap/split-collab'

const Blog_Area_Home_3 = () => {
    return (
        <section className="blog-area-home-3">
            <img
                src={asset.bg_blur_shep_3}
                alt="VRE"
                className="blog-area-1-shep-1-bg-home-3 blur-1"
            />
            <img
                src={asset.bg_blur_shep_3}
                alt="VRE"
                className="blog-area-1-shep-2-bg-home-3 blur-1"
            />
            <div className="container">
                <div className="title">
                    <div className="sub-title sub-title-home-3">
                        <p>OUR LATEST BLOGS</p>
                    </div>
                    <div className="main-title">
                        <AnimateTitle className="split-collab">
                            Empowering Brands With <br />
                            Digital Brilliance
                            <span className="absolute">
                                <img src={asset.text_shep_2} alt="" />
                            </span>
                        </AnimateTitle>
                    </div>
                </div>
                <div className="blog-area-wrapper">
                    <SectionSlideDown className="row">
                        <div className="col-xl-4 col-lg-4">
                            <div className="blog-inner vre-slide-down-gsap">
                                <h5 className="font-size-1-24">
                                    How Marketing Compliance <br />
                                    Your Marketing Strategy
                                </h5>
                                <div className="blog-meta">
                                    <div className="blog-date">
                                        <svg
                                            width="27"
                                            height="27"
                                            viewBox="0 0 27 27"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6.75 2.8125C6.75 2.50184 7.00183 2.25 7.3125 2.25C7.62317 2.25 7.875 2.50184 7.875 2.8125V6.1875C7.875 6.49817 7.62317 6.75 7.3125 6.75C7.00183 6.75 6.75 6.49817 6.75 6.1875V2.8125Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                d="M15.75 2.8125C15.75 2.50184 16.0018 2.25 16.3125 2.25C16.6232 2.25 16.875 2.50184 16.875 2.8125V6.1875C16.875 6.49817 16.6232 6.75 16.3125 6.75C16.0018 6.75 15.75 6.49817 15.75 6.1875V2.8125Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7.875 12.9375H6.75V14.0625H7.875V12.9375ZM6.75 11.8125C6.12866 11.8125 5.625 12.3162 5.625 12.9375V14.0625C5.625 14.6838 6.12866 15.1875 6.75 15.1875H7.875C8.49634 15.1875 9 14.6838 9 14.0625V12.9375C9 12.3162 8.49634 11.8125 7.875 11.8125H6.75Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.375 12.9375H11.25V14.0625H12.375V12.9375ZM11.25 11.8125C10.6287 11.8125 10.125 12.3162 10.125 12.9375V14.0625C10.125 14.6838 10.6287 15.1875 11.25 15.1875H12.375C12.9963 15.1875 13.5 14.6838 13.5 14.0625V12.9375C13.5 12.3162 12.9963 11.8125 12.375 11.8125H11.25Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M16.875 12.9375H15.75V14.0625H16.875V12.9375ZM15.75 11.8125C15.1287 11.8125 14.625 12.3162 14.625 12.9375V14.0625C14.625 14.6838 15.1287 15.1875 15.75 15.1875H16.875C17.4963 15.1875 18 14.6838 18 14.0625V12.9375C18 12.3162 17.4963 11.8125 16.875 11.8125H15.75Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7.875 17.4375H6.75V18.5625H7.875V17.4375ZM6.75 16.3125C6.12866 16.3125 5.625 16.8162 5.625 17.4375V18.5625C5.625 19.1838 6.12866 19.6875 6.75 19.6875H7.875C8.49634 19.6875 9 19.1838 9 18.5625V17.4375C9 16.8162 8.49634 16.3125 7.875 16.3125H6.75Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.375 17.4375H11.25V18.5625H12.375V17.4375ZM11.25 16.3125C10.6287 16.3125 10.125 16.8162 10.125 17.4375V18.5625C10.125 19.1838 10.6287 19.6875 11.25 19.6875H12.375C12.9963 19.6875 13.5 19.1838 13.5 18.5625V17.4375C13.5 16.8162 12.9963 16.3125 12.375 16.3125H11.25Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M5.0625 5.625H18.5625C19.1838 5.625 19.6875 6.12866 19.6875 6.75V15.75C20.076 15.75 20.4529 15.7992 20.8125 15.8918V6.75C20.8125 5.50736 19.8051 4.5 18.5625 4.5H5.0625C3.81986 4.5 2.8125 5.50736 2.8125 6.75V20.25C2.8125 21.4926 3.81986 22.5 5.0625 22.5H15.7895C15.5881 22.1518 15.432 21.7741 15.3293 21.375H5.0625C4.44118 21.375 3.9375 20.8713 3.9375 20.25V6.75C3.9375 6.12866 4.44118 5.625 5.0625 5.625Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M20.25 10.6875H3.375V9.5625H20.25V10.6875Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M19.6875 23.625C21.5515 23.625 23.0625 22.114 23.0625 20.25C23.0625 18.386 21.5515 16.875 19.6875 16.875C17.8235 16.875 16.3125 18.386 16.3125 20.25C16.3125 22.114 17.8235 23.625 19.6875 23.625ZM19.6875 24.75C22.1728 24.75 24.1875 22.7353 24.1875 20.25C24.1875 17.7647 22.1728 15.75 19.6875 15.75C17.2022 15.75 15.1875 17.7647 15.1875 20.25C15.1875 22.7353 17.2022 24.75 19.6875 24.75Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M19.6875 17.5381C19.9982 17.5381 20.25 17.7899 20.25 18.1006V20.5183L21.629 21.4755C21.8842 21.6526 21.9475 22.0031 21.7703 22.2583C21.5931 22.5135 21.2426 22.5768 20.9874 22.3997L19.125 21.1069V18.1006C19.125 17.7899 19.3768 17.5381 19.6875 17.5381Z"
                                                fill="#FF4A3B"
                                            />
                                        </svg>
                                        <span className="font-size-1-15">
                                            15 Nov, 2021
                                        </span>
                                    </div>
                                    <div className="blog-comment">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17 3.25H7C5.74071 3.25159 4.53345 3.75254 3.643 4.643C2.75254 5.53345 2.25159 6.74071 2.25 8V21C2.25013 21.1482 2.29419 21.2931 2.37661 21.4163C2.45903 21.5395 2.57611 21.6356 2.71308 21.6923C2.85004 21.749 3.00074 21.7638 3.14614 21.735C3.29154 21.7061 3.42511 21.6348 3.53 21.53L5.944 19.116C6.06008 18.9996 6.19804 18.9074 6.34993 18.8446C6.50182 18.7818 6.66464 18.7496 6.829 18.75H17C18.2593 18.7484 19.4666 18.2475 20.357 17.357C21.2475 16.4665 21.7484 15.2593 21.75 14V8C21.7484 6.74071 21.2475 5.53345 20.357 4.643C19.4666 3.75254 18.2593 3.25159 17 3.25ZM20.25 14C20.2489 14.8616 19.9062 15.6877 19.2969 16.2969C18.6877 16.9062 17.8616 17.2489 17 17.25H6.829C6.46759 17.2489 6.10956 17.3196 5.77568 17.458C5.44179 17.5963 5.13871 17.7996 4.884 18.056L3.75 19.189V8C3.75106 7.13837 4.09381 6.31234 4.70307 5.70307C5.31234 5.09381 6.13837 4.75106 7 4.75H17C17.8616 4.75106 18.6877 5.09381 19.2969 5.70307C19.9062 6.31234 20.2489 7.13837 20.25 8V14Z"
                                                fill="#FF4A3B"
                                            />
                                        </svg>
                                        <span className="font-size-1-15">
                                            12 Comment
                                        </span>
                                    </div>
                                </div>
                                <p className="font-size-1-18">
                                    Dolor sed maecenas quis faucibus justo
                                    <br />
                                    nibh ultricies praesent justo dolorIf you
                                    <br />
                                    are going to use
                                </p>
                                <div className="blog-writer">
                                    <div className="blog-witer-pic">
                                        <img
                                            src={asset.blog_writer_home_3}
                                            alt="VRE"
                                        />
                                        <span className="font-size-1-18">
                                            Admin
                                        </span>
                                    </div>
                                    <div className="blog-learn-more">
                                        <a href="blog-details.html">
                                            <span className="font-size-1-16">
                                                Learn More
                                            </span>
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
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="blog-inner vre-slide-down-gsap">
                                <h5 className="font-size-1-24">
                                    How Marketing Compliance <br />
                                    Your Marketing Strategy
                                </h5>
                                <div className="blog-meta">
                                    <div className="blog-date">
                                        <svg
                                            width="27"
                                            height="27"
                                            viewBox="0 0 27 27"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6.75 2.8125C6.75 2.50184 7.00183 2.25 7.3125 2.25C7.62317 2.25 7.875 2.50184 7.875 2.8125V6.1875C7.875 6.49817 7.62317 6.75 7.3125 6.75C7.00183 6.75 6.75 6.49817 6.75 6.1875V2.8125Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                d="M15.75 2.8125C15.75 2.50184 16.0018 2.25 16.3125 2.25C16.6232 2.25 16.875 2.50184 16.875 2.8125V6.1875C16.875 6.49817 16.6232 6.75 16.3125 6.75C16.0018 6.75 15.75 6.49817 15.75 6.1875V2.8125Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7.875 12.9375H6.75V14.0625H7.875V12.9375ZM6.75 11.8125C6.12866 11.8125 5.625 12.3162 5.625 12.9375V14.0625C5.625 14.6838 6.12866 15.1875 6.75 15.1875H7.875C8.49634 15.1875 9 14.6838 9 14.0625V12.9375C9 12.3162 8.49634 11.8125 7.875 11.8125H6.75Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.375 12.9375H11.25V14.0625H12.375V12.9375ZM11.25 11.8125C10.6287 11.8125 10.125 12.3162 10.125 12.9375V14.0625C10.125 14.6838 10.6287 15.1875 11.25 15.1875H12.375C12.9963 15.1875 13.5 14.6838 13.5 14.0625V12.9375C13.5 12.3162 12.9963 11.8125 12.375 11.8125H11.25Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M16.875 12.9375H15.75V14.0625H16.875V12.9375ZM15.75 11.8125C15.1287 11.8125 14.625 12.3162 14.625 12.9375V14.0625C14.625 14.6838 15.1287 15.1875 15.75 15.1875H16.875C17.4963 15.1875 18 14.6838 18 14.0625V12.9375C18 12.3162 17.4963 11.8125 16.875 11.8125H15.75Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7.875 17.4375H6.75V18.5625H7.875V17.4375ZM6.75 16.3125C6.12866 16.3125 5.625 16.8162 5.625 17.4375V18.5625C5.625 19.1838 6.12866 19.6875 6.75 19.6875H7.875C8.49634 19.6875 9 19.1838 9 18.5625V17.4375C9 16.8162 8.49634 16.3125 7.875 16.3125H6.75Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.375 17.4375H11.25V18.5625H12.375V17.4375ZM11.25 16.3125C10.6287 16.3125 10.125 16.8162 10.125 17.4375V18.5625C10.125 19.1838 10.6287 19.6875 11.25 19.6875H12.375C12.9963 19.6875 13.5 19.1838 13.5 18.5625V17.4375C13.5 16.8162 12.9963 16.3125 12.375 16.3125H11.25Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M5.0625 5.625H18.5625C19.1838 5.625 19.6875 6.12866 19.6875 6.75V15.75C20.076 15.75 20.4529 15.7992 20.8125 15.8918V6.75C20.8125 5.50736 19.8051 4.5 18.5625 4.5H5.0625C3.81986 4.5 2.8125 5.50736 2.8125 6.75V20.25C2.8125 21.4926 3.81986 22.5 5.0625 22.5H15.7895C15.5881 22.1518 15.432 21.7741 15.3293 21.375H5.0625C4.44118 21.375 3.9375 20.8713 3.9375 20.25V6.75C3.9375 6.12866 4.44118 5.625 5.0625 5.625Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M20.25 10.6875H3.375V9.5625H20.25V10.6875Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M19.6875 23.625C21.5515 23.625 23.0625 22.114 23.0625 20.25C23.0625 18.386 21.5515 16.875 19.6875 16.875C17.8235 16.875 16.3125 18.386 16.3125 20.25C16.3125 22.114 17.8235 23.625 19.6875 23.625ZM19.6875 24.75C22.1728 24.75 24.1875 22.7353 24.1875 20.25C24.1875 17.7647 22.1728 15.75 19.6875 15.75C17.2022 15.75 15.1875 17.7647 15.1875 20.25C15.1875 22.7353 17.2022 24.75 19.6875 24.75Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M19.6875 17.5381C19.9982 17.5381 20.25 17.7899 20.25 18.1006V20.5183L21.629 21.4755C21.8842 21.6526 21.9475 22.0031 21.7703 22.2583C21.5931 22.5135 21.2426 22.5768 20.9874 22.3997L19.125 21.1069V18.1006C19.125 17.7899 19.3768 17.5381 19.6875 17.5381Z"
                                                fill="#FF4A3B"
                                            />
                                        </svg>
                                        <span className="font-size-1-15">
                                            15 Nov, 2021
                                        </span>
                                    </div>
                                    <div className="blog-comment">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17 3.25H7C5.74071 3.25159 4.53345 3.75254 3.643 4.643C2.75254 5.53345 2.25159 6.74071 2.25 8V21C2.25013 21.1482 2.29419 21.2931 2.37661 21.4163C2.45903 21.5395 2.57611 21.6356 2.71308 21.6923C2.85004 21.749 3.00074 21.7638 3.14614 21.735C3.29154 21.7061 3.42511 21.6348 3.53 21.53L5.944 19.116C6.06008 18.9996 6.19804 18.9074 6.34993 18.8446C6.50182 18.7818 6.66464 18.7496 6.829 18.75H17C18.2593 18.7484 19.4666 18.2475 20.357 17.357C21.2475 16.4665 21.7484 15.2593 21.75 14V8C21.7484 6.74071 21.2475 5.53345 20.357 4.643C19.4666 3.75254 18.2593 3.25159 17 3.25ZM20.25 14C20.2489 14.8616 19.9062 15.6877 19.2969 16.2969C18.6877 16.9062 17.8616 17.2489 17 17.25H6.829C6.46759 17.2489 6.10956 17.3196 5.77568 17.458C5.44179 17.5963 5.13871 17.7996 4.884 18.056L3.75 19.189V8C3.75106 7.13837 4.09381 6.31234 4.70307 5.70307C5.31234 5.09381 6.13837 4.75106 7 4.75H17C17.8616 4.75106 18.6877 5.09381 19.2969 5.70307C19.9062 6.31234 20.2489 7.13837 20.25 8V14Z"
                                                fill="#FF4A3B"
                                            />
                                        </svg>
                                        <span className="font-size-1-15">
                                            12 Comment
                                        </span>
                                    </div>
                                </div>
                                <p className="font-size-1-18">
                                    Dolor sed maecenas quis faucibus justo
                                    <br />
                                    nibh ultricies praesent justo dolorIf you
                                    <br />
                                    are going to use
                                </p>
                                <div className="blog-writer">
                                    <div className="blog-witer-pic">
                                        <img
                                            src={asset.blog_writer_home_3}
                                            alt="VRE"
                                        />
                                        <span className="font-size-1-18">
                                            Admin
                                        </span>
                                    </div>
                                    <div className="blog-learn-more">
                                        <a href="blog-details.html">
                                            <span className="font-size-1-16">
                                                Learn More
                                            </span>
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
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="blog-inner vre-slide-down-gsap">
                                <h5 className="font-size-1-24">
                                    How Marketing Compliance <br />
                                    Your Marketing Strategy
                                </h5>
                                <div className="blog-meta">
                                    <div className="blog-date">
                                        <svg
                                            width="27"
                                            height="27"
                                            viewBox="0 0 27 27"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6.75 2.8125C6.75 2.50184 7.00183 2.25 7.3125 2.25C7.62317 2.25 7.875 2.50184 7.875 2.8125V6.1875C7.875 6.49817 7.62317 6.75 7.3125 6.75C7.00183 6.75 6.75 6.49817 6.75 6.1875V2.8125Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                d="M15.75 2.8125C15.75 2.50184 16.0018 2.25 16.3125 2.25C16.6232 2.25 16.875 2.50184 16.875 2.8125V6.1875C16.875 6.49817 16.6232 6.75 16.3125 6.75C16.0018 6.75 15.75 6.49817 15.75 6.1875V2.8125Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7.875 12.9375H6.75V14.0625H7.875V12.9375ZM6.75 11.8125C6.12866 11.8125 5.625 12.3162 5.625 12.9375V14.0625C5.625 14.6838 6.12866 15.1875 6.75 15.1875H7.875C8.49634 15.1875 9 14.6838 9 14.0625V12.9375C9 12.3162 8.49634 11.8125 7.875 11.8125H6.75Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.375 12.9375H11.25V14.0625H12.375V12.9375ZM11.25 11.8125C10.6287 11.8125 10.125 12.3162 10.125 12.9375V14.0625C10.125 14.6838 10.6287 15.1875 11.25 15.1875H12.375C12.9963 15.1875 13.5 14.6838 13.5 14.0625V12.9375C13.5 12.3162 12.9963 11.8125 12.375 11.8125H11.25Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M16.875 12.9375H15.75V14.0625H16.875V12.9375ZM15.75 11.8125C15.1287 11.8125 14.625 12.3162 14.625 12.9375V14.0625C14.625 14.6838 15.1287 15.1875 15.75 15.1875H16.875C17.4963 15.1875 18 14.6838 18 14.0625V12.9375C18 12.3162 17.4963 11.8125 16.875 11.8125H15.75Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7.875 17.4375H6.75V18.5625H7.875V17.4375ZM6.75 16.3125C6.12866 16.3125 5.625 16.8162 5.625 17.4375V18.5625C5.625 19.1838 6.12866 19.6875 6.75 19.6875H7.875C8.49634 19.6875 9 19.1838 9 18.5625V17.4375C9 16.8162 8.49634 16.3125 7.875 16.3125H6.75Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.375 17.4375H11.25V18.5625H12.375V17.4375ZM11.25 16.3125C10.6287 16.3125 10.125 16.8162 10.125 17.4375V18.5625C10.125 19.1838 10.6287 19.6875 11.25 19.6875H12.375C12.9963 19.6875 13.5 19.1838 13.5 18.5625V17.4375C13.5 16.8162 12.9963 16.3125 12.375 16.3125H11.25Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M5.0625 5.625H18.5625C19.1838 5.625 19.6875 6.12866 19.6875 6.75V15.75C20.076 15.75 20.4529 15.7992 20.8125 15.8918V6.75C20.8125 5.50736 19.8051 4.5 18.5625 4.5H5.0625C3.81986 4.5 2.8125 5.50736 2.8125 6.75V20.25C2.8125 21.4926 3.81986 22.5 5.0625 22.5H15.7895C15.5881 22.1518 15.432 21.7741 15.3293 21.375H5.0625C4.44118 21.375 3.9375 20.8713 3.9375 20.25V6.75C3.9375 6.12866 4.44118 5.625 5.0625 5.625Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M20.25 10.6875H3.375V9.5625H20.25V10.6875Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M19.6875 23.625C21.5515 23.625 23.0625 22.114 23.0625 20.25C23.0625 18.386 21.5515 16.875 19.6875 16.875C17.8235 16.875 16.3125 18.386 16.3125 20.25C16.3125 22.114 17.8235 23.625 19.6875 23.625ZM19.6875 24.75C22.1728 24.75 24.1875 22.7353 24.1875 20.25C24.1875 17.7647 22.1728 15.75 19.6875 15.75C17.2022 15.75 15.1875 17.7647 15.1875 20.25C15.1875 22.7353 17.2022 24.75 19.6875 24.75Z"
                                                fill="#FF4A3B"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M19.6875 17.5381C19.9982 17.5381 20.25 17.7899 20.25 18.1006V20.5183L21.629 21.4755C21.8842 21.6526 21.9475 22.0031 21.7703 22.2583C21.5931 22.5135 21.2426 22.5768 20.9874 22.3997L19.125 21.1069V18.1006C19.125 17.7899 19.3768 17.5381 19.6875 17.5381Z"
                                                fill="#FF4A3B"
                                            />
                                        </svg>
                                        <span className="font-size-1-15">
                                            15 Nov, 2021
                                        </span>
                                    </div>
                                    <div className="blog-comment">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17 3.25H7C5.74071 3.25159 4.53345 3.75254 3.643 4.643C2.75254 5.53345 2.25159 6.74071 2.25 8V21C2.25013 21.1482 2.29419 21.2931 2.37661 21.4163C2.45903 21.5395 2.57611 21.6356 2.71308 21.6923C2.85004 21.749 3.00074 21.7638 3.14614 21.735C3.29154 21.7061 3.42511 21.6348 3.53 21.53L5.944 19.116C6.06008 18.9996 6.19804 18.9074 6.34993 18.8446C6.50182 18.7818 6.66464 18.7496 6.829 18.75H17C18.2593 18.7484 19.4666 18.2475 20.357 17.357C21.2475 16.4665 21.7484 15.2593 21.75 14V8C21.7484 6.74071 21.2475 5.53345 20.357 4.643C19.4666 3.75254 18.2593 3.25159 17 3.25ZM20.25 14C20.2489 14.8616 19.9062 15.6877 19.2969 16.2969C18.6877 16.9062 17.8616 17.2489 17 17.25H6.829C6.46759 17.2489 6.10956 17.3196 5.77568 17.458C5.44179 17.5963 5.13871 17.7996 4.884 18.056L3.75 19.189V8C3.75106 7.13837 4.09381 6.31234 4.70307 5.70307C5.31234 5.09381 6.13837 4.75106 7 4.75H17C17.8616 4.75106 18.6877 5.09381 19.2969 5.70307C19.9062 6.31234 20.2489 7.13837 20.25 8V14Z"
                                                fill="#FF4A3B"
                                            />
                                        </svg>
                                        <span className="font-size-1-15">
                                            12 Comment
                                        </span>
                                    </div>
                                </div>
                                <p className="font-size-1-18">
                                    Dolor sed maecenas quis faucibus justo
                                    <br />
                                    nibh ultricies praesent justo dolorIf you
                                    <br />
                                    are going to use
                                </p>
                                <div className="blog-writer">
                                    <div className="blog-witer-pic">
                                        <img
                                            src={asset.blog_writer_home_3}
                                            alt="VRE"
                                        />
                                        <span className="font-size-1-18">
                                            Admin
                                        </span>
                                    </div>
                                    <div className="blog-learn-more">
                                        <a href="blog-details.html">
                                            <span className="font-size-1-16">
                                                Learn More
                                            </span>
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
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SectionSlideDown>
                </div>
            </div>
        </section>
    )
}
export default Blog_Area_Home_3
