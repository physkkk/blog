/* Initialize and invoke a the greetUser function
to assign user's name to a constant and print out
a greeting. */
//test
// document.getElementById("myForm").addEventListener("submit", function(event){


//   prompt('inter your name')
//   event.preventDefault();
// });


// let n=document.getElementById("name")


// function greetUser() {
//   const name = prompt("What is your name?");
//   console.log("Hello ," + name + "! How are you?");
// }

// greetUser();





// let Name_1 = prompt("Enter your Name");

// if (  Name_1 == "Alghalia"){
//    window.alert("Welcome To Our Page " +  Name_1);
//     let p=document.createElement("h5")
//     p.innerText="Hello " + Name_1
//     let z=document.getElementById('test')
//     z.appendChild(p)
// }

// else{
//     let p=document.createElement("h5")
//     p.innerText="Hello " + Name_1
//     let z=document.getElementById('test')
//     z.appendChild(p)
// }






 Swal.fire({
    title: 'Do you want to save the changes?',
     showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
     if (result.isConfirmed) {
      Swal.fire('hello', namee)
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }})


















//   let namee=document.getElementById('name')

//   let username = localStorage.getItem("username");

// if (username) {
//   let welcomeMessage = document.getElementById("welcomeMessage");
//   welcomeMessage.textContent = "Welcome To Our Page " + username + "!";
// } else {
//   window.location.href = "log.html";
// }









