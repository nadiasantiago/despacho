import React,{useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import './Consultas.css';
import Swal from 'sweetalert2';

const Consultas=()=> {
    const form = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [consult, setConsult ] = useState('');

    /*const validate=()=>{values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        return errors;
    }}*/


    const sendConsult = async(e) => {
        e.preventDefault();
        try {
            emailjs.sendForm('service_v837z66', 'template_usnqqml', form.current, 'vSSQ5-PdZnwQ58Aof')
            .then(
                Swal.fire({
                title: "¡Consulta enviada con éxito!",
                text: `Pronto nos pondremos en contacto`,
                icon: "success",
                showCloseButton: true,
                showConfirmButton: false,
            }),
            setTimeout(() => {
            Swal.close();
            }, 2000)
            ).catch((error) => {
                Swal.fire({
                    icon: 'error',
                    text: '¡Algo salió mal!',
                    showCloseButton: true,
                    showConfirmButton: false,    
                })})   
        } catch (error) {
            console.log(error)
        }
        e.target.reset();
    }


return (
    <div className='consultaConteiner'>
        <div className='consultaTitleConteiner'>
            <h2 className='consultaTitle'>Dejanos tu consulta</h2>
            <p className='consulta-description'>En breve nos pondremos en contacto contigo</p>
        </div>
        <form className='consultaForm' ref={form} onSubmit={sendConsult}>
            <label htmlFor='nombre'></label>
            <input type="text" id='nombre' name='nombre' placeholder='Ingresa tu nombre' value={name} onChange={(e) => setName(e.target.value)} required/>
            <label htmlFor="email"></label>
            <input type="email" name="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <textarea name="consultas" id="" cols="30" rows="5" placeholder='Escribe tu consulta' value={consult} onChange={(e) => setConsult(e.target.value)} required></textarea>
            <button className='consultaButton' type="submit">Enviar</button>
        </form>
    </div>
  );
}

export default Consultas;
