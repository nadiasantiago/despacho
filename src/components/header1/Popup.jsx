import "./header.css";
import React from 'react'

export const Popup = ({open, onClose}) => {
    
  if(!open) return null
  return (
    <div className="overlay">
        <div className="popupContainer animate__animated animate__jackInTheBox">
            <ul className="popupList">
                <li className="popupItem">
                    <h2>Servicios Notariales:</h2>
                    <ul>
                        <li>-Poderes especiales o generales</li>
                        <li>-Testamentos</li>
                        <li>-Apersonamientos a procesos y notificaciones</li>
                        <li>-Matrimonios y/o divorcios</li>
                        <li>-Constitución y cierre de sociedades</li>
                        <li>-Inscripción de matrimonios y divorcios de España en Costa Rica</li>
                        <li>-Actos unilaterales para completar contratos</li>
                        <li>-Apersonamientos a mortuales en Costa Rica</li>
                    </ul>
                </li>
                <li className="popupItem">
                    <h2>Servicios área laboral:</h2>
                    <ul>
                        <li>-Asesoría en materia de trabajo</li>
                        <li>-Confección de contratos de trabajo</li>
                        <li>-Negociaciones colectivas de trabajo</li>
                        <li>-Reglamentos internos de trabajo</li>
                        <li>-Gestión de despidos e indemnizaciones</li>
                    </ul>
                </li>
                <li className="popupItem">
                    <h2>Servicios área de extranjería:</h2>
                    <ul>
                        <li>-Permisos de trabajo</li>
                        <li>-Permisos de estudiante</li>
                        <li>-Permisos prácticas laborables</li>
                        <li>-Nacionalidad Española</li>
                        <li>-Arraigo Social/Laboral</li>
                        <li>-Residencia</li>
                        <li>-Nacimientos en España</li>
                        <li>-Reagrupación Familiar</li>
                        <li>-Expedientes</li>
                    </ul>
                </li>
                <li className="popupItem">
                    <h2>Servicios área bancaria y financiera:</h2>
                    <ul>
                        <li>-Asesoría y constitución de bancos y entidades financieras</li>
                        <li>-Asesoría en sistemas bancarios</li>
                        <li>-Asesoría y constitución de créditos y cobros bancarios </li>
                        <li>-Planeamiento de operaciones de bancos de primer y segundo piso</li>
                    </ul>
                </li>
                <li className="popupItem">
                    <h2>Servicios área inmobiliaria:</h2>
                    <ul>
                        <li>-Due Diligence</li>
                        <li>-Compraventa de inmuebles y sociedades inmobiliarias</li>
                        <li>-Contratos de arrendamientos</li>
                        <li>-Asesoramiento en derechos reales</li>
                        <li>-Negociación contractual</li>
                        <li>-Gestión notarial y registral</li>
                    </ul>
                </li>
            </ul>
        </div>
        <i className="uil uil-times" onClick={onClose}></i>
    </div>
  )
}
