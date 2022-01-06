const botao = document.querySelector('button')

botao.onclick = () => {
  
 var valorRublo = Number(document.querySelector('input').value.replace(',','.'))

  document.querySelector('h3').innerHTML ='R$'+(valorRublo * 13.58).toFixed(2)
  
}