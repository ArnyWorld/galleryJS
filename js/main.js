// let imagesContainer = document.querySelector(".cakeGrid");
// console.log(imagesContainer);
let images = [...document.querySelectorAll('.cakes__images')];

let imagesBig = [...document.querySelectorAll('.cakes__big')];

let imageBig = document.querySelector('#imageBig');

// imagesContainer.addEventListener("click",imageSelected)

// function imageSelected(e){
//      image.setAttribute("src",e.target.src)
     
//      image.classList.add("cakes__big--show");
//      console.log(image);
//     }



// console.log(images);

/** con animación*/
images.forEach(image =>{
    image.addEventListener("click",(e)=>{
        console.log(Object.values(e.target.dataset));
        // imagesBig[e.target.dataset];
        console.log(imagesBig[Number(Object.values(e.target.dataset))]);
        imagesBig[Number(Object.values(e.target.dataset))].classList.add("cakes__big--show")
        clearShow(Number(Object.values(e.target.dataset)));
    })
})

/* Sin animación*/
// images.forEach(image =>{
//     image.addEventListener("click",(e)=>{
//         let recurso = e.target.src;
//         console.log(recurso);
//         imageBig.setAttribute("src",recurso);
//     })
// })


function clearShow(id){
    imagesBig.forEach((image, index)=>{
        if(index!=id){
            image.classList.remove("cakes__big--show");
        }
    })
}