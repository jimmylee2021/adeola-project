window.addEventListener('scroll', ()=> {
  var header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 0)
})


let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.header-div');

menu.addEventListener('click', ()=>{
   menu.classList.toggle('fa-times')
   navbar.classList.toggle('active')

   window.onscroll = () => {
      menu.classList.remove('fa-time')
      menu.classList.remove('active')
   }
})

// code for chatbot pop up 
let chatPos =  document.getElementById("chat-position");
let chatCon = document.getElementById("chat-container")
let icon =  document.getElementById("icon");

icon.addEventListener('click', ()=> {
  chatCon.classList.toggle('active')
})

window.addEventListener('click', (event)=>{
  if (event.target == chatCon) {
    chatCon.classList.remove('active')
    chatCon.classList.add('icon')
  }
})

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 =  document.getElementById("myBtn-2");

// When the user clicks on the button, open the modal
btn.onclick = function(e) {
   e.preventDefault()
  modal.style.display = "block";
}
btn2.onclick = function(e) {
   e.preventDefault()
  modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
var cancel = document.getElementById("cancel");
cancel.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// code for bot

document.addEventListener("DOMContentLoaded", function() {
  const chatLog = document.getElementById("chat-log");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");

  function autoRespond(message) {
    const responses = {
      "hi": "Hello! How can I assist you today?",
      "help": "Sure, how can I help you?",
      "bye": "Goodbye! Have a great day!"
    };

    const response = responses[message.toLowerCase()] || "I'm sorry, I didn't understand that.";
    displayMessage("Bot", response, "bot-message");
  }

  function displayMessage(sender, message, className) {
    const messageElement = document.createElement("div");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    messageElement.classList.add("message", className);
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight; // Scroll to bottom
  }

  sendBtn.addEventListener("click", function() {
    const userInputValue = userInput.value.trim();
    if (userInputValue !== "") {
      displayMessage("You", userInputValue, "user-message");
      autoRespond(userInputValue);
      userInput.value = "";
    }
  });

  userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      sendBtn.click();
    }
  });
});