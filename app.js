// Einfache App-Logik für unser CI/CD-Lernprojekt

const messages = [
    "Pipeline läuft erfolgreich! ✅",
    "Tests bestanden! 🧪",
    "Deploy bereit! 🚀",
    "CI/CD läuft! ⚙️",
    "Code ist sauber! 💚"
];

function updateStatus() {
    const el = document.getElementById('status-text');
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    el.textContent = randomMsg;
}

// Beim Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
    console.log('App geladen - bereit für CI/CD!');
});