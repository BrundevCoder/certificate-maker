const downloadBtn = document.getElementById("dBtn");
const nameDisplayer = document.getElementById("certiName");

let certificateUser = prompt("Name: ");

if (certificateUser.trim() != null) {
  nameDisplayer.innerText = certificateUser.trim();
}

function saveCertificate() {
  const certificate = document.getElementById("certificate");

  html2canvas(certificate, {
    useCORS: true,
    allowTaint: true,
    scale: 2,
    logging: false,
    backgroundColor: null
  }).then(canvas => {
    let link = document.createElement("a");
    link.download = `${certificateUser}_certificate`;
    link.href = canvas.toDataURL();
    link.click()
  })
}

downloadBtn.addEventListener("click", saveCertificate);