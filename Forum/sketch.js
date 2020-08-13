const database = firebase.database().ref();
const messageElement = document.getElementById("fname");
const button = document.getElementById("Submitshadow");
const buttonP = document.getElementById("Add")
button.addEventListener("click",updateDB);
button.addEventListener("click",deleteMessage);
buttonP.addEventListener("click",addForum);
console.log('blah')
function updateDB(event){
    event.preventDefault();
    let message         = messageElement.value;

    messageElement.value  = "";

    console.log(message);

    //Update database here
    let userInput ={
        Message: message,
    };
database.push(userInput);
console.log(userInput);
}

database.on("child_added", addMessagetoBoard); 
let messageContainer = document.querySelector(".allMessages");

function addMessagetoBoard(rowData){
    let row = rowData.val();
    let message = row.Message;
    let pElement = document.createElement('p');
    pElement.innerText = `${message}`;
    messageContainer.appendChild(pElement);
}
 function deleteMessage(Mes){
     let myMessage = document.getElementById("fname");
     let myButton = document.getElementById("Submitbutton")
     myMessage.remove();
     myButton.remove();
 }
 function addForum(){
     let myForum = document.getElementById("box")
     let myForum_prime = myForum.cloneNode(true)
     document.body.appendChild(myForum_prime)
     let addButtons = document.getElementsByClassName('addButton')
     let counter = 0;
     for(let element of addButtons){
         if(counter!=0){
             element.style.visibility = "hidden";
         }
         counter++;
     }
 }
 