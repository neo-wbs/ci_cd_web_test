// ============================================================
// app.cjs – Test-Hilfsdatei (CommonJS, nur für Jest/Node.js)
// ============================================================
// WICHTIG: Diese Datei ist CommonJS.
//   ✅ require() / module.exports erlaubt
//   ❌ import/export NICHT erlaubt
//   ❌ import.meta NICHT verfügbar
//
// Warum eine separate Datei?
//   Jest nutzt standardmäßig CommonJS (require).
//   app.js ist ein ES Module (import/export) für Vite.
//   Beide Systeme sind nicht direkt kompatibel.
//   → Lösung: Shared-Logik hier duplizieren, ohne Browser-/Vite-Abhängigkeiten.
// ============================================================

// Statischer App-Name – kein import.meta.env hier (kein Vite, kein Browser)
const APP_NAME = 'ci_cd_web_test';

const messages = [
  `${APP_NAME}: Pipeline läuft! ✅`,
  'Tests bestanden! 🧪',
  'Deploy bereit! 🚀',
  'CI/CD läuft! ⚙️',
  'Code ist sauber! 💚'
];

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function validateEmail(email) {
    if (!email || typeof email !== 'string') return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function formatVersion(major, minor, patch) {
    if (typeof major !== 'number' || typeof minor !== 'number' || typeof patch !== 'number') {
        throw new Error('All version parts must be numbers');
    }
    return `v${major}.${minor}.${patch}`;
}

// CJS-Export – macht die Funktionen für require() in Tests verfügbar
module.exports = { getRandomMessage, validateEmail, formatVersion, messages };
