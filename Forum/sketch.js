const database = firebase.database(). ref();
const messageElement = document.getElementById("fname");
const button = document.getElementById("Submitbutton");
button.addEventListener("click",updateDB);

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