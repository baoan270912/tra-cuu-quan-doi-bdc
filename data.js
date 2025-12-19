if (!localStorage.getItem("thiSinh")) {
  localStorage.setItem("thiSinh", JSON.stringify([]));
}

function getThiSinh() {
  return JSON.parse(localStorage.getItem("thiSinh"));
}

function saveThiSinh(data) {
  localStorage.setItem("thiSinh", JSON.stringify(data));
}
