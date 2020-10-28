const api_url = (pics,x) => `https://api.unsplash.com/search/photos/?client_id=Ge2Q5H5C4emilMpLEdcc_Rct0-tBf0UVTnlDJw9gxAo&query=${pics}&page=${x}`;

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");
document.getElementById("loadmore").style.display="none";
    
    

async function getData(pics,x){
    const resp = await fetch(api_url(pics,x));
    const respData = await resp.json();
    //console.log(respData);
    respData.results.forEach(pic => {
        const imageEl = document.createElement("div");
        imageEl.classList.add("image");
        imageEl.innerHTML = `<img src = "${pic.urls.regular}"/> 
        <div>
        <p>${pic.user.name}</p>
        </div>`;
        console.log(pic.user.name)
        main.appendChild(imageEl);    
    });
    document.getElementById("loadmore").style.display="block";

}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    main.innerHTML="";
    const pics = search.value;
    getData(pics,1);
})
let y=0;
function loadmore(){
    y++;
    const pics = search.value;
    getData(pics,y);
}