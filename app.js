const texto_Input = document.getElementById('texto-ingresado'),
      texto_Output = document.getElementById('solucion'),
      p_info = document.querySelector('p.info'),
      mensaje = document.querySelector('p.mensaje'),
      muñeco = document.querySelector('img.muñeco'),
      caja_output = document.querySelector('section.caja-output'),
      btn_copiar = document.querySelector('button.copiar'),
      btn_encriptar = document.querySelector('button.encriptar'),
      btn_desencriptar = document.querySelector('button.desencriptar'),
      error_mayus = document.getElementById('error-mayus'),
      error_vacio = document.getElementById('error-vacio');

let sizeScreen = window.innerWidth;


const matriz_codigo = [
   ["e", "enter"],
   ["i", "imes"],
   ["a", "ai"],
   ["o", "ober"],
   ["u", "ufat"],
];


btn_encriptar.addEventListener('click', () => {
      if(texto_Input.value != "") {
         const texto_Encriptado = encriptar(texto_Input.value);
         solucion.innerHTML = texto_Encriptado;
         estilosSolucion();
      } else {
         error_vacio.style = 'display: block;';
         estilosError();
      }
})

function encriptar(frase){
   for(let i=0; i<matriz_codigo.length; i++){
      if(frase.includes(matriz_codigo[i][0])){
         frase = frase.replaceAll(
            matriz_codigo[i][0], 
            matriz_codigo[i][1]
            )
      }
   }
   return frase;
}

function estilosSolucion(){
   p_info.style = 'display: none;';
   mensaje.style = 'display: none;';
   texto_Output.style = 'display: block;';
   muñeco.style = 'display: none;';
   caja_output.style = 'align-items: flex-start; justify-content: space-between;';
   btn_copiar.style = 'display: block;';
   texto_Input.value= '';
}

function estilosInicio(){
   p_info.style = 'display: block;';
   mensaje.style = 'display: block;';
   texto_Output.style = 'display: none;';
   caja_output.style = 'align-items: center; justify-content: center;';
   btn_copiar.style = 'display: none;';
   if( sizeScreen >= 1000){
      muñeco.style = 'display: block;';
   }
   
}


btn_copiar.addEventListener('click', async () => {
   await navigator.clipboard.writeText(solucion.value);
   estilosInicio();
   alert('Copiado!');
})


btn_desencriptar.addEventListener('click', () => {
   if(texto_Input.value != ""){
      const texto_Desencriptado = desencriptar(texto_Input.value);
      solucion.innerHTML = texto_Desencriptado;
      estilosSolucion();
   } else {
      error_vacio.style = 'display: block;';
      estilosError();
   }
})

function desencriptar(frase){
   for(let i=0; i<matriz_codigo.length; i++){
      if(frase.includes(matriz_codigo[i][1])){
         frase = frase.replaceAll(
            matriz_codigo[i][1], 
            matriz_codigo[i][0]
            )
      }
   }
   return frase;
}

// validaciones:

const expresiones = {
   regex1 : /[A-ZÀ-ÿ]/,
   regex2 : /^\s+$/
}

function validar() {
   let error = false;

   if(expresiones.regex1.test(texto_Input.value)){
      error_vacio.style = 'display: none;';
      error = true;
      error_mayus.style = 'display: block;';
      estilosError();
   } else {
      error_mayus.style = 'display: none;';
      if(texto_Input.value == "" || expresiones.regex2.test(texto_Input.value) ){
         error = true;
         error_vacio.style = 'display: block;';
         estilosError();
      }
   } 
   
   if(!error){
      error_vacio.style = 'display: none;';
      error_mayus.style = 'display: none;';
      estilosCorrecto(); 
   }
}


function estilosError() {
   btn_encriptar.classList.add('deshabilitado');
   btn_desencriptar.classList.add('deshabilitado');
}

function estilosCorrecto() {
   btn_encriptar.classList.remove('deshabilitado');
   btn_desencriptar.classList.remove('deshabilitado');
}

