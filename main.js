document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

var html = document.createElement("html")
//Variaveis globais:

var fundo = 1

var time = setInterval(sumir, 2000)
function sumir() {
  
  fundo = 0
  clearInterval(time)
  
}
  
 //Nome do site:
 
 var h2 = document.createElement("h2")
 h2.innerHTML = "CM TUBE"
 document.body.appendChild(h2)
 h2.style.color = "red"
 h2.style.fontSize = "20px"
 h2.style.margin = "0px"
 
 var barra = document.createElement("div")
 document.body.appendChild(barra)
 barra.style.backgroundColor = "white"
 barra.style.height = "100px"
 barra.id = "barraa"
 barra.addEventListener("click",function() {
   
   
   location.reload()
   
 })
 barra.appendChild(h2)
 
 
 var h4 = document.createElement("h4")
h4.innerHTML = "Novo aplicativo/site para assistir seus preferidos!"
document.body.appendChild(h4)
barra.appendChild(h4)
h4.style.color = "black"
h4.style.fontSize = "15px"
h2.style.margin = "0px"
 
 //destaque:
 
 var destaque = document.createElement("img")
 destaque.src = 'solo.png'
 document.body.appendChild(destaque)
 destaque.id = "destaques"
 
 destaque.style.height = 180 + "px"
 
 destaque.addEventListener("click", solo)
 
 
 function solo() {
   
  window.location.href = "solo.html"
   
 }
 var br = document.createElement("br")
document.body.appendChild(br)


//Roleta dos botões:

var roletaButon = document.createElement("div")
document.body.appendChild(roletaButon)
roletaButon.id = "roletaButon"
 //opção de apenas dublados:
 var dublados = document.createElement("button")
 roletaButon.appendChild(dublados)
 
 dublados.style.padding = 10 + "px"
 dublados.style.backgroundColor = "yellow"
 dublados.style.border = "none"
 dublados.innerHTML = "Ver Dublados"
 dublados.id = "dub"
 
 dublados.addEventListener("click",function() {
   
   alert("Ainda é uma área inacabada... volte depois")
   
 })
 
//opção de Mangás:

var manga = document.createElement("button")
roletaButon.appendChild(manga)
manga.innerHTML = "Mangás"
manga.style.margin = 8 + "px"
manga.style.padding = 8 + "px"
manga.style.backgroundColor = "yellow"
manga.style.border = "none"
manga.style.fontWeight = "bold"

manga.addEventListener("click" ,function() {
  
  alert("Os mangás chegaram em breve!")
  
})
 
 //chat
 var chat = document.createElement("button")
roletaButon.appendChild(chat)
chat.innerHTML = "Chat conversa"
chat.style.margin = 8 + "px"
chat.style.padding = 8 + "px"
chat.style.backgroundColor = "yellow"
chat.style.border = "none"
chat.style.fontWeight = "bold"

chat.addEventListener("click",function() {
  
  
  window.open("https://chat.whatsapp.com/LyaduIK84HA4iOJMJ4gGuY")
  
  
})
 
 //Seguir Canal:
 var canal = document.createElement("button")
 roletaButon.appendChild(canal)
 canal.innerHTML = "Seguir Canal"
 canal.style.margin = 8 + "px"
 canal.style.padding = 8 + "px"
 canal.style.backgroundColor = "yellow"
 canal.style.border = "none"
 canal.style.fontWeight = "bold"
 
 
 canal.addEventListener("click",function() {
   
   window.open("https://whatsapp.com/channel/0029VaK2J8FDuMRdm6yaAU2I")
   
   
 })

 //divisão (linha):
 
 
var hr = document.createElement("hr")
 document.body.appendChild(hr)
 
 hr.style.border = "solid 3px red"
 hr.style.backgroundColor = "deeppink"
 hr.style.height = "5px"
 hr.style.borderRadius = "10px"
 hr.style.boxShadow = "4px 8px 16px deeppink"
 
 
 //outros Animes:







  //roleta de animes:
  var roleta = document.createElement("div")
document.body.appendChild(roleta)

roleta.id = "roleta"



  
  
  
  
 //Naruto:
 var naruto = document.createElement("img")
 naruto.src = 'Naruto.png'
 naruto.style.height = 200 + "px"
 document.body.appendChild(naruto)
 
 naruto.addEventListener("click",narutoo)
 
 function narutoo() {
   
alert("Este pacote este sendo atualizado no momento...")
   
   
 }
 
 //Hunter X Hunter:
 
 var hunter = document.createElement("img")
 hunter.src = "Hunter X Hunter.png"
 hunter.style.height = 200 + "px"
 document.body.appendChild(hunter)
 
 hunter.addEventListener("click", hunterr)
 
 function hunterr() {
   
   alert("Este pacote está sendo atualizado no momento!")
   
 }
 
 //Ninja kamui:
 var ninjaKamui = document.createElement("img")
 roleta.appendChild(ninjaKamui)
 ninjaKamui.style.height = "200px"
 ninjaKamui.style.border = "solid 3px white"
 ninjaKamui.src = 'ninja-kamui.png'
 
 ninjaKamui.addEventListener("click",function() {
   
   window.location.href = 'ninja-kamui.html'
   
 })
 

 
 
 
//30-sai made Doutei dato Mahoutsukai ni Nareru Rashii:

  var doutei = document.createElement("img")

 roleta.appendChild(doutei)
doutei.style.height = 200 + "px"
doutei.src = "30-sai-made-doutei-dato-mahoutsukai-ni-nareru-rashii.jpeg"
doutei.style.margin = 5 + "px"

doutei.addEventListener("click",function() {
  
  window.location.href = "30-sai-made-doutei-dato-mahoutsukai-ni-nareru-rashii.html"
  
  
})

//Tanaka-kun wa Itsumo Kedaruge:


var tanaka = document.createElement("img")
roleta.appendChild(tanaka)
tanaka.src = 'Tanaka-kun-wa-Itsumo-Kedaruge-manga-volume-12-capa.jpg'

tanaka.style.height = 200 + "px"

tanaka.addEventListener("click",function() {
  
  window.location.href = 'tanaka.html'
  
  
})

 //Menu:
 
 
 var menu = document.createElement("img")
 menu.src = "Menu.png"
 menu.id = "menu"
 document.body.appendChild(menu)
 
 menu.addEventListener("click", menuu)
 
 function menuu() {
   
   if (fundo === 0) {
     
    window.scrollTo(0,0)
     fundo = 1
     
   } else {
     
     fundo = 0
     
   }
   
   
 }
 menu.style.display = "none"
 var mostrarIcone = setInterval(mostre,3000)
 
 function mostre() {
   
  menu.style.display = "block"
  clearInterval(mostrarIcone)
   
   
 }
 
 
 
 
 //fundo preto:
 
 var preto = document.createElement("img")
 preto.src = 'preto.png'
 preto.id = "preeto"
 document.body.appendChild(preto)
 preto.addEventListener("click", function() {
   if (fundo === 1) {
   preto.style.display = "none"
   fundo = 0
   }
 })
 setInterval(pretto,200)
 
 function pretto() {
   
   if (fundo === 0) {
     
     preto.style.display = "none"
     
  preto.style.animation = "MenuOff 1s ease-in-out forwards"
   } else {
     
     preto.style.display = "block"
     preto.style.animation = "Menu 0.5s ease-in-out forwards"
     
    
     
     
   }
   
   
   
 }
 
 //elementos que aparecem quando fundo é igual a 1;
 
 var tituloMenu = document.createElement("h2")
 tituloMenu.innerHTML = "Opções adicionais:"
 document.body.appendChild(tituloMenu)

tituloMenu.id = "options"
 
 
 
 var form = document.createElement("a")
 
 form.href = "https://surveyheart.com/form/65ce03705d55350e584ac9fd"
 form.innerHTML = "Pedir novos Animes"
 form.style.fontSize = "18px"
 form.id = "formm"
 document.body.appendChild(form)
 
 console.log(form)
 
 var gp = document.createElement("a")
 
 gp.href = "https://whatsapp.com/channel/0029VaK2J8FDuMRdm6yaAU2I"
 gp.innerHTML = "Entrar no grupo"
 gp.style.fontSize = "18px"
 gp.id = "gp"
 document.body.appendChild(gp)
 
 setInterval(()=> {
   
   if (fundo === 1) {
     
    form.style.display = "block" 
    tituloMenu.style.display = "block" 
    gp.style.display = "block"
    
     
     
   } else {
     
     
     form.style.display = "none"
     tituloMenu.style.display = "none"
     gp.style.display = "none"
     
   }
   
   
   
 },200)
 
 
 
 //estilização:

var estilo = document.createElement('style')

document.head.appendChild(estilo)






estilo.innerHTML = `body {
  
  
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  
  color: white;
  text-align: center;
  }
  
  body, html {
    
    height: 100%;
    width: 100%;
    padding: 0px;
    margin: 0px;
    
  }
  }
  
  h4 {
  text-shadow: 2px 4px 8px black;
    }
    
    #menu {
      
      height: 40px;
      position: fixed;
      top: 0%;
      left: 85%;
      z-index: 2;
      
      
      
      }
      
      @keyframes Menu {
        
        0% {
          
          opacity: 0%;
          
          
        }
        100% {
          
          opacity: 80%;
          
          
        }
        
        
      }
      
      
            @keyframes MenuOff {
        
        0% {
          
          opacity: 80%;
          
          
        }
        100% {
          
          opacity: 0%;
          
          
        }
        
        
      }
      
      #preeto {
        
        

          width: 100vw;
          height: 100vh;
          object-fit: cover;
          position: absolute;
          top: 0%;
          left: 0%;
        
        
        }
        
        #destaques {
          
          border-radius: 20px;
          animation: cor 1s infinite;
          
          }
          
          @keyframes cor {
            
            0% {
              
            box-shadow: 4px 8px 13px red;
              
              
            }
            100% {
              
              box-shadow: 2px 4px 8px blue;
              
              
            }
            
            
          }
          
          #sex {
            
            
            position: fixed;
            top: 50%;
            left: 50%;
            z-index: 4;
            
            object-fit: cover;
            
            transform: translate(-50%,-50%);
            
            
          }
          
          #barraa {
            
            border-radius: 20px;
            opacity: 50%;
            
            
          }
          
          #barraa:hover {
            
            
            opacity: 100%;
            
          }
          
          #formm {
            
          color: white;
          position: absolute;
          top: 50%;
          left: 30%;
            
          }
          
          
          #options {
            
            position: absolute;
            top: 0px;
            left: 50px;
          
            
            
          }
          #gp {
            color: white;
          position: absolute;
          top: 30%;
          left: 30%;
            
          }
          
          #roleta {
            
            
        width: 100%;
        overflow-x: auto;
        white-space: nowrap;
        border: none;
          }
    
    #roleta p {
        display: inline-block;
        margin: 5px;
    }
         #roletaButon {
         background-color: transparent;
         
         width: 100%;
        overflow-x: auto;
        white-space: nowrap;
        border: none;
         }
        
        #roletaButon button {
         
         opacity: 1;
         
         }
            
     #dub {
     
     animation: dub 2s ease-in-out infinite alternate-reverse;
     font-weight: bold;
     }
          
          
     @keyframes dub {
     
     0% {
       
       background-color: orangered;
       color: black;
       
     } 100% {
       
       background-color: blue;
       color: white;
       
     }
     
     }
      
          `
  
 
 function pesquisar() {
    var input = document.getElementById("pesquisar").value.toLowerCase();
    var roleta = document.getElementById("roleta");
    var animes = roleta.getElementsByTagName("img");
    
    for (var i = 0; i < animes.length; i++) { 
        var animeNome = animes[i].src.toLowerCase(); // Supondo que o nome do anime esteja na URL da imagem
        if (!animeNome.includes(input)) {
            animes[i].style.display = "none";
        } else {
            animes[i].style.display = "inline-block"; // ou qualquer outro estilo adequado ao seu layout
        }
    }
}