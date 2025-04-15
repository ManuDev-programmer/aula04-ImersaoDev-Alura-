<script>
 //Preciso criar uma lista com os 3 jogadores
 personagem = ["", "", ""]
 
 viloes = ["", "", ""]
 
 forcaPersonagem = 0
 forcaViloes = 0
 
 alert("O array Personagem contem: " + personagem)
 for(let i=0; i<3; i++){
  escolhaPersonagem = prompt("Digite o nome do seu personagem" + (1 + 3))
  personagem[i] = escolhaPersonagem
   //Calcular a força de cada personagem, e depois somar pra saber a força do time
 forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) + 1
  //forcaPersonagem += Math.floor(Math.random() * 10) + 1 //Maneira mais avançada de fazer a mesma coisa
 }
 console.log("Agora, o Array Personagem Contem: " + personagem)
  console.log("Inicio Viloes:"+ viloes)
  for(let i=0; i<3; i++){
   indiceAleatorio = Math.floor(Math.random() * 5)
   viloesPossiveis = ["Juliana", "Carmem", "Maria", "Fernanda", "Catarina"]
   viloes[i] = viloesPossiveis[indiceAleatorio]
    // Calcular a força de cada personagem do time do computador
   forcaViloes = forcaViloes + Math.floor(Math.random() * 10) + 1
   
  }
   console.log("Final Viloes:"+ viloes)
   
 //Comparar os dois times para saber quem venceu.
   if (forcaPersonagem > forcaViloes){
    alert("Seu time é muito forte! Voce ganhou a disputa de cabo de guerra! Sua forca foi " + forcaPersonagem)
   }
   else{
    if (forcaPersonagem < forcaViloes){
     alert("Seu time é fraquinho. O computador ganhou o cabo de guerra com forca de " + forcaViloes)
    }
     else{
      alert("Os dois times tem a mesma forca! Voces empataram!")
     }
   }

 </script>
