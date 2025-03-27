const messages = [
    "🌸 Ти яскравіша за сонце!",
    "💖 У тебе чудова усмішка!",
    "🎉 Ти особлива, ніколи не забувай про це!"
];

function changeMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("message").innerText = messages[randomIndex];
}

setInterval(changeMessage, 3000);