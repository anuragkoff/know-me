import './journey.css';

export default function CircleScroll() {
    return (
        <>
            <svg className="circleScroll">
                {/* Rectangle outline */}
                <rect  x="30" y="20" width="30" height="430" fill="none" stroke="#fff" strokeWidth="2"/>

                {/* Mask definition */}
                <mask id="circleFillMask">
                {/* Rectangle starts below the circle and moves upward */}
                    <rect id="fillRect" stroke="#fff" x="30" y="450" width="30" height="430" fill="#fff" />
                </mask>

                {/* Rectangle with white fill, masked by the rectangle */}
                <rect x="30" y="20" width="30" height="430" fill="#fff" mask="url(#circleFillMask)"/>
                {/* <circle cx="200" cy="200" r="100" fill="#fff" mask="url(#circleFillMask)" /> */}
            </svg>
        </>
    )
}
