const nameDisplayer = document.getElementById("certiName");

let certificateUser = prompt("Name: ");

if (certificateUser.trim() != null) {
  nameDisplayer.innerText = certificateUser.trim();
}