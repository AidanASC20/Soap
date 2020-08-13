const database = firebase.database().ref();
const messageElement = document.getElementById("fname");
const button = document.getElementById("Submitshadow");
button.addEventListener("click",updateDB);
button.addEventListener("click",deleteMessage)
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
 