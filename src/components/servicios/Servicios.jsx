import React from "react";
import './Servicios.css';

const notariales =[
    {servicio:'Poderes especiales o generales'},
    {servicio:'Testamentos'},
    {servicio:'Apersonamientos a procesos y notificaciones'},
    {servicio:'Matrimonios y/o divorcios'},
    {servicio:'Constitución y cierre de sociedades'},
    {servicio:'Inscripción de matrimonios y divorcios de España en Costa Rica'},
    {servicio:'Actos unilaterales para completar contratos'},
    {servicio:'Apersonamientos a mortuales en Costa Rica'}
]
const laboral =[
    {servicio:'Asesoría en materia de trabajo'},
    {servicio:'Gestión de despidos e indemnizaciones'}
]
const bancario =[
    {servicio:'Asesoría en sistema bancarios'},
    {servicio:'Asesoría y constitución de créditos y cobros bancarios'}
]
const extranjeria =[
    {servicio:'Permiso de trabajo y estudio'},
    {servicio:'Nacionalidad Española'},
    {servicio:'Trámites generales'}
]
const inmobiliaria =[
    {servicio:'Due Diligence'},
    {servicio:'Asesoramiento inmobiliario integral'}
]


const Servicios=()=>{
    return(
        <div id="servicios">
            <h2 id="servicios1" className="serviciosTitle">Servicios</h2>
            <div className="serviciosConteiner">
            <div className="notarialesConteiner">
                <div className="blackBox"></div>
                <h3 data-aos="fade-right"><svg className='servicioSvg' viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.45834 27.8366C1.875 27.8366 2.22757 27.6763 2.51602 27.4039L15.2084 15C15.5128 14.6955 15.6731 14.3269 15.6731 13.9263C15.6731 13.5096 15.5128 13.109 15.2084 12.8526L2.5 0.432694C2.22757 0.160257 1.875 0 1.45834 0C0.625 0 0 0.641026 0 1.47436C0 1.85897 0.160257 2.2436 0.416668 2.51602L12.9648 14.7757V13.0609L0.416668 25.3366C0.160257 25.609 0 25.9777 0 26.3782C0 27.2115 0.625 27.8366 1.45834 27.8366ZM15.7853 27.8366C16.2019 27.8366 16.5545 27.6763 16.827 27.4039L29.5194 15C29.8237 14.6955 30 14.3269 30 13.9263C30 13.5096 29.8237 13.109 29.5194 12.8526L16.827 0.432694C16.5385 0.160257 16.2019 0 15.7853 0C14.952 0 14.3109 0.641026 14.3109 1.47436C14.3109 1.85897 14.4872 2.2436 14.7436 2.51602L27.2757 14.7757V13.0609L14.7436 25.3366C14.4872 25.609 14.3109 25.9777 14.3109 26.3782C14.3109 27.2115 14.952 27.8366 15.7853 27.8366Z" fill="white"/>
                    </svg>
                Notariales</h3>
                <div className="serviciosItemsConteiner">
                <ul className='notarialesItems'>
                    {notariales && notariales.map((e)=>{
                        return (
                        <li className="serviciosItem" key={e.servicio}>{e.servicio}</li>
                        )
                    })}
                </ul>
                </div>
            </div>
            <div className="juridicosConteiner">
                <div className="blackBox"></div>
                <h3 data-aos="fade-right"><svg className='servicioSvg'viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.45834 27.8366C1.875 27.8366 2.22757 27.6763 2.51602 27.4039L15.2084 15C15.5128 14.6955 15.6731 14.3269 15.6731 13.9263C15.6731 13.5096 15.5128 13.109 15.2084 12.8526L2.5 0.432694C2.22757 0.160257 1.875 0 1.45834 0C0.625 0 0 0.641026 0 1.47436C0 1.85897 0.160257 2.2436 0.416668 2.51602L12.9648 14.7757V13.0609L0.416668 25.3366C0.160257 25.609 0 25.9777 0 26.3782C0 27.2115 0.625 27.8366 1.45834 27.8366ZM15.7853 27.8366C16.2019 27.8366 16.5545 27.6763 16.827 27.4039L29.5194 15C29.8237 14.6955 30 14.3269 30 13.9263C30 13.5096 29.8237 13.109 29.5194 12.8526L16.827 0.432694C16.5385 0.160257 16.2019 0 15.7853 0C14.952 0 14.3109 0.641026 14.3109 1.47436C14.3109 1.85897 14.4872 2.2436 14.7436 2.51602L27.2757 14.7757V13.0609L14.7436 25.3366C14.4872 25.609 14.3109 25.9777 14.3109 26.3782C14.3109 27.2115 14.952 27.8366 15.7853 27.8366Z" fill="white"/>
                    </svg>
                Jurídicos</h3>
                <div className="serviciosItemsConteiner">
                    <div className="serviciosList">
                        <h4>Área Laboral</h4>
                        <ul className='juridicosItems'>
                            {laboral && laboral.map((e)=>{
                                return (
                                <li className="serviciosItem" key={e.servicio}>{e.servicio}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="serviciosList">
                        <h4>Área Bancario</h4>
                        <ul className='juridicosItems'>
                            {bancario && bancario.map((e)=>{
                                return (
                                <li className="serviciosItem" key={e.servicio}>{e.servicio}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="serviciosList">
                        <h4>Área de Extranjería</h4>
                        <ul className='juridicosItems'>
                            {extranjeria && extranjeria.map((e)=>{
                                return (
                                <li className="serviciosItem" key={e.servicio}>{e.servicio}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="serviciosList">
                        <h4>Área Inmobiliaria</h4>
                        <ul className='juridicosItems'>
                            {inmobiliaria && inmobiliaria.map((e)=>{
                                return (
                                <li className="serviciosItem" key={e.servicio}>{e.servicio}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <p className="serviciosText">¡y muchos más!</p>
                </div>
            </div>
        </div>
        </div>
    )

}

export default Servicios;
