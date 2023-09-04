const nomeReceita = "Bolo de cenoura"
const ingredientes = [
    "2 cenouras medias",
    "3 ovos",
    "3~4 de xicara de oleo",
    "1 chicara de acucar",
    "2 xicaras de trigo",
    "1 colher de cha de fermento em po"
]

ingredientes.forEach(ingrediente => {
    console.log(ingrediente)    
});
 for (i = 0; i < ingredientes.length; i++){
    console.log(ingredientes[i]);
 }
 var controle = 0;

 while (controle < ingredientes.length) {
    controle++;
    console.log(ingredientes[controle]);
 }