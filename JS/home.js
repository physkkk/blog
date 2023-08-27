//comment and like functions

let c= document.getElementById('com')
let lik=document.getElementById('icon-like')
let dis=document.getElementById('icon-dislike')
let num=document.getElementById('like-label')
let b=num
//adding likes - dislikes functions

const likeButton = document.getElementById('like-button');
const likeCountElement = document.getElementById('like-count');
let likeCount = 110;

// Listen for clicks on the like button 
likeButton.addEventListener('click', () => {
  likeCount++;
  likeCountElement.innerText = likeCount;



savedata2()
});


const dislikeButton = document.getElementById('dislike-button');
const dlikeCountElement = document.getElementById('dislike-count');
let dslikeCount= 32;

// Listen for clicks on the like button
dislikeButton.addEventListener('click', () => {
 dslikeCount++;
 dlikeCountElement.innerText=dslikeCount;
 

 savedata()
});




//local storage function



function savedata() {
localStorage.setItem('data',dlikeCountElement.innerText);


}


function showtask(params) {
    dlikeCountElement.innerText=localStorage.getItem('data')
    
}

showtask()



function savedata2() {
    localStorage.setItem('data2',likeCountElement.innerText);
    
    
    }
    
    
    function showtask2(params) {
        likeCountElement.innerText=localStorage.getItem('data2')
        
    }
    
    showtask2()


//    for (let i = 1; i<=5; i++) [
//     console.log("hello loop", i)
//    ]

//    let l=0;
//    while (l<20) {

//     console.log(" loop")

//     l++
//    }