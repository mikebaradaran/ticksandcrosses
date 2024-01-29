const txtName = document.getElementById("name");
const txtMessage = document.getElementById("message");
const divMessages = document.getElementById("messages");

txtMessage.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    sendMessage();
  }
});

function displayData(data) {
  let messages = "<table border=1>";

  data.forEach((d) => {
    messages += `<tr><td>${d.name}</td><td>${d.body}</td></tr>`;
  });

  divMessages.innerHTML = messages + "</table>";
}
//-------------------------------------------------------------
const socket = io("https://ticksncrosses.glitch.me");
socket.on("connection");

socket.on("message", (data) => {
  displayData(data);
});

const sendMessage = () => {
  let msg = {
    name: txtName.value,
    body: txtMessage.value,
  };
  socket.emit("message", msg);
  txtMessage.focus();
};

// ---------- Emojis ---------------------------------
function emojiClick(e) {
  txtMessage.value += e.innerHTML;
}

let emojis = [
  "👍",
  "😊",
  "🍕",
  "🍵",
  "📑",
  "✅",
  "❌",
  "🍔",
  "😕",
  "🎉",
  "❤️",
  "🅰",
  "🅱",
  "🆗",
  "1️",
  "2️",
  "3️",
  "4️",
  "5️",
];
var res = "";
emojis.forEach((e, i) => {
  res += `<span class='emoji' onClick="emojiClick(this)">${e}</span>`;
});
document.getElementById("emojis").innerHTML = res;
