import React from "react";

function Testimonio(){
    return(
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio" src={require("../Img/persona-1.jpg")} alt="Persona 1"/>
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio">David Soto Rivera</p>
                <p className="cargo-testimonio">Desarrollador de software</p>
                <p className="texto-testimonio">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor deserunt nobis nostrum obcaecati aliquid, voluptas quam, eligendi rem expedita debitis aspernatur deleniti laboriosam maxime sapiente nemo tenetur ratione maiores cum.</p>
            </div>
        </div>
    );
}

export default Testimonio;