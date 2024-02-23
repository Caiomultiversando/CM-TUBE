let adsVideo = Math.floor(Math.random()*3)+1
let vds = localStorage.getItem("vds")
let ads = Math.floor(Math.random()*4)+1
let recusado = localStorage.getItem("rc")
if (ads === 4) {
  if (recusado === true || recusado === null) {
    window.location.href = "Canal.html"
    
  }
  
}

if (adsVideo === 3 && vds == "ativado" && innerWidth < 690) {
  
 window.location.href = "videos.html"
  
  
}

