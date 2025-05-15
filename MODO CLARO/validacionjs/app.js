const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formularios, #formularios2 input')


const expresiones ={
    habitacion: /^\d{1,4}$/, // 1 a 4 numeros.
    costo: /^\d{5,8}$/, // 5 a 14 numeros.
    capacidad: /^\d{1,4}$/ // 1 a 4 digitos.
}

const campos = {
    habitacion: false,
    costo: false,
    capacidad: false
}

const validarFormulario = (e) => {
    switch (e.target.name){
        case "numero_habitacion":
            validarCampo(expresiones.habitacion, e.target, 'habitacion');
        break
        case "costo_reserva":
            validarCampo(expresiones.costo, e.target, 'costo');
        break
        case "capacidad_habitacion":
            validarCampo(expresiones.capacidad, e.target, 'capacidad');
        break
    }
}

validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    }else{
        document.getElementById(`${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario )
    input.addEventListener('blur', validarFormulario )
})

formulario.addEventListener('submit',(e) =>{
    e.preventDefault();

    if(campos.habitacion && campos.costo && campos.capacidad ){
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');

        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 3000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    }else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')

        setTimeout(() =>{
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo')
        }, 3000);
    }
});


