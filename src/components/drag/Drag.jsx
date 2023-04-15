import {React, useEffect, useState, useRef} from "react";
import "./drag.css"
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Drag = () => {

    const form = useRef();
    const inputRef = useRef()
    const [files, setFiles] = useState(null);
    const [loading, setLoading] = useState(false);
    const [class2, setClass2] = useState("drag__area");
    const [fileLink, setFileLink] = useState(null);
    
    

    const handleDragOver = (event) => {
        event.preventDefault();
        setClass2("drag__area__active");
    }
    const handleDragLeave = (event) =>{
        event.preventDefault();
        setClass2("drag__area");
    }
    const handleDrop = (event) =>{
        event.preventDefault();
        const files = event.dataTransfer.files;
        const allowedTypes = ["application/pdf"]; // Lista de tipos de archivo permitidos

        const isAllowed = allowedTypes.includes(files[0].type); // Verifica si el archivo seleccionado está en la lista de tipos permitidos
        if (!isAllowed) {
            toast.error(`Solo se permiten archivos PDF`, {
                position: "bottom-right",
                autoClose: 700,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            return;
        }
        setFiles([files[0]]);
        setClass2("drag__area");
        inputRef.current.files = files;
        console.log(files);
    };

    /* Peticion a Email JS api */
    const sendEmail = async (event) => {
        event.preventDefault();

        if (!files) {
            toast.error(`Cargue un archivo primero`, {
                position: "bottom-right",
                autoClose: 700,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        setLoading(true);
        
        const formData = new FormData();
        formData.append("file", files[0]);
      
        try {
          const response = await axios.post("https://file.io/?expires=1d", formData, {
              headers: {
                  Authorization: "Bearer <R2SW65R.KTNWQ21-HSW4BZG-MPP3VE8-V3X8QXP>",
              },
          });
          setFileLink(response.data.link); //Recopilo la respuesta de File.io (link de descarga) y lo seteo en un estado
          setLoading(false);
          setFiles(null);
          
          // y lo envío por mail:
          emailjs.send('service_v837z66', 'template_bkkbr1h', {file: response.data.link}, "vSSQ5-PdZnwQ58Aof").then((result) => toast.success('Formulario enviado con éxito!', {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })).catch((error) => {
            toast.error(`Algo salio mal ${error}`, {
                position: "bottom-right",
                autoClose: 700,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })}) 

        } catch (error) {
          console.error(error);
          setLoading(false);
          toast.error(`Algo salio mal ${error}`, {
            position: "bottom-right",
            autoClose: 700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        }
      }
    /*---------------*/


    return (
        <>
        <div id="drag" className="dragContainer" data-aos="fade-up">
            <h3>Trabaja con nosotros</h3>
            <p>Dejanos tu curriculum y en breve nos pondremos en contacto contigo</p>

            <form ref={form} onDragLeave={handleDragLeave} onDragOver={handleDragOver} onDrop={handleDrop} onSubmit={sendEmail} className={class2} action="" >
            
            
                <div id="dragIcon">
                    <div className="iconClick" onClick={() => inputRef.current.click()}>
                        <svg width="41" height="41" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41 61.3333L15.5833 35.9166L22.7 28.5458L35.9167 41.7624V0.333252H46.0833V41.7624L59.3 28.5458L66.4167 35.9166L41 61.3333ZM0.333336 81.6666V56.2499H10.5V71.4999H71.5V56.2499H81.6667V81.6666H0.333336Z" fill="#B47A1A"/>
                        </svg>
                    </div>
                    
                    <p className="textMobileDrag">Haz click en el icono para subirlo</p>
                    <p className="textDesktopDrag">Elige un archivo y suéltalo aquí para cargarlo  </p>
                    <input name="file" ref={inputRef} id="inputFiles" type="file" onChange={(event) => {
                        const files = event.target.files;
                        const allowedTypes = ["application/pdf"]; // Lista de tipos de archivo permitidos
                        const isAllowed = allowedTypes.includes(files[0].type); // Verifica si el archivo seleccionado está en la lista de tipos permitidos
                        if (!isAllowed) {
                            toast.error(`Solo se permiten archivos PDF`, {
                                position: "bottom-right",
                                autoClose: 700,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            });
                          return;
                        }
                        setFiles([files[0]]);
                    }} required hidden/>
                    
                </div>
                <ul className="listFiles">
                    {files ? Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li>) : <li>No hay archivos</li>}
                </ul>
            
                <button className="button">{loading ? <span>Subiendo...</span> : <span>Subir</span>}</button>
            
            </form>
        </div>
        <ToastContainer />
        </>
    )
}

export default Drag;