  function sendText() {
    const inputText = document.getElementById("box-to-send"); 
    if(inputText.value != ""){
      const text = document.createElement("p");
      text.classList.add("text");
      text.innerText = inputText.value;

      const name = document.createElement("span");
      name.classList.add("name");
      name.innerText = "Você:"

      inputText.value = "";

      const sentText = document.createElement("div");
      sentText.classList.add("sent-msg");

      sentText.appendChild(name);
      sentText.appendChild(text);

      const chat = document.getElementById("chat");
      chat.appendChild(sentText);

      console.log(sentText);

      gotoBottom();
    }

  };

  function gotoBottom() {
    var element = document.getElementById("chat");
    element.scrollTop = element.scrollHeight - element.clientHeight;
  }
  
  window.addEventListener("load", function (event) {
    gotoBottom("chat");
  });



    
