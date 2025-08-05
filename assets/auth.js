const isAuthed = localStorage.getItem("catboyAuth");

if (isAuthed !== "yes") {
  window.location.href = "/login";
}
