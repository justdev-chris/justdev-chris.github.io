// --- Advanced Anti-Cheat for UCC ---
const maxClicksPerSecond = 10;
let lastClickTime = Date.now();

// track suspicious global variables/functions
const allowedGlobals = new Set([
  "window", "document", "alert", "console", "Math", "fetch",
  "setTimeout", "setInterval", "clearTimeout", "clearInterval"
]);

// CLICK DETECTION
function handleClick() {
  const now = Date.now();
  const delta = now - lastClickTime;

  if(delta < 1000 / maxClicksPerSecond) {
    alert("Cheating detected! Slow down! 🐾");
    console.warn("Auto-clicker detected!");
    return false; // block click gain
  }

  lastClickTime = now;
  return true;
}

// INJECTED JS / BOOKMARKLET DETECTION
function checkInjectedJS() {
  // check for unexpected globals
  for(let key in window) {
    if(!allowedGlobals.has(key)) {
      alert(`Cheating detected! Suspicious global: ${key}`);
      console.warn(`Suspicious global detected: ${key}`);
    }
  }

  // check for tampered functions (e.g., onclick overrides)
  const suspiciousEvents = ["onclick", "onload", "onmousemove", "onmousedown"];
  suspiciousEvents.forEach(eventName => {
    document.querySelectorAll("*").forEach(el => {
      const handler = el[eventName];
      if(handler && !handler.toString().includes("handleClick")) {
        alert(`Cheating detected! Modified ${eventName} found on element.`);
        console.warn(`Tampered ${eventName} detected on element:`, el);
      }
    });
  });

  // detect dynamically added script tags
  document.querySelectorAll("script").forEach(script => {
    if(!script.dataset.uccexempt) {
      alert("Cheating detected! Unexpected script found.");
      console.warn("Unexpected script detected!", script.src || "inline");
    }
  });
}

// RUN IN INTERVAL
setInterval(checkInjectedJS, 2000);

// HOOK YOUR CLICK BUTTON
document.getElementById("clicker").addEventListener("click", (e) => {
  if(!handleClick()) e.preventDefault();
});