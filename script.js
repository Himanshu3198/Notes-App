showNotes();
     
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addtxt");
    let addtitle=document.getElementById("addtitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }


    let date=new Date();
    var current_date=date.getDate();
    const month=date.toLocaleString('default', { month: 'short' });
    const year=date.getFullYear();
    const time=date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

         let dateformat=`${current_date}/${month}/${year}  ${time}`

        let myobj={
            title:addtitle.value,
            text:addtxt.value,
            setdate:dateformat,
        }
    notesObj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";
    addtitle.value="";
   notesObj.reverse(); 
    showNotes();
});
// function to show note from local storage.
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";

   
    notesObj.forEach(function (element, index) {

          
        html += ` <div class="notecard my-2 mx-2 card"  style = "width: 18rem;">
            <div class ="cards" id="card">
            <p class="font-weight-light">${element.setdate}</p>

                <h3 class="card-title class="contentEdit" id="myh"  onfocusout="myFunction1()">${element.title} </h3>
                <p class="card-text" id="myp"  onfocusout="myFunction2()" >${element.text}  </p>
 
                <button id="delete" onclick="deleteNote(${index})" class="btn btn-danger editdelete"><i class="fas fa-trash-alt"></i> </a>

                <button  class="btn btn-primary editdelete  " data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"><i class="fas fa-edit"></i>

                </button>
                 <button id="edit" onclick="editNote(${index})" class="btn btn-success editdelete"><i class="fas fa-save"></i>

                 </a>

              

            </div>
        </div>`;
                    //    <button id="edit" onclick="editNote(${index})" class="btn btn-danger">Edit Note</a>

            //   <button id="edit" onclick="editNote(${index})" class="btn btn-success editdelete">Edit Note</a>

    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show add something what happen today`;
    }

}
function editNote(index) {



    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    // console.log(notesObj[index].title)
    // let addtxt = document.getElementById("addtxt");
    // let addtitle=document.getElementById("addtitle");

    // addtitle.value=notesObj[index].title;

    

    let addtxt = document.getElementById("message-text");
    let addtitle=document.getElementById("titletxt");
    
    let newtitle=addtitle.value;
    let newtext=addtxt.value;
    if(newtitle!=""){
         notesObj[index].title=newtitle;
    }
    if(newtext!=""){
            notesObj[index].text=newtext;

    }
   

    console.log(notesObj[index].title)
    
     

    // notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtitle.value=""
    addtxt.value=""
    showNotes();

}


//  let savebtn= document.getElementById("savebtn");
//     savebtn.addEventListener("onclick",function(e){
//           console.log("this is saveblock");
//         localStorage.setItem("notes", JSON.stringify(notesObj));
//         addtitle.value=""
//         addtxt.value=""
//         showNotes();
//     } )

// function savefuntion(){
//     console.log("this is save block")
//     let notes = localStorage.getItem("notes");
//     if (notes == null) {
//         notesObj = [];
//     } else {
//         notesObj = JSON.parse(notes);
//     }
//     // console.log(notesObj[index].title)
//     // let addtxt = document.getElementById("addtxt");
//     // let addtitle=document.getElementById("addtitle");

//     // addtitle.value=notesObj[index].title;

    

//     // let addtxt = document.getElementById("message-text");
//     // let addtitle=document.getElementById("titletxt");
    
//     // let newtitle=addtitle.value;
//     // let newtext=addtxt.value;
//     // if(newtitle!=""){
//     //      notesObj[index].title=newtitle;
//     // }
//     // if(newtext!=""){
//     //         notesObj[index].text=newtext;

//     // }
   

//     // console.log(notesObj[index].title)
    
     

//     // notesObj.splice(index, 1);
//     localStorage.setItem("notes", JSON.stringify(notesObj));
//     addtitle.value=""
//     addtxt.value=""
//     showNotes();
// }


function deleteNote(index) {



    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
 
     

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));

    showNotes();

}


let search = document.getElementById("searchtxt");
search.addEventListener("input",function(){
    let inputtxt = search.value;
    console.log(inputtxt);
    let notecard = document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function(element){
        let cardtxt = element.getElementsByTagName("h3")[0].innerText;
        //    let cardtxt   element.getElementsByClassName("card-title")[0].innerText;
        if (cardtxt.includes(inputtxt)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
});

let darkMode=false;
// default system setting
if(window.matchMedia('(perfers-color-scheme:dark)').matches){
    darkMode=true;
}

// preference from localStorage
if(localStorage.getItem('theme')=='dark'){
    darkMode=true;
}
else{
    darkMode=false;
}
if(darkMode){
    document.body.classList.toggle('dark');
}

document.addEventListener('DOMContentLoaded',()=>{
let themeToggle=document.getElementById('theme-toggle');

themeToggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    localStorage.setItem('theme',document.body.classList.contains('dark')?'dark':'light');
    if( document.getElementById("theme-toggle").innerHTML==="Light"){
        document.getElementById("theme-toggle").innerHTML="Dark";
     }
     else{
       document.getElementById("theme-toggle").innerHTML="Light";
     }

    localStorage.setItem('theme',document.body.classList.contains('dark')?'dark':'light');


})
})

// let themeToggle=document.getElementById("theme-toggle");
// function myFunction12(){
//     let themeToggle=document.getElementById("theme-toggle");
//     if(themeToggle.innerHTML==="Light"){
//         themeToggle.innerHTML="Dark";
//     }
//     else{
//         themeToggle.innerHTML="Light";   
//     }
// }


