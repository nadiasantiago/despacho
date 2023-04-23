import React from "react";
import './QuienesSom2.css';

const valores = [
    {nombre:'Excelencia',id:1, svg:<svg viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28.575" cy="28.6688" r="27.8367" fill="#3D0C0C"/>
    <g filter="url(#filter0_d_246_3005)">
    <path d="M14.8788 16.8266C14.732 16.6092 14.6559 16.3482 14.6559 16.0872C14.6559 15.3478 15.2539 14.7498 15.9934 14.7498H21.9358C22.5448 14.7498 23.1156 15.0705 23.4255 15.5925L27.1498 21.7959C24.5292 22.1276 22.1859 23.3509 20.4407 25.1613L14.8788 16.8266ZM42.2643 16.8266L36.7078 25.1613C34.9626 23.3509 32.6193 22.1276 29.9987 21.7959L33.7229 15.5925C34.0383 15.0705 34.6037 14.7498 35.2126 14.7498H41.1551C41.8945 14.7498 42.4926 15.3478 42.4926 16.0872C42.4926 16.3482 42.4165 16.6092 42.2697 16.8266H42.2643ZM19.0054 33.0176C19.0054 30.4798 20.0135 28.0459 21.808 26.2514C23.6025 24.4569 26.0364 23.4487 28.5742 23.4487C31.1121 23.4487 33.5459 24.4569 35.3405 26.2514C37.135 28.0459 38.1431 30.4798 38.1431 33.0176C38.1431 35.5554 37.135 37.9893 35.3405 39.7838C33.5459 41.5783 31.1121 42.5865 28.5742 42.5865C26.0364 42.5865 23.6025 41.5783 21.808 39.7838C20.0135 37.9893 19.0054 35.5554 19.0054 33.0176ZM29.0309 27.858C28.8461 27.4774 28.3078 27.4774 28.1175 27.858L26.8997 30.3264C26.8236 30.4786 26.6822 30.5819 26.5191 30.6036L23.7898 31.0005C23.3712 31.0603 23.2081 31.5714 23.5071 31.8704L25.4807 33.7951C25.6003 33.9147 25.6547 34.0778 25.6275 34.2463L25.1599 36.9593C25.0892 37.3725 25.5242 37.6933 25.8993 37.4976L28.335 36.2145C28.4818 36.1384 28.6612 36.1384 28.808 36.2145L31.2437 37.4976C31.6189 37.6933 32.0538 37.378 31.9832 36.9593L31.5156 34.2463C31.4884 34.0832 31.5428 33.9147 31.6624 33.7951L33.636 31.8704C33.9404 31.5768 33.7719 31.0658 33.3532 31.0005L30.6294 30.6036C30.4663 30.5819 30.3195 30.4732 30.2488 30.3264L29.0309 27.858Z" fill="white"/>
    </g>
    <defs>
    <filter id="filter0_d_246_3005" x="13.7094" y="14.7498" width="29.7296" height="29.7296" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="0.946449"/>
    <feGaussianBlur stdDeviation="0.473224"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_246_3005"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_246_3005" result="shape"/>
    </filter>
    </defs>
    </svg>},
    {nombre:'Seguridad',id:2, svg:<svg viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28.1629" cy="28.6688" r="27.8367" fill="#3D0C0C"/>
        <g clipPath="url(#clip0_246_3015)" filter="url(#filter0_d_246_3015)">
        <path d="M32.513 33.8873C37.7976 33.8873 42.0818 29.603 42.0818 24.3184C42.0818 19.0338 37.7976 14.7495 32.513 14.7495C27.2283 14.7495 22.9441 19.0338 22.9441 24.3184C22.9441 25.3351 23.1018 26.3191 23.3954 27.238L14.6257 36.0076C14.381 36.2523 14.2451 36.5839 14.2451 36.9319V41.2814C14.2451 42.0045 14.8269 42.5862 15.55 42.5862H19.8995C20.6226 42.5862 21.2043 42.0045 21.2043 41.2814V39.1066H23.379C24.1021 39.1066 24.6839 38.5249 24.6839 37.8018V35.6271H26.8586C27.2066 35.6271 27.5382 35.4911 27.7829 35.2465L29.5934 33.436C30.5122 33.7296 31.4963 33.8873 32.513 33.8873ZM34.6877 19.9689C35.2645 19.9689 35.8176 20.198 36.2255 20.6059C36.6333 21.0137 36.8625 21.5669 36.8625 22.1436C36.8625 22.7204 36.6333 23.2736 36.2255 23.6814C35.8176 24.0893 35.2645 24.3184 34.6877 24.3184C34.1109 24.3184 33.5578 24.0893 33.1499 23.6814C32.7421 23.2736 32.513 22.7204 32.513 22.1436C32.513 21.5669 32.7421 21.0137 33.1499 20.6059C33.5578 20.198 34.1109 19.9689 34.6877 19.9689Z" fill="white"/>
        </g>
        <defs>
        <filter id="filter0_d_246_3015" x="13.2983" y="14.7498" width="29.7296" height="29.7296" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.946449"/>
        <feGaussianBlur stdDeviation="0.473224"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_246_3015"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_246_3015" result="shape"/>
        </filter>
        <clipPath id="clip0_246_3015">
        <rect width="27.8367" height="27.8367" fill="white" transform="translate(14.2448 14.7498)"/>
        </clipPath>
        </defs>
        </svg>},    
    {nombre:'Confidencialidad',id:3, svg:<svg viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="27.8699" cy="28.6688" r="27.8367" fill="#3D0C0C"/>
    <g clipPath="url(#clip0_246_3008)" filter="url(#filter0_d_246_3008)">
    <path d="M22.8994 21.7498V24.7323H32.8411V21.7498C32.8411 19.0034 30.6167 16.7789 27.8703 16.7789C25.1239 16.7789 22.8994 19.0034 22.8994 21.7498ZM18.9227 24.7323V21.7498C18.9227 16.81 22.9305 12.8022 27.8703 12.8022C32.81 12.8022 36.8178 16.81 36.8178 21.7498V24.7323H37.812C40.0053 24.7323 41.7886 26.5156 41.7886 28.7089V40.639C41.7886 42.8323 40.0053 44.6156 37.812 44.6156H17.9286C15.7352 44.6156 13.9519 42.8323 13.9519 40.639V28.7089C13.9519 26.5156 15.7352 24.7323 17.9286 24.7323H18.9227Z" fill="white"/>
    </g>
    <defs>
    <filter id="filter0_d_246_3008" x="12.8381" y="12.802" width="30.0636" height="34.0404" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="1.11347"/>
    <feGaussianBlur stdDeviation="0.556734"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_246_3008"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_246_3008" result="shape"/>
    </filter>
    <clipPath id="clip0_246_3008">
    <rect width="27.8367" height="31.8134" fill="white" transform="translate(13.9515 12.802)"/>
    </clipPath>
    </defs>
    </svg>},
    {nombre:'Profesionalismo',id:4, svg:<svg viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28.3309" cy="28.1854" r="27.8367" fill="#3D0C0C"/>
    <g clipPath="url(#clip0_246_3019)" filter="url(#filter0_d_246_3019)">
    <path d="M28.3306 28.2248C26.2212 28.2248 24.1983 27.3869 22.7067 25.8953C21.2152 24.4038 20.3772 22.3808 20.3772 20.2715C20.3772 18.1621 21.2152 16.1391 22.7067 14.6476C24.1983 13.1561 26.2212 12.3181 28.3306 12.3181C30.44 12.3181 32.4629 13.1561 33.9545 14.6476C35.446 16.1391 36.2839 18.1621 36.2839 20.2715C36.2839 22.3808 35.446 24.4038 33.9545 25.8953C32.4629 27.3869 30.44 28.2248 28.3306 28.2248ZM27.4048 34.6372L26.2491 32.711C25.8514 32.0461 26.3298 31.2073 27.1003 31.2073H28.3306H29.5547C30.3251 31.2073 30.8036 32.0524 30.4059 32.711L29.2502 34.6372L31.3255 42.3358L33.5624 33.2081C33.6867 32.7048 34.1713 32.3755 34.6746 32.506C39.0303 33.5995 42.249 37.5389 42.249 42.2239C42.249 43.2803 41.3915 44.1315 40.3414 44.1315H32.1519C32.0214 44.1315 31.9034 44.1067 31.7915 44.0632L31.8102 44.1315H24.851L24.8696 44.0632C24.7578 44.1067 24.6335 44.1315 24.5093 44.1315H16.3198C15.2697 44.1315 14.4122 43.274 14.4122 42.2239C14.4122 37.5327 17.6371 33.5933 21.9866 32.506C22.4899 32.3817 22.9745 32.711 23.0988 33.2081L25.3357 42.3358L27.411 34.6372H27.4048Z" fill="white"/>
    </g>
    <defs>
    <filter id="filter0_d_246_3019" x="13.2983" y="12.3184" width="30.0636" height="34.0404" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="1.11347"/>
    <feGaussianBlur stdDeviation="0.556734"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_246_3019"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_246_3019" result="shape"/>
    </filter>
    <clipPath id="clip0_246_3019">
    <rect width="27.8367" height="31.8134" fill="white" transform="translate(14.4117 12.3184)"/>
    </clipPath>
    </defs>
    </svg>},
    {nombre:'Transparencia',id:5, svg:<svg viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28.7586" cy="28.1854" r="27.8367" fill="#3D0C0C"/>
    <g clipPath="url(#clip0_246_3023)" filter="url(#filter0_d_246_3023)">
    <path d="M14.8392 19.0314C14.8392 17.3255 16.2262 15.9385 17.9322 15.9385H25.6646V22.1244C25.6646 22.9798 26.3557 23.6709 27.2111 23.6709H33.397V25.5363C29.8256 26.5464 27.2111 29.8278 27.2111 33.723C27.2111 36.5792 28.6174 39.1019 30.7729 40.6484C30.6182 40.6726 30.4636 40.6822 30.3041 40.6822H17.9322C16.2262 40.6822 14.8392 39.2952 14.8392 37.5893V19.0314ZM33.397 22.1244H27.2111V15.9385L33.397 22.1244ZM28.7576 33.723C28.7576 31.8774 29.4908 30.1073 30.7959 28.8022C32.101 27.4971 33.8711 26.7639 35.7168 26.7639C37.5625 26.7639 39.3326 27.4971 40.6377 28.8022C41.9428 30.1073 42.676 31.8774 42.676 33.723C42.676 35.5687 41.9428 37.3388 40.6377 38.6439C39.3326 39.949 37.5625 40.6822 35.7168 40.6822C33.8711 40.6822 32.101 39.949 30.7959 38.6439C29.4908 37.3388 28.7576 35.5687 28.7576 33.723ZM38.9692 31.6305C38.6696 31.3308 38.1767 31.3308 37.877 31.6305L34.9435 34.5639L33.5565 33.1769C33.2569 32.8773 32.764 32.8773 32.4643 33.1769C32.1647 33.4766 32.1647 33.9695 32.4643 34.2691L34.3974 36.2023C34.6971 36.5019 35.19 36.5019 35.4896 36.2023L38.9692 32.7227C39.2689 32.423 39.2689 31.9301 38.9692 31.6305Z" fill="white"/>
    </g>
    <defs>
    <filter id="filter0_d_246_3023" x="13.726" y="15.9382" width="30.0636" height="26.9706" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="1.11347"/>
    <feGaussianBlur stdDeviation="0.556734"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_246_3023"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_246_3023" result="shape"/>
    </filter>
    <clipPath id="clip0_246_3023">
    <rect width="27.8367" height="24.7437" fill="white" transform="translate(14.8395 15.9382)"/>
    </clipPath>
    </defs>
    </svg>}
]


const QuienesSom2=()=>{
    return(
        <>   
        <div className="misionVisionConteiner">
            <svg className='logo2' viewBox="0 0 273 556" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M213.502 105.979H225.98C226.064 106.832 227.219 116.407 235.64 120.434C236.823 120.994 241.865 123.421 247.441 121.447C253.384 119.341 255.468 113.793 255.835 112.806C258.398 106.006 255.243 97.5512 247.976 91.4172H25.0772C17.6698 94.9642 13.7547 102.272 15.2474 108.886C16.881 116.167 24.4011 119.287 24.9363 119.501C26.26 120.007 31.5833 121.927 37.2726 119.634C42.9338 117.367 46.7081 111.846 47.0742 105.499L58.0585 105.766C59.4105 116.54 54.1999 127.021 44.8491 132.382C33.8083 138.703 18.9089 136.809 9.27641 127.475C7.98081 126.195 -1.70787 116.327 0.263691 102.138C1.75645 91.2305 9.58634 81.8427 20.6553 77.5488H251.61C263.833 82.4027 271.889 93.4441 272.142 105.606C272.368 117.474 265.129 130.382 251.61 134.596C239.809 138.276 225.923 134.516 218.6 124.941C212.714 117.26 213.221 108.699 213.474 106.006L213.502 105.979Z" fill="white" fillOpacity="0.1"/>
            <path d="M197.525 92.1785H181.71V440.233V515.22L62.9254 400.544L49.7462 413.27L187.358 546.154L197.525 556V92.1785Z" fill="white" fillOpacity="0.1"/>
            <path d="M77.5769 103.915H162.007V189.657L148.736 175.689V116.171H93.0827V180.092L168.265 255.036C168.153 330.484 168.041 405.933 167.93 481.381L77.549 390.871V250.632L93.0827 266.788V383.074C113.31 403.549 133.565 424.024 153.793 444.499C153.486 383.551 153.206 322.603 152.899 261.627L77.549 183.738V103.886L77.5769 103.915Z" fill="white" fillOpacity="0.1"/>
            <path d="M128.811 0V46.2224H86.4541L77.549 55.6H188.749L181.585 46.2224L143.681 45.501V0H128.811Z" fill="white" fillOpacity="0.1"/>
            </svg>
            
            <div className="visionConteiner">
                <h2 data-aos="fade-right">Visión</h2>
                <p data-aos="fade-right">Ser referentes en la prestación de servicios jurídicos, brindando un servicio integral y de excelencia al cliente, adaptándose e innovando para generar nuevas y mejores soluciones a sus problemas. <br></br>
                Crear un lazo de confianza firme con las personas, haciendo de sus necesidades nuestra principal prioridad.</p>
            </div>
            <div className="misionConteiner">
                <h2 data-aos="fade-left">Misión</h2>
                <p data-aos="fade-left">Nuestra misión es proporcionar una solución integral para sus necesidades legales, permitiéndole al cliente tomar decisiones informadas y enfrentar los desafíos que se le presenten con confianza. Ser una herramienta esencial, dinámica y comprometida como respuesta en el asesoramiento, representación, defensa y resolución en las diferentes áreas del Derecho.</p>
            </div>
        </div>
        <div className="valoresConteiner">
            <h2>Valores</h2>
            <h3>Protegemos tus derechos</h3>
            <div className="valoresItemsConteiner">
                <ul className='valoresItems'>
                    {valores && valores.map((e)=>{
                        return (<div key={e.nombre} className="item">
                        {e.svg}
                        <li>{e.nombre}</li>
                        </div>
                        )
                    })}
                </ul>
            </div>
        </div>
        </> 
    )
}

export default QuienesSom2;