export default function SocialMedias(){
    return(
        <ul className="social-medias d-flex align-items-center">
            <li className="social-medias__item instagram">
                <a href="https://www.instagram.com/miras.education/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank" className="social-media__link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="yourGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#f9ce34' }} />
                        <stop offset="50%" style={{ stopColor: '#ee2a7b' }} />
                        <stop offset="100%" style={{ stopColor: '#6228d7' }} />
                    </linearGradient>
                </defs>
                    <g>
                        <path className="instagram-back" d="M3 0.5H21C22.3807 0.5 23.5 1.61929 23.5 3V21C23.5 22.3807 22.3807 23.5 21 23.5H3C1.61929 23.5 0.5 22.3807 0.5 21V3C0.5 1.61929 1.61929 0.5 3 0.5Z" fill=""  stroke="#34373B"/>
                        <path d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3Z" stroke="#34373B" strokeWidth="2"/>
                        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#34373B" strokeWidth="2"/>
                        <path className="instagram-circle" d="M17.4167 7.83331C18.1071 7.83331 18.6667 7.27367 18.6667 6.58331C18.6667 5.89296 18.1071 5.33331 17.4167 5.33331C16.7263 5.33331 16.1667 5.89296 16.1667 6.58331C16.1667 7.27367 16.7263 7.83331 17.4167 7.83331Z" fill="#34373B"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_94_10">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>

                </a>
            </li>
            <li className="social-medias__item youtube">
                <a href="https://www.youtube.com/@miraseducation8406" target="_blank" className="social-media__link">
                <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2.5" y="4.5" width="24" height="15" rx="3.5" stroke="#34373B"/>
                    <path d="M13.5 14.5981L18 12L13.5 9.40192V14.5981Z" stroke="#34373B"/>
                </svg>

                </a>
            </li>
            <li className="social-medias__item facebook">
                <a href="https://www.facebook.com/mirasuniversity/?locale=ru_RU" target="_blank" className="social-media__link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10.5" fill="" stroke="#34373B"/>
                    <path d="M12.4698 10.887V19H10.8548V10.887H9.6198V9.5H10.8548V8.018C10.8548 7.19467 11.0765 6.58033 11.5198 6.175C11.9631 5.76967 12.5458 5.567 13.2678 5.567C13.6731 5.567 14.0215 5.59867 14.3128 5.662C14.6168 5.71267 14.8638 5.757 15.0538 5.795V7.144C14.8511 7.09333 14.6295 7.049 14.3888 7.011C14.1481 6.96033 13.8568 6.935 13.5148 6.935C13.1728 6.935 12.9131 7.02367 12.7358 7.201C12.5585 7.37833 12.4698 7.60633 12.4698 7.885V9.5H14.7688V10.887H12.4698Z" fill="#34373B"/>
                </svg>

                </a>
            </li>
        </ul>
    )
}