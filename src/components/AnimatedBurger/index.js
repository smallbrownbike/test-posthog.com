import React from 'react'
import { motion } from 'framer-motion'
export default function AnimatedBurger({ onClick, className, active }) {
    return (
        <button className={className} onClick={onClick}>
            <svg
                className="!overflow-visible"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    transition={{ type: 'spring', duration: 0.5, bounce: 0.7 }}
                    animate={{ translateY: active ? -3 : 0 }}
                    d="M1.79937 6.78212H16.1994C16.9946 6.78212 17.6394 6.13736 17.6394 5.34212C17.6394 5.13611 17.5409 0.302124 8.99937 0.302124C0.457813 0.302124 0.359375 5.13602 0.359375 5.34212C0.359375 6.13736 1.00413 6.78212 1.79937 6.78212ZM8.99937 1.74212C16.1994 1.74212 16.1994 5.34212 16.1994 5.34212H1.79937C1.79937 5.34212 1.79937 1.74212 8.99937 1.74212Z"
                    fill="currentColor"
                />
                <motion.path
                    transition={{ type: 'spring', duration: 0.5, bounce: 0.7 }}
                    animate={{ translateY: active ? -3 : 0 }}
                    d="M10.4388 3.54215C10.4388 4.02169 9.71875 4.02169 9.71875 3.54215C9.71875 3.06261 10.4388 3.06261 10.4388 3.54215Z"
                    fill="currentColor"
                />
                <motion.path
                    transition={{ type: 'spring', duration: 0.5, bounce: 0.7 }}
                    animate={{ translateY: active ? -3 : 0 }}
                    d="M11.1602 2.82209C11.1602 3.30233 10.4395 3.30233 10.4395 2.82209C10.4395 2.34185 11.1602 2.34185 11.1602 2.82209Z"
                    fill="currentColor"
                />
                <motion.path
                    transition={{ type: 'spring', duration: 0.5, bounce: 0.7 }}
                    animate={{ translateY: active ? -3 : 0 }}
                    d="M9.22278 2.48948C9.03927 2.56541 8.95138 2.77564 9.02732 2.95917C9.10255 3.14268 9.31348 3.23057 9.49701 3.15463C9.68122 3.07869 9.76841 2.86847 9.69317 2.68494C9.61724 2.50143 9.40629 2.41353 9.22278 2.48948Z"
                    fill="currentColor"
                />
                <motion.path
                    d="M2.33867 9.20723C2.69305 9.40973 3.13391 9.66214 3.95446 9.66214C4.77571 9.66214 5.21656 9.40973 5.57095 9.20723C5.85009 9.04762 6.035 8.94214 6.47305 8.94214C6.9111 8.94214 7.09601 9.04761 7.37516 9.20723C7.72954 9.40973 8.1704 9.66214 8.99165 9.66214C9.8129 9.66214 10.2545 9.41043 10.6088 9.20723C10.888 9.04762 11.0729 8.94214 11.5116 8.94214C11.9511 8.94214 12.136 9.04761 12.4159 9.20793C12.7709 9.41043 13.2132 9.66214 14.0352 9.66214C14.8564 9.66214 15.2987 9.41043 15.6531 9.20793C15.9336 9.04762 16.1185 8.94214 16.5587 8.94214V8.93863H16.9109C16.9137 8.93863 16.9158 8.94003 16.9187 8.94003C17.3159 8.94003 17.638 8.61799 17.638 8.22073C17.638 7.82347 17.3159 7.50144 16.9187 7.50144C16.9158 7.50144 16.9137 7.50284 16.9109 7.50284L1.08641 7.50214C1.08359 7.50214 1.08149 7.50073 1.07867 7.50073C0.681413 7.50073 0.359375 7.82277 0.359375 8.22003C0.359375 8.61729 0.681413 8.93933 1.07867 8.93933C1.08149 8.93933 1.08359 8.93792 1.08641 8.93792H1.43867V8.94214C1.87601 8.94214 2.06023 9.04761 2.33867 9.20723Z"
                    fill="currentColor"
                />
                <motion.path
                    transition={{ type: 'spring', duration: 0.5, bounce: 0.7 }}
                    animate={{ translateY: active ? 3 : 0 }}
                    d="M16.5594 10.3821H16.1994L14.0394 11.8221L9.71938 10.3821H1.43938C0.843125 10.3821 0.359375 10.8658 0.359375 11.4621C0.359375 11.794 0.511954 12.0865 0.747491 12.2847C0.508433 12.5421 0.359375 12.8838 0.359375 13.2621V13.9821C0.359375 15.1732 1.32828 16.1421 2.51938 16.1421H15.4794C16.6705 16.1421 17.6394 15.1732 17.6394 13.9821V13.2621C17.6394 12.8838 17.4903 12.5421 17.2513 12.2847C17.4868 12.0864 17.6394 11.7939 17.6394 11.4621C17.6394 10.8658 17.1556 10.3821 16.5594 10.3821ZM16.1994 13.9821C16.1994 14.38 15.8773 14.7021 15.4794 14.7021H2.51938C2.12212 14.7021 1.79938 14.38 1.79938 13.9821V13.2621H16.1994V13.9821Z"
                    fill="currentColor"
                />
            </svg>
        </button>
    )
}
