import React,{useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import './Consultas.css';
import Swal from 'sweetalert2';

const Consultas=()=> {
    const apiKey = process.env.REACT_APP_API_EMAILJS_KEY
    const serviceKey = process.env.REACT_APP_SERVICE_KEY
    const templateKeyForm = process.env.REACT_APP_TEMPLATE_FORM_KEY

    const form = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [consult, setConsult] = useState('');

    const sendConsult = async(e) => {
        e.preventDefault();
        try {
                emailjs.sendForm({serviceKey}, {templateKeyForm}, form.current, {apiKey})
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
    <div className='consultaConteiner' data-aos="fade-up">
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
