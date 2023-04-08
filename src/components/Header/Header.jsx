import "./header.css"
import React from "react";
import { useState, useEffect } from "react";

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    
    const [activeNav, setActiveNav] = useState(`#nosotros`);

    //Handle scroll para setear el componente activo al scrollear
    const handleScroll = () => {
        const homePos = document.getElementById("nosotros").getBoundingClientRect();
        const yoPos = document.getElementById("servicios").getBoundingClientRect();
        const portfolioPos = document.getElementById("profesionales").getBoundingClientRect();
        const contactoPos = document.getElementById("contacto").getBoundingClientRect();
        const dragPos = document.getElementById("drag").getBoundingClientRect();
        
        if (homePos.top < window.innerHeight / 2 && homePos.bottom > window.innerHeight / 2) {
          setActiveNav("#nosotros");
        } else if (yoPos.top < window.innerHeight / 2 && yoPos.bottom > window.innerHeight / 2) {
          setActiveNav("#servicios");
        } else if (portfolioPos.top < window.innerHeight / 2 && portfolioPos.bottom > window.innerHeight / 2) {
          setActiveNav("#profesionales");
        } else if (contactoPos.top < window.innerHeight / 2 && contactoPos.bottom > window.innerHeight / 2) {
          setActiveNav("#contacto");
        }else if (dragPos.top < window.innerHeight / 2 && dragPos.bottom > window.innerHeight / 2) {
            setActiveNav("#drag");
        }
    };
        // 
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    
    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            showMenu(!Toggle)
        }
        else {
            setBurgerClass("burger-bar unclicked")
            showMenu(!Toggle)
        }
        setIsMenuClicked(!isMenuClicked)
    }
      
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return(
        <header className="headerContainer">
            <a className = "logo" href="index.html">
                    <svg width="43" height="87" viewBox="0 0 86 174" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M67.1574 33.1658H71.0621C71.0886 33.4328 71.4499 36.4292 74.0854 37.6895C74.4556 37.8647 76.0334 38.6243 77.7786 38.0066C79.6385 37.3473 80.2907 35.6112 80.4053 35.3024C81.2074 33.1741 80.2201 30.5283 77.9461 28.6087H8.18972C5.87155 29.7187 4.64632 32.0056 5.11348 34.0755C5.62471 36.3541 7.97813 37.3306 8.1456 37.3973C8.55987 37.5559 10.2258 38.1569 12.0063 37.4391C13.7779 36.7296 14.9591 35.0019 15.0737 33.0155L18.5112 33.099C18.9343 36.4709 17.3037 39.751 14.3773 41.4286C10.9221 43.4067 6.25934 42.8141 3.24485 39.8929C2.83939 39.4923 -0.192682 36.4041 0.424319 31.9639C0.891477 28.5502 3.34184 25.6123 6.80586 24.2686H79.0831C82.9085 25.7876 85.4295 29.243 85.5088 33.0489C85.5793 36.763 83.314 40.8027 79.0831 42.1214C75.3899 43.2732 71.0445 42.0963 68.7528 39.1C66.9106 36.6963 67.0692 34.0171 67.1485 33.1741L67.1574 33.1658Z" fill="#B47A1A"/>
                    <path d="M62.1576 28.8477H57.2084V137.771V161.239L20.0346 125.351L15.9102 129.333L58.976 170.919L62.1576 174.001V28.8477Z" fill="#B47A1A"/>
                    <path d="M24.6191 32.5195H51.0414V59.3525L46.8883 54.9813V36.3553H29.4716V56.3594L52.9999 79.813C52.9649 103.425 52.9299 127.036 52.895 150.648L24.6104 122.323V78.4349L29.4716 83.4908V119.882C35.8018 126.29 42.1407 132.698 48.4709 139.105C48.3747 120.032 48.2872 100.958 48.1911 81.8757L24.6104 57.5004V32.5107L24.6191 32.5195Z" fill="#B47A1A"/>
                    <path d="M40.6527 0V14.4653H27.3972L24.6104 17.4H59.4104L57.1684 14.4653L45.3065 14.2396V0H40.6527Z" fill="#B47A1A"/>
                    </svg>
            </a>
            <nav className="navContainer">
                
                <div className={Toggle ? "navMenu showMenu" : "navMenu"}>
                    <ul className="navList">
                        <li className="navItem">
                            <a href="#nosotros" onClick={() => setActiveNav("#nosotros")} className={activeNav === "#nosotros" ? "nav__link active-link" : "nav__link"}>¿Quienes somos?<div></div></a>
                        </li>
                        <li className="navItem">
                            <a href="#servicios" onClick={() => setActiveNav("#servicios")} className={activeNav === "#servicios" ? "nav__link active-link" : "nav__link"}>Servicios<div></div></a>
                        </li>
                        <li className="navItem">
                            <a href="#profesionales" onClick={() => setActiveNav("#profesionales")} className={activeNav === "#profesionales" ? "nav__link active-link" : "nav__link"}>Profesionales<div></div></a>
                        </li>
                        <li className="navItem">
                            <a href="#contacto" onClick={() => setActiveNav("#contacto")} className={activeNav === "#contacto" ? "nav__link active-link" : "nav__link"}>Contacto<div></div></a>
                        </li>
                        <li className="navItem">
                            <a href="#drag" onClick={() => setActiveNav("#drag")} className={activeNav === "#drag" ? "nav__link active-link" : "nav__link"}>Trabaja con nosotros<div></div></a>
                        </li>
                    </ul>
                </div>
                <div className="navToggle" onClick={updateMenu}>
                    <div className="burger-menu">
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;