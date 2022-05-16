document.querySelector('#lastUpdate').innerHTML = `Date Modified: ${document.lastModified}`;

let currentDate = new Date();
let Year = currentDate.getFullYear();
document.getElementById("copyright").textContent = Year;
