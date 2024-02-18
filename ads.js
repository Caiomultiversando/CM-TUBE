let ads = Math.floor(Math.random()*4)+1
let recusado = localStorage.getItem("rc")
if (ads === 4) {
  if (recusado === true || recusado === null) {
    window.location.href = "Canal.html"
    
  }
  
}