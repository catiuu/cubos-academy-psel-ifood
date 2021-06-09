function solucao(letra, palavras) {
	//seu codigo aqui
let perderam = 0;

for (let item of palavras){
  if (item [0] !== letra){
   perderam++;
  } 
}

console.log(perderam);
}