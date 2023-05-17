import { getData, getDataFromDetails, getDataFromComments, getDataFromRelated } from "../DB/Api.js"

//Contenedores
const BTNBUSCAR = document.getElementById("btnSearch")

const TITLE = document.querySelector(".titulo")
const VIDEO = document.querySelector(".video")
const RELATEDVIDEOS = document.querySelector(".videosRelacionados")
const CHANELLOGO = document.querySelector(".logoCanal")
const CHANELNAME = document.querySelector(".nombreCanal")
const COMMENTS = document.querySelector(".comentarios")
const DESCRIPTION = document.querySelector(".descripcion")

//Mostrar de la API
async function Mostrar (){
    try{
        const data = await getData()    
        const {author, title, videoId, movingThumbnails, } = data        
        TITLE.innerHTML = `<h3>${title}</h3>`
        //VIDEO.innerHTML = `<img src=${movingThumbnails[0].url}>`
        VIDEO.innerHTML = `<iframe width="720" height="360" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        CHANELNAME.innerHTML = `<h3>${author.title}</h3>`
        CHANELLOGO.innerHTML = `<img src=${author.avatar[0].url}>` 
        
        Mostrar2()
        Mostrar3()
        Mostrar4()
        //COMMENTS.innerHTML = `<h3>${data2.description}</h3>`
    }catch(error){
        console.log(error)
    }
}   

async function Mostrar2 (){
    try{
        const data2 = await getDataFromDetails()
        //console.log(data2.description)
         DESCRIPTION.innerHTML = `
         <div class="accordion" id="accordionExample">
         <div class="accordion-item">
           <h2 class="accordion-header" id="headingOne">
             <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             <strong>Descripcion</strong>
            </button>
           </h2>
           <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
             <div class="accordion-body">
               <strong><p>${data2.description}</p></strong> 
             </div>
           </div>
         </div>
       </div>
         `
    
        }catch(error){
        console.log(error)
    }
} 

async function Mostrar3 (){
    COMMENTS.innerHTML = ""
    try{
        const data3 = await getDataFromComments()
        const ul = document.createElement("ul")
        data3.forEach(element => {
            const li = document.createElement("li")
            li.innerHTML = element.content
            ul.appendChild(li)
        });
        COMMENTS.appendChild(ul)
    
        }catch(error){
        console.log(error)
    }
} 

async function Mostrar4 (){
    try{
        const data4 = await getDataFromRelated()
        RELATEDVIDEOS.innerHTML = `
        <h2>Related videos</h2>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
           <!-- <img src=${data4[0].video.thumbnails[0].url} class="d-block w-100" alt="...">-->  
            <iframe width="360" height="180" src="https://www.youtube.com/embed/${data4[0].video.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="360" height="180" src="https://www.youtube.com/embed/${data4[1].video.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <!--<p>https://www.youtube.com/embed/${data4[0].video.videoId}</p>-->
            </div>
          <div class="carousel-item">
          <!--  <img src=${data4[1].video.thumbnails[0].url}  class="d-block w-100" alt="...">-->
            <iframe width="360" height="180" src="https://www.youtube.com/embed/${data4[2].video.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="360" height="180" src="https://www.youtube.com/embed/${data4[3].video.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           
            <!-- <p>https://www.youtube.com/embed/${data4[1].video.videoId}</p>-->
          </div>
          <div class="carousel-item">
            <!--<img src=${data4[2].video.thumbnails[0].url}  class="d-block w-100" alt="...">-->
            <iframe width="360" height="180" src="https://www.youtube.com/embed/${data4[4].video.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="360" height="180" src="https://www.youtube.com/embed/${data4[5].video.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            <!--<p>https://www.youtube.com/embed/${data4[2].video.videoId}</p>-->
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>`


        
        }catch(error){
        console.log(error)
    }
} 




BTNBUSCAR.addEventListener("click", Mostrar)