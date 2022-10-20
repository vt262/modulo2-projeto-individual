//Variáveis
var cifras = document.getElementById('cifras')
var escreva1 = document.getElementById('escreva1')
var result1 = document.getElementById('result1')
var criptcesar11 = document.getElementById('criptcesar')
var alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
var btncodificar1 = document.getElementById('flexRadioDefault1');
var btndecodificar2 = document.getElementById('flexRadioDefault22');
var submit = document.getElementById('CONFIRMAR')




//Função que exibe o texto Criptografar / Descriptografar

btncodificar1.addEventListener('click', function(){
        submit.style.display = 'block'
        submit.value = 'Criptografar'
})

btndecodificar2.addEventListener('click', function(){
        submit.style.display = 'block'
        submit.value = 'Descriptografar'
})



//Função para Base 64

    function codBase64() {
        var mensagem = document.querySelector('#escreva1').value
        var codificado = btoa(mensagem)
        return codificado
}
    function decBase64(){
        var mensagem = document.querySelector('#escreva1').value
        var decodificado64 = atob(mensagem)
        return decodificado64
}

//Função para Cifra de Cesar

    function codCesar() {
        var msgelemento = escreva1.value;
        var msgMinuscula1 = msgelemento.toLowerCase();
        var numtransform = (Number(criptcesar11.value) % 26);
        var mmsgcodificada1 = '';
      
        for(var i = 0; i < msgMinuscula1.length; i++){
           for(var j =0; j < alfabeto.length; j++){
             if(msgMinuscula1[i] == alfabeto[j]){
               mmsgcodificada1 += alfabeto [j + numtransform]
               break;
           } else if (msgMinuscula1[i] == ' ') {
               mmsgcodificada1 += ' ';
               break;
           }
          }    
      }
      return mmsgcodificada1
      }
      
          function decCesar() {
          var msgelemento = escreva1.value;
          var msgMinuscula1 = msgelemento.toLowerCase()
          var numtransform = (Number(criptcesar11.value) % 26)
          var mmsgcodificada1 = '';
        
          for(var i = 0; i < msgMinuscula1.length; i++){
             for(var j = alfabeto.length - 1; j >= 0; j--){
               if(msgMinuscula1[i] == alfabeto[j]){
                 mmsgcodificada1 += alfabeto [j - numtransform]
                 break;
             } else if (msgMinuscula1[i] == ' ') {
                 mmsgcodificada1 += ' ';
                 break;
             }
            }       
        }
        return mmsgcodificada1
      }

      submit.addEventListener('click', function(e){
        e.preventDefault();
        if(btncodificar1.checked && cifras.value === "base"){
            result1.innerText = codBase64();

        } else if(btndecodificar2.checked && cifras.value === "base"){
            result1.innerText = decBase64();

        } else if(btncodificar1.checked && cifras.value === "cesar"){
            result1.innerText = codCesar()

        } else if(btndecodificar2.checked && cifras.value === "cesar"){
            result1.innerText = decCesar()

        } else{
            result1.innerText = "Algo deu errado, por favor digite novamente."
        }
    })