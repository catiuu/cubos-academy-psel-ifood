function solucao(produtos) {
	//seu codigo aqui
let top = 0;


 for (let item of produtos){
  const preco = item.preco;
  if (preco >= 10000){
    top += item.preco;
    
  }
 }