const isAuthed = localStorage.getItem("catboyAuth");

if (isAuthed !== "yes") {
  const dastupidsitethatspasswordprotected = window.location.pathname;
  window.location.href = '/login.html?redirect=${encodeURIComponent(dastupidsitethatspasswordprotected)}';
}
