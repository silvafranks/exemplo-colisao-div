 // Inicializa a pontuação do jogo
 var pontos = 0;

 // Ouve eventos de tecla para atirar o quadrado vermelho quando a tecla 'X' é pressionada
 window.addEventListener('keyup', function (e) {
     var codigoTecla = e.key
     var x = codigoTecla == 'x';
     if (x) {
         atirarQuadrado()

     }
 })

 // Variável para controlar a direção do movimento vertical do quadrado vermelho
 var subir = true;

 // Configura um intervalo para o movimento vertical do quadrado vermelho
 setInterval(function () {
     // Verifica se o quadrado vermelho atingiu os limites superior ou inferior
     if (redColisao1.offsetTop >= 378) {
         subir = true;
     } else if (redColisao1.offsetTop < 140) {
         subir = false
     }
      // Move o quadrado vermelho para cima ou para baixo com base na variável 'subir'
     if (subir) {
         // console.log(redColisao1.offsetTop)
         redColisao1.style.top = redColisao1.offsetTop - 10 + 'px';
     } else {
         // Ajusta a velocidade ao atingir diferentes alturas
         if (redColisao1.offsetTop >= 8 && redColisao1.offsetTop <= 25) {
             redColisao1.style.top = redColisao1.offsetTop + 2 + 'px';
         } else {
             redColisao1.style.top = redColisao1.offsetTop + 10 + 'px';
         }

     }



 }, 24);

 // Ouve eventos de tecla para mover o quadrado azul para a esquerda quando a tecla de seta esquerda é pressionada
 window.addEventListener('keydown', function (e) {
     var codigoTecla =  e.key
     var left = codigoTecla == 'ArrowLeft';
     if (left) {
         atualizarPosicao()

         blueColisao2.style.left = blueColisao2.offsetLeft - 10 + 'px'
     }
 })

 // Ouve eventos de tecla para mover o quadrado azul para a direita quando a tecla de seta direita é pressionada
 window.addEventListener('keydown', function (e) {
     var codigoTecla = e.key;
     var right = codigoTecla == 'ArrowRight';
     if (right) {
         atualizarPosicao()
         blueColisao2.style.left = blueColisao2.offsetLeft + 10 + 'px'
     }
 })

 // Variáveis globais para armazenar as posições do quadrado vermelho e azul
 let cimaVermelhoGlobal;
 let esquerdaVermelhoGlobal;
 let direitaVermelhoGlobal;
 let baixoVermelhoGlobal;


 let baixoAzulGlobal;
 let esquerdaAzulGlobal;
 let direitaAzulGlobal;
 let cimaAzulGlobal;

 // Atualiza as posições globais do quadrado vermelho e azul
 function atualizarPosicao() {
     let quadradoVermelho = document.getElementById('redColisao1').getBoundingClientRect();
     let quadradoAzul = document.getElementById('blueColisao2').getBoundingClientRect();

     // Armazena as posições globais do quadrado vermelho
     cimaVermelhoGlobal = quadradoVermelho.top;
     esquerdaVermelhoGlobal = quadradoVermelho.left;
     direitaVermelhoGlobal = quadradoVermelho.right;
     baixoVermelhoGlobal = quadradoVermelho.bottom;

     // Armazena as posições globais do quadrado azul
     baixoAzulGlobal = quadradoAzul.bottom;
     esquerdaAzulGlobal = quadradoAzul.left;
     direitaAzulGlobal = quadradoAzul.right;
     cimaAzulGlobal = quadradoAzul.top;
     // Verifica se houve colisão entre os quadrados
     verificarColisao()

 }

 // Verifica se houve colisão entre os quadrados vermelho e azul
 function verificarColisao() {
     if (cimaVermelhoGlobal < baixoAzulGlobal &&
         baixoVermelhoGlobal > cimaAzulGlobal &&
         direitaVermelhoGlobal > esquerdaAzulGlobal &&
         esquerdaVermelhoGlobal < direitaAzulGlobal) {

         // Aumenta a pontuação e realiza ações relacionadas à colisão
         pontos++
         div_pontos.innerHTML = pontos
         matarIntervalo()

     } else {
         // Ações a serem realizadas se não houver colisão

     }
 }
 // Variável para armazenar o intervalo de atirar o quadrado
 var intervalo;

 // Atira o quadrado vermelho em intervalos regulares
 function atirarQuadrado() {
     // Cancela qualquer intervalo existente antes de iniciar um novo
     matarIntervalo()
     // Configura um novo intervalo para atirar o quadrado vermelho
     intervalo = setInterval(function () {
          // Atualiza as posições e move o quadrado azul para a esquerda
         atualizarPosicao()

         // Verifica se o quadrado azul atingiu a borda esquerda
         if (blueColisao2.offsetLeft <= 0) {
             matarIntervalo()
         }else{
             // Move o quadrado azul para a esquerda
             blueColisao2.style.left = blueColisao2.offsetLeft - 30 + 'px'
         }
     }, 15);

 }
 // Cancela o intervalo atual
 function matarIntervalo() {
     clearInterval(intervalo);
     // Reinicia a posição do quadrado azul após um intervalo de tempo
     reiniciar()
 }

 // Reinicia a posição do quadrado azul
 function reiniciar() {
     setTimeout(function(){
         blueColisao2.style.left = '700px'
     }, 15)
 }