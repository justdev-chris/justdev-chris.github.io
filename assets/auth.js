// javascript for stupid password protected sites since yall tryna spy on me lol
const dastupidsitethatspasswordprotected = window.location.pathname;
window.location.href = '/login.html?redirect=${encodeURIComponent(dastupidsitethatspasswordprotected)}';

