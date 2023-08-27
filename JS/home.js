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

// comment section

    
let com=document.getElementById('com')




com.addEventListener('click',function name(params) {
    
const commentContainer = document.getElementById('allComments');
document.getElementById('addComments').addEventListener('click', function (ev) {
   addComment(ev);
});

function addComment(ev) {
    let commentText
    let wrapDiv
    const textBox = document.createElement('div');
    const replyButton = document.createElement('button');
    replyButton.className = 'reply';
    replyButton.innerHTML = 'Reply';
    const likeButton = document.createElement('button');
    likeButton.innerHTML = 'Like';
    likeButton.className = 'likeComment';
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'deleteComment';
    wrapDiv = document.createElement('div');
    wrapDiv.className = 'wrapper';
    wrapDiv.style.marginLeft = 0;
    commentText = document.getElementById('newComment').value;
    document.getElementById('newComment').value = '';
    textBox.innerHTML = commentText;
    wrapDiv.append(textBox, replyButton, likeButton, deleteButton);
    commentContainer.appendChild(wrapDiv);
    
}


// like and reply

function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}
document.getElementById('allComments').addEventListener('click', function (e) {
    if (hasClass(e.target, 'reply')) {
        const parentDiv = e.target.parentElement;
        const wrapDiv = document.createElement('div');
        wrapDiv.style.marginLeft = (Number.parseInt(parentDiv.style.marginLeft) + 15).toString() + 'px';
        wrapDiv.className = 'wrapper';
        const textArea = document.createElement('textarea');
        textArea.style.marginRight = '20px';
        const addButton = document.createElement('button');
        addButton.className = 'addReply';
        addButton.innerHTML = 'Add';
        const cancelButton = document.createElement('button');
        cancelButton.innerHTML = 'Cancel';
        cancelButton.className='cancelReply';
        wrapDiv.append(textArea, addButton, cancelButton);
        parentDiv.appendChild(wrapDiv);
    } else if(hasClass(e.target, 'addReply')) {
        addComment(e);
    } else if(hasClass(e.target, 'likeComment')) {
         const likeBtnValue = e.target.innerHTML;
         e.target.innerHTML = likeBtnValue !== 'Like' ? Number.parseInt(likeBtnValue) + 1 : 1;
    } else if(hasClass(e.target, 'cancelReply')) {
        e.target.parentElement.innerHTML = '';
    } else if(hasClass(e.target, 'deleteComment')) {
        e.target.parentElement.remove();
    }
});



  function setOnLocalStorage () {
    localStorage.setItem('template', document.getElementById('allComments').innerHTML);
}


})

const commentContainer = document.getElementById('allComments');
document.getElementById('addComments').addEventListener('click', function (ev) {
   addComment(ev);
});

function addComment(ev) {
    let commentText
    let wrapDiv
    const textBox = document.createElement('div');
    const replyButton = document.createElement('button');
    replyButton.className = 'reply';
    replyButton.innerHTML = 'Reply';
    const likeButton = document.createElement('button');
    likeButton.innerHTML = 'Like';
    likeButton.className = 'likeComment';
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'deleteComment';
    wrapDiv = document.createElement('div');
    wrapDiv.className = 'wrapper';
    wrapDiv.style.marginLeft = 0;
    commentText = document.getElementById('newComment').value;
    document.getElementById('newComment').value = '';
    textBox.innerHTML = commentText;
    wrapDiv.append(textBox, replyButton, likeButton, deleteButton);
    commentContainer.appendChild(wrapDiv);
    
}


// like and reply

function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}
document.getElementById('allComments').addEventListener('click', function (e) {
    if (hasClass(e.target, 'reply')) {
        const parentDiv = e.target.parentElement;
        const wrapDiv = document.createElement('div');
        wrapDiv.style.marginLeft = (Number.parseInt(parentDiv.style.marginLeft) + 15).toString() + 'px';
        wrapDiv.className = 'wrapper';
        const textArea = document.createElement('textarea');
        textArea.className='z'
        const addButton = document.createElement('button');
        addButton.className = 'addReply';
        addButton.innerHTML = 'Add';
        const cancelButton = document.createElement('button');
        cancelButton.innerHTML = 'Cancel';
        cancelButton.className='cancelReply';
        wrapDiv.append(textArea, addButton, cancelButton);
        parentDiv.appendChild(wrapDiv);
    } else if(hasClass(e.target, 'addReply')) {
        addComment(e);
    } else if(hasClass(e.target, 'likeComment')) {
         const likeBtnValue = e.target.innerHTML;
         e.target.innerHTML = likeBtnValue !== 'Like' ? Number.parseInt(likeBtnValue) + 1 : 1;
    } else if(hasClass(e.target, 'cancelReply')) {
        e.target.parentElement.innerHTML = '';
    } else if(hasClass(e.target, 'deleteComment')) {
        e.target.parentElement.remove();
    }
});



  function setOnLocalStorage () {
    localStorage.setItem('template', document.getElementById('allComments').innerHTML);
}

