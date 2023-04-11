import React from "react";
import "./QuienesSom.css";
const QuienesSom = () =>{
    return(
        <div className="quienes1Container">
            <div className="home">
                <div className="quienesTitle animate__animated animate__fadeInLeft">
                    <h1 className="animate__animated animate__fadeIn">Profesionalismo y compromiso</h1>
                    <a href="" className="buttonQuienes">Conocenos</a>
                </div>
                <div className="quienesDiv animate__animated animate__fadeInRightBig"></div>
                <div className="separador" />
            </div>
            <div className="quienesContainer" id="quienes somos">
                <div className="quienesTitle2">
                    <h2>S&J Despacho Jurídico</h2>
                    <h3>¿Quiénes somos?</h3>
                    <div className="sep animate__animated animate__fadeInLeftBig"></div>
                </div>
                <div className="separador2 animate__animated animate__flipInX" />
                <div className="quienesTexto">
                    <p>
                        S&J es un Despacho Jurídico familiar con sede en Costa Rica y en Madrid, España. 
                        Se caracteriza por brindar servicios hace más de 45 años sosteniendo como pilares 
                        la empatía, el profesionalismo y la confianza de nuestros clientes. Lo conforman los profesionales, Braulio Enrique Sánchez González, Carolina Eugenia Sánchez Jiménez y Martín Jardón Canalías.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default QuienesSom;