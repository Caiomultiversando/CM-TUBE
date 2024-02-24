let ID = localStorage.getItem("id")
let dialogo = document.getElementById("dialogo")
let msg = document.getElementById("recom")
let entregue = localStorage.getItem("entregue")
let saldo = parseInt(localStorage.getItem("saldo"))
if(entregue == null) {
  
  entregue = false
  localStorage.setItem("entregue",entregue)
  
}
console.log(ID)
if (entregue == "false") {
  if (ID == 55642 || ID == 16415|| ID == 35516)
  dialogo.showModal()
  msg.innerHTML = `Opa ${nome}, nossa equipe te enviou 1200 moedas!<br><br>
  <button onclick="resgate()" style="background-color: greenyellow; color: black; font-weight: bold; border-radius: 20px; border: none; padding: 20px;">Resgatar</button>`
  
}

function resgate() {
 
  saldo = saldo + 1200
  localStorage.setItem("saldo",saldo.toString())
  entregue = true
  localStorage.setItem("entregue",entregue)

dialogo.close()
}