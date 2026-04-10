const broken = 

const messages = [
    'Pipeline läuft erfolgreich! ✅',
    'Tests bestanden! 🧪',
    'Deploy bereit! 🚀',
    'CI/CD läuft! ⚙️',
    'Code ist sauber! 💚'
];

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function updateStatus() {
    const el = document.getElementById('status-text');
    if (el) {
        el.textContent = getRandomMessage();
    }
}

function validateEmail(email) {
    if (!email || typeof email !== 'string') return false;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function formatVersion(major, minor, patch) {
    if (typeof major !== 'number' || typeof minor !== 'number' || typeof patch !== 'number') {
        throw new Error('All version parts must be numbers');
    }
    return `v${major}.${minor}.${patch}`;
}

// Browser-Umgebung prüfen bevor DOM-Events registriert werden
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('App geladen - bereit für CI/CD!');
        updateStatus(); //ergänzt nach Lint-Error
    });
}

// Für Tests exportieren (Node.js-Umgebung)
if (typeof module !== 'undefined') {
    module.exports = { getRandomMessage, validateEmail, formatVersion, messages };
}