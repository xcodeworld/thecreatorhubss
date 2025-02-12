/* eslint-disable react/prop-types */
import { asset } from '../../assets/assets'
import AnimateTitle from './gsap/split-collab'

const Breadcrumb = ({ pageName }) => {
    return (
        <section
            className="bread-crumb-area"
            style={{ backgroundImage: `url(${asset.breadcrumb_bg})` }}
        >
            <div className="container">
                <div className="bread-crumb-title">
                    <AnimateTitle className="split-collab" tag="h2">
                        {pageName}
                    </AnimateTitle>
                </div>
                <div className="bread-crumb-wrapper">
                    <a href="#">Home</a>
                    <span>
                        <svg
                            width="10"
                            height="14"
                            viewBox="0 0 10 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.90625 7.53125L2.84375 13.625C2.53125 13.9062 2.0625 13.9062 1.78125 13.625L1.0625 12.9062C0.78125 12.625 0.78125 12.1562 1.0625 11.8438L5.875 7L1.0625 2.1875C0.78125 1.875 0.78125 1.40625 1.0625 1.125L1.78125 0.40625C2.0625 0.125 2.53125 0.125 2.84375 0.40625L8.90625 6.5C9.1875 6.78125 9.1875 7.25 8.90625 7.53125Z"
                                fill="white"
                            />
                        </svg>
                    </span>
                    <a href="#" className="current-page">
                        {pageName}
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Breadcrumb
