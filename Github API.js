var form = document.getElementsByClassName("Form");
var submit = document.getElementById("submit");
var Result = document.getElementById("result");
var Repos = document.getElementById("repos");



submit.addEventListener('click',function(e){
    e.preventDefault();
    var search=document.getElementById("search").value

fetch("https://api.github.com/users/"+search)
.then((result) => result.json()) // brackets around result why
.then((data)=>{
    console.log(data)
    Result.innerHTML = `
    <img style="height:150px;
                grid-column-start:1;
                grid-column-end:3; 
                display:block; 
                border-radius:90px; 
                border: 5px solid black; 
                margin:50px auto;
                background-color:black;" 
                src="${data.avatar_url}">

    <h2 style="font-family: 'Courier New', Courier, monospace;
               grid-column-start:1;
               text-align:center;">Followers : ${data.followers}</h2>

    <h2 style="font-family: 'Courier New', Courier, monospace;
               grid-column-start:2;
               text-align:center; ">Following : ${data.following}</h2>
               <br><br>   
    `
    Repos.innerHTML = `
        <a style="font-family: 'Courier New', Courier, monospace;
        text-decoration:none;
        color:black;
        text-align:center;"
        href="https://github.com/${search}?tab=repositories"
        target="_blank">
        <h2>Respositories : ${data.public_repos}</h2></a>
        `
    fetch("https://api.github.com/users/"+search+"/repos")
    .then((result) => result.json())
    .then((data) =>{
        
        for(var i=0;i<data.length;i++){
        Repos.innerHTML += `
        <a style="display:block; 
                  text-decoration:none;
                  font-family: 'Courier New', Courier, monospace;
                  text-align:center;
                  font-size: larger;
                  color:black;
                  line-height:1.75;
                  font-weight:600;"
                  href="https://github.com/${search}/${data[i].name}"
                  target="_blank"
                  <h2>${data[i].name}</h2></a>
        `}

        
    })
})   
})  


//Media Query in JS

// function myFunction(x) {
//     if (x.matches) { // If media query matches
//             const currentColumns = window.getComputedStyle(Result).gridTemplateColumns;

//             // Split the current column values into an array
//             const columnsArray = currentColumns.split(' ');

//             // Remove the last column from the array
//             columnsArray.pop();

//             // Update the grid-template-columns property with the modified array
//             Result.style.gridTemplateColumns = columnsArray.join(' ');
//     }
//     else{
//         Result.style.gridTemplateColumns=2
//     }
//   }
  
//   // Create a MediaQueryList object
//   var x = window.matchMedia("(max-width: 450px)")
  
//   // Call listener function at run time
//   myFunction(x);
  
// //   Attach listener function on state changes
//   x.addEventListener("change", function() {
//     myFunction(x);
//   });
