# Despacho Jurídico S&J | Sitio Web w/ React JS.

[Visita la web](https://despachosj.com)

## Resúmen:

Sitio one page componetizado. 

El *Header* es un smart component que detecta la posición del scroll. Se implementa un handleScroll que utiliza **getBoundingClientRect().** Esto realiza actualizaciones del nav item activo, como a su vez del document.title con un custom hook. 
A su vez, en versiones de pantalla reducida, el mismo se compagina en un burger nav customizado. Se implementa un useState del Toggle que setea la clase del Nav con un onClick.
En Servicios se encuentra un Dropdown manejando con eventos onMouse. Este mismo, al clickearse, dispara un pop up componetizado con funcionalidad modal.

## Funcionalidad Drag and Drop

En vistas de facilitarle al cliente la posibilidad de que los usuarios puedan adjuntar un archivo PDF de su CV y enviarlo, se implementa de la siguiente manera:

 - Al arrastrar y soltar un archivo PDF en la zona definida, se valida si el tipo de archivo es correcto (PDF). Si es así, se envía el archivo a la API de File.io para obtener un enlace de descarga, que luego se envía por correo electrónico utilizando la API de EmailJS. Además, se utiliza la biblioteca Toastify para avisar que se requieren archivos para enviar la petición o bien para cuando se sueltan archivos erróneos. SweetAlert2, a su vez, para mostrar una alerta emergente en caso de éxito o error una vez enviada la petición a las APIS. El código utiliza los estados de React y las referencias para mantener los datos actualizados y manipular el DOM. La función "sendEmail" es asíncrona y utiliza la biblioteca **Axios** para realizar la petición POST a la API de File.io. 
