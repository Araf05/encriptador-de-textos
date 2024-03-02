let texto_Input = document.getElementById('texto-ingresado');
let texto_info = document.querySelector('p.info');
let mensaje = document.querySelector('p.mensaje');
let muñeco = document.querySelector('img.muñeco');
let caja_output = document.querySelector('section.caja-output');
let btn_copiar = document.querySelector('button.copiar');

const matriz_codigo = [
   ["a", "ai"],
   ["e", "enter"],
   ["i", "imes"],
   ["o", "ober"],
   ["u", "ufat"],
];

function btnEncriptar(){
   const texto_Encriptado = encriptar(texto_Input.value);
   texto_info.style = 'display: none;';
   mensaje.innerHTML = texto_Encriptado;
   mensaje.style = 'color: var(--color-icon);';
   muñeco.style = 'display: none;';
   caja_output.style = 'align-items: flex-start; justify-content: space-between;';
   btn_copiar.style = 'display: block;';
   console.log(texto_Encriptado);
}

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

