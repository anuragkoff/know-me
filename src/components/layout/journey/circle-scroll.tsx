import './journey.css';

export default function CircleScroll() {
    return (
        <>
            <svg className="circleScroll" height="400" width="400">
                {/* Circle outline */}
                <circle cx="200" cy="200" r="100" stroke="#fff" strokeWidth="2" fill="none" />

                {/* Mask definition */}
                <mask id="circleFillMask">
                {/* Rectangle starts below the circle and moves upward */}
                    <rect id="fillRect" stroke="#fff" x="0" y="400" width="400" height="200" fill="#fff" />
                </mask>

                {/* Circle with white fill, masked by the rectangle */}
                <circle cx="200" cy="200" r="100" fill="#fff" mask="url(#circleFillMask)" />
            </svg>
        </>

    )
}
