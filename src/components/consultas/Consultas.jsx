import React,{useRef} from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Consultas.css';
import Swal from 'sweetalert2';

const Consultas=()=> {
    const form = useRef();

    // const validate=()=>{values => {
    //     const errors = {};
    //     if (!values.email) {
    //         errors.email = 'Required';
    //     } else if (
    //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //     ) {
    //         errors.email = 'Invalid email address';
    //     }
    //     return errors;
    // }}


    const sendConsult = async(e) => {
        e.preventDefault();
        // try {
            // Swal.fire({
            //     title: "¡Consulta enviada con éxito!",
            //     text: `Pronto nos pondremos en contacto`,
            //     icon: "success",
            //     showConfirmButton: false,
            // });
            // setTimeout(() => {
            //     Swal.close();
            // }, 2000);

            toast.success('Consulta enviada con éxito!', {
                        position: "bottom-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
            })
        //     emailjs.sendForm('nombre_de_servicio', 'template_key', form.current, 'api_key').then((result) => toast.success('Currículum enviado con éxito!', {
        //         position: "bottom-right",
        //         autoClose: 1500,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //     })).catch((error) => {
        //         toast.error(`Algo salio mal ${error}`, {
        //             position: "bottom-right",
        //             autoClose: 700,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //             theme: "light",
        //     })});    
        // } catch (error) {
        //     console.log(error)
        // }
    e.target.reset();
    }


  return (
    <>
    <div className='consultaConteiner'>
        <div className='consultaTitleConteiner'>
            <h2 className='consultaTitle'>Dejanos tu consulta</h2>
            <p className='consulta-description'>En breve nos pondremos en contacto contigo</p>
        </div>
        <form className='consultaForm' ref={form} onSubmit={sendConsult}>
            <label for='nombre'></label>
            <input type="text" id='nombre' name='nombre' placeholder='Ingresa tu nombre' required/>
            <label for="email"></label>
            <input type="email" name="email" id="email" placeholder='Email' required/>
            <textarea name="consultas" id="" cols="30" rows="5" placeholder='Escribe tu consulta' required></textarea>
            <button className='consultaButton' type="submit">Enviar</button>
        </form>
    </div>
    <ToastContainer />
    </>
  );
}

export default Consultas;
