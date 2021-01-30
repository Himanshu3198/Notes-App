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
    let dateformat=`${current_date}/${month}/${year}`
        let myobj={
            title:addtitle.value,
            text:addtxt.value,
            setdate:dateformat,
        }
    notesObj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";
    addtitle.value="";
    
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
                <button id="contentedit" onclick="editFunction()" class="btn btn-primary">Edit Note</a>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</a>
            </div>
        </div>`;
        



    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show add something what happen today`;
    }

}

function editFunction(){
    
    document.getElementById("myp").contentEditable=true;
    document.getElementById("myh").contentEditable=true;

    // document.getElementsByClassName("card-text").contentEditable=true;
}

function myFunction1(){
    // document.getElementById("myp").contentEditable=false;
    document.getElementById("myh").contentEditable=false;
}
function myFunction2(){
    document.getElementById("myp").contentEditable=false;
    // document.getElementById("myh").contentEditable=false;
}
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
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputtxt)) {
            element.style.display = "block";

        }
        else {
            element.style.display = "none";
        }
    })
});


