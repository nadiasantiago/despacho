import React, { useRef, useEffect } from "react";
import './Contacto.css';

const mapKey = process.env.REACT_APP_API_KEY;

const Contacto =()=>{
    const googleMapRef = useRef(null);
    const marker1Ref = useRef(null);
    const marker2Ref = useRef(null);

    useEffect(() => {
      const script = document.createElement("script");
      script.defer=true;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${mapKey}`;
      script.async = true;
      
      document.body.appendChild(script);
      // Initialize the map and markers when the API is ready
      script.onload = () => {
        const google = window.google;
        const map = new google.maps.Map(googleMapRef.current, {
          center: { lat: 20.42398748417044, lng: -40.6790158656319547 },
          zoom: 2.2,
        });
  
        // Create the markers
        const marker1 = new google.maps.Marker({
          position: { lat: 40.42398748417044, lng: -3.6790158656319547 },
          map,
        });
        const marker2 = new google.maps.Marker({
          position: { lat: 9.996947999683707, lng: -84.1152112404 },
          map,
        });
  
        // Save the markers as refs for future use
        marker1Ref.current = marker1;
        marker2Ref.current = marker2;
      }
    }, []);
  
    return (
        <div id="contacto">
            <h2 className="contactoTitle">Contacto</h2>
            <div className="contactoConteiner">
                <div ref={googleMapRef} className="map" />
                <div className="contactoInfo">
                    <div className="contactoInfoDetail">
                        <h3>Ubicación</h3>
                        <p>Heredia, Costa Rica / Madrid, España</p>
                    </div>
                    <div className="contactoInfoDetail">
                        <h3>Correo electrónico</h3>
                        <p>correo@correo</p>
                    </div>
                    <div className="contactoInfoDetail">
                        <h3>Teléfono</h3>
                        <p>+34 6776 23910</p>
                        <p>+506 22383898</p>
                        <p>+506 88838378</p>
                    </div>
                    <div className="redesConteiner">
                      <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M34.5133 20.4366V33.0424H27.205V21.2805C27.205 18.3251 26.1476 16.3093 23.5031 16.3093C21.4838 16.3093 20.2812 17.6691 19.7533 18.9828C19.5602 19.4526 19.5107 20.1069 19.5107 20.7646V33.0424H12.199C12.199 33.0424 12.2981 13.1232 12.199 11.0579H19.5107V14.1739L19.4629 14.2456H19.5107V14.1739C20.481 12.6791 22.215 10.5419 26.098 10.5419C30.907 10.5419 34.5133 13.6853 34.5133 20.4366ZM4.55254 0.46106C2.05325 0.46106 0.416664 2.10106 0.416664 4.25868C0.416664 6.36848 2.00541 8.05802 4.45687 8.05802H4.50471C7.05525 8.05802 8.63887 6.36848 8.63887 4.25868C8.59446 2.10106 7.05525 0.46106 4.55254 0.46106ZM0.850581 33.0424H8.15883V11.0579H0.850581V33.0424Z" fill="#B47A1A"/>
                      </svg>
                      <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M34.5133 20.4366V33.0424H27.205V21.2805C27.205 18.3251 26.1476 16.3093 23.5031 16.3093C21.4838 16.3093 20.2812 17.6691 19.7533 18.9828C19.5602 19.4526 19.5107 20.1069 19.5107 20.7646V33.0424H12.199C12.199 33.0424 12.2981 13.1232 12.199 11.0579H19.5107V14.1739L19.4629 14.2456H19.5107V14.1739C20.481 12.6791 22.215 10.5419 26.098 10.5419C30.907 10.5419 34.5133 13.6853 34.5133 20.4366ZM4.55254 0.46106C2.05325 0.46106 0.416664 2.10106 0.416664 4.25868C0.416664 6.36848 2.00541 8.05802 4.45687 8.05802H4.50471C7.05525 8.05802 8.63887 6.36848 8.63887 4.25868C8.59446 2.10106 7.05525 0.46106 4.55254 0.46106ZM0.850581 33.0424H8.15883V11.0579H0.850581V33.0424Z" fill="#B47A1A"/>
                      </svg>
                      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.5 0C14.2025 0 13.5411 0.024375 11.4611 0.117C9.38437 0.2145 7.97062 0.541125 6.7275 1.02375C5.44537 1.521 4.35662 2.18887 3.27275 3.27275C2.18887 4.35662 1.51938 5.44375 1.02375 6.7275C0.541125 7.97062 0.212875 9.38437 0.117 11.4611C0.0195 13.5411 0 14.2025 0 19.5C0 24.7975 0.024375 25.4589 0.117 27.5389C0.2145 29.614 0.541125 31.0294 1.02375 32.2725C1.51335 33.5739 2.28084 34.7529 3.27275 35.7273C4.24658 36.7198 5.42571 37.4875 6.7275 37.9763C7.97225 38.4573 9.386 38.7871 11.4611 38.883C13.5411 38.9805 14.2025 39 19.5 39C24.7975 39 25.4589 38.9756 27.5389 38.883C29.614 38.7855 31.0294 38.4573 32.2725 37.9763C33.5736 37.486 34.7524 36.7186 35.7273 35.7273C36.7202 34.7537 37.4878 33.5745 37.9763 32.2725C38.4573 31.0294 38.7871 29.614 38.883 27.5389C38.9805 25.4589 39 24.7975 39 19.5C39 14.2025 38.9756 13.5411 38.883 11.4611C38.7855 9.386 38.4573 7.969 37.9763 6.7275C37.4864 5.42623 36.719 4.24731 35.7273 3.27275C34.7541 2.27929 33.5748 1.51156 32.2725 1.02375C31.0294 0.541125 29.614 0.212875 27.5389 0.117C25.4589 0.0195 24.7975 0 19.5 0ZM19.5 3.51C24.7049 3.51 25.3256 3.536 27.3813 3.62537C29.2825 3.71475 30.3144 4.03 31.0001 4.29975C31.9134 4.65237 32.5601 5.07488 33.2459 5.75575C33.9267 6.43825 34.3492 7.08662 34.7019 7.99987C34.9684 8.68562 35.2869 9.7175 35.373 11.6188C35.4656 13.676 35.4867 14.2935 35.4867 19.5C35.4867 24.7065 35.4624 25.3256 35.3665 27.3813C35.2674 29.2825 34.9505 30.3144 34.6824 31.0001C34.3652 31.8464 33.8665 32.6129 33.2215 33.2459C32.5912 33.8915 31.8252 34.3888 30.979 34.7019C30.2965 34.9684 29.2484 35.2869 27.3471 35.373C25.2769 35.4656 24.6675 35.4867 19.4513 35.4867C14.2334 35.4867 13.624 35.4624 11.5554 35.3665C9.6525 35.2674 8.60437 34.9505 7.92188 34.6824C7.07509 34.3691 6.30935 33.8699 5.681 33.2215C5.0287 32.5955 4.52841 31.8283 4.2185 30.979C3.95037 30.2965 3.63513 29.2484 3.536 27.3471C3.46288 25.2996 3.43688 24.6675 3.43688 19.4756C3.43688 14.2821 3.46288 13.6484 3.536 11.5765C3.63513 9.67525 3.95037 8.62875 4.2185 7.94625C4.55975 7.02 4.99688 6.38625 5.681 5.70213C6.36188 5.02125 6.99725 4.5825 7.92188 4.24288C8.60437 3.97313 9.62975 3.65625 11.531 3.55875C13.6029 3.48563 14.2122 3.46125 19.4269 3.46125L19.5 3.51ZM19.5 9.48675C18.185 9.48675 16.883 9.74575 15.6681 10.249C14.4532 10.7522 13.3494 11.4897 12.4196 12.4196C11.4897 13.3494 10.7522 14.4532 10.249 15.6681C9.74575 16.883 9.48675 18.185 9.48675 19.5C9.48675 20.815 9.74575 22.117 10.249 23.3319C10.7522 24.5468 11.4897 25.6506 12.4196 26.5804C13.3494 27.5103 14.4532 28.2478 15.6681 28.751C16.883 29.2542 18.185 29.5133 19.5 29.5133C22.1557 29.5133 24.7026 28.4583 26.5804 26.5804C28.4583 24.7026 29.5133 22.1557 29.5133 19.5C29.5133 16.8443 28.4583 14.2974 26.5804 12.4196C24.7026 10.5417 22.1557 9.48675 19.5 9.48675ZM19.5 26C15.9087 26 13 23.0913 13 19.5C13 15.9087 15.9087 13 19.5 13C23.0913 13 26 15.9087 26 19.5C26 23.0913 23.0913 26 19.5 26ZM32.2498 9.09187C32.2272 9.69739 31.9708 10.2706 31.5344 10.691C31.098 11.1114 30.5157 11.3463 29.9098 11.3463C29.3038 11.3463 28.7215 11.1114 28.2851 10.691C27.8487 10.2706 27.5923 9.69739 27.5697 9.09187C27.5697 8.47127 27.8163 7.87608 28.2551 7.43725C28.694 6.99841 29.2891 6.75188 29.9098 6.75188C30.5304 6.75188 31.1255 6.99841 31.5644 7.43725C32.0032 7.87608 32.2498 8.47127 32.2498 9.09187Z" fill="#B47A1A"/>
                      </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacto;