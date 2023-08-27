// greeting user by the name

let namee=document.getElementById('name')
let test=document.getElementById("test")
let b=document.getElementById('but');

b.addEventListener('click',function () {
  
  let ve=alert('Congrats '+ namee.value+"," +' You Are Now A Member')

  let greet=document.createElement('h5')
  greet.innerText=('Hello '+ namee.value)
  test.appendChild(greet)

  localStorage.setItem(namee.value)
})

