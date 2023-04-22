import React from 'react';

const Consultas=()=> {
//   const [nombre, setNombre] = useState('');
//   const [email, setEmail] = useState('')

//   function handleSubmit(event) {
//     event.preventDefault();
//     // Aquí puedes enviar los datos del formulario
//     alert(`Hola, ${nombre}!`);
//   }


  return (
    <div>
        <h2>Dejanos tu consulta</h2>
        <p>En breve nos pondremos en contacto contigo</p>
        <form >
        <label for='nombre'></label>
        <input type="text" id='nombre' name='nombre' placeholder='Nombre' required/>
        <br />
        <label for="email"></label>
        <input type="email" name="email" id="email" placeholder='Email' required/>
        <br />
        <textarea name="consultas" id="" cols="30" rows="10" placeholder='Escribe tu consulta'></textarea>
        <button type="submit">Enviar</button>
        </form>
    </div>
  );
}

export default Consultas;
