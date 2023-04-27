import "./profesionales.css"
import React from "react"
import prof1 from "../../assets/prof1.png"
import prof2 from "../../assets/prof2.png"
import prof3 from "../../assets/prof3.png"


const Profesionales = () => {
    return(
        <div className="profesionalesContainer" id="profesionales">
            <h2 id="profesionales1">Profesionales</h2>
            <h3>Compromismo, experiencia y conocimiento</h3>
            <div className="profImgContainer">
                <div data-aos="fade-right" data-aos-duration="500" className="profImg">
                    <img src={prof1} alt="" />
                    <div className="separadorProf"/>
                    <h4>Braulio Enrique Sánchez González</h4>
                    <p>Socio director oficina Costa Rica</p>
                </div>
                <div data-aos="fade-right" data-aos-duration="950" className="profImg">
                    <img src={prof2} alt="" />
                    <div className="separadorProf"/>
                    <h4> Carolina Eugenia Sánchez Jiménez</h4>
                    <p>Socia oficina Costa Rica y España</p>
                </div>
                <div data-aos="fade-right" data-aos-duration="1350" className="profImg">
                    <img src={prof3} alt="" />
                    <div className="separadorProf"/>
                    <h4 className="martin">Martín Jardón Canalías</h4>
                    <p>Socio oficina España</p>
                </div>
            </div>
        </div>
    )
}

export default Profesionales; 