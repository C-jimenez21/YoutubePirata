const SEARCHBAR = document.getElementById("searchBar")

//genera una url segun la busqueda del usuario en la caja de texto -- MEJORAR: Que admita busquedas con espacios
const generateUrl = () => {
	let urlModificada = 'https://youtube138.p.rapidapi.com/search/?q='+ (SEARCHBAR.value).split(" ").join("%20") +'&hl=en&gl=US'
	console.log(urlModificada)
	return urlModificada
}


//const url = 'https://youtube138.p.rapidapi.com/search/?q=despacito&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2b845d4d08msha779bb254daf24ap18ee37jsn870fdfc4a2d9', //2b845d4d08msha779bb254daf24ap18ee37jsn870fdfc4a2d9
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

//Peticion al servidor sobre la informacion del la busqueda USANDO el apartado de EXPLORE/SEARCH
export const getData = async () =>{
    try {
        const response = await fetch(generateUrl(), options);
        const result = await response.json();
        return result.contents[0].video //direcciom especifica para buscar la informacion importante
    } catch (error) {
	console.error(error);
}
}

//extraccion del ID
export const getID = async () =>{
    try {
        const response = await fetch(generateUrl(), options);
        const result = await response.json();
        return result.contents[0].video.videoId //direcciom especifica para buscar la informacion importante
    } catch (error) {
	console.error(error);
}
}


//Peticion al servidor sobre la informacion del la busqueda USANDO el apartado de Video Details

export const getDataFromDetails = async () =>{
    try {
		let id = await getID()
        const response = await fetch('https://youtube138.p.rapidapi.com/video/details/?id='+id+'&hl=en&gl=US', options);
        const result = await response.json();
        return result //direcciom especifica para buscar la informacion importante
    } catch (error) {
	console.error(error);
}
}

//Peticion al servidor sobre la informacion del la busqueda USANDO el apartado de Video Comments

export const getDataFromComments = async () =>{
    try {
		let id = await getID()
        const response = await fetch('https://youtube138.p.rapidapi.com/video/comments/?id='+id+'&hl=en&gl=US', options);
        const result = await response.json();
        return result.comments //direcciom especifica para buscar la informacion importante
    } catch (error) {
	console.error(error);
}
}

//Peticion al servidor sobre la informacion del la busqueda USANDO el apartado de Video Related

export const getDataFromRelated = async () =>{
    try {
		let id = await getID()
        const response = await fetch('https://youtube138.p.rapidapi.com/video/related-contents/?id='+id+'&hl=en&gl=US', options);
        const result = await response.json();	
        return result.contents //direcciom especifica para buscar la informacion importante
    } catch (error) {
	console.error(error);
}
}
