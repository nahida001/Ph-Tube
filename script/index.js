function loadcategories(){
    //fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    
    //convert promise to json

    .then((res) => res.json())
    //send data to display category
    .then((data) => diplaycategories(data.categories))
    
}
    
function diplaycategories(categories){
   
    //get the container
    const categorycontainer = document.getElementById("catagory-container");

    //loop operation on Array
    for(let cat of categories){
        //console.log(cat)
    //create element
    const categoryDiv = document.createElement("div");
   
    categoryDiv.innerHTML = `
    <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>

    `;
    //append the element

    categorycontainer.append(categoryDiv);
}

}

function loadvedios(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayvideo(data.videos))
}
const displayvideo =(videos)=>{
    const video_container=document.getElementById("video-container");

    videos.forEach((video) => {
        console.log(video)
        const videocard=document.createElement("div")
        videocard.innerHTML=`
         <div class="card bg-base-100 shadow-sm">
  <figure class="relative">
    <img class="w-full h-[150px] object-cover" 
      src="${video.thumbnail}"
      alt="Shoes" />
      <span class="absolute bottom-2 right-2 text-white bg-black px-2 text-sm rounded">3hrs 56 min ago</span>
  </figure>
  <div class="flex gap-3 px-2 py-5">
   <div class="profile">
      <div class="avatar">
        <div class="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
        <img src="${video.authors[0].profile_picture}" 
        />
  </div>
</div>
   </div>

  <div class="intro">
    <h1 class="text-lg font-semibold pb-1">${video.title
}</h1>
    <p class="text-sm text-[#171717B3] flex gap-2">${video.authors[0].
profile_name} <img class="w-5 h-5" src="assets/icons8-verified-48 (1).png" alt="">
</p>
<p class="text-sm text-[#171717B3]">${video.others.views} Views</p>
  </div> 
  </div>
</div>
        
        `

        video_container.append(videocard)
    });
}

loadcategories();
loadvedios();