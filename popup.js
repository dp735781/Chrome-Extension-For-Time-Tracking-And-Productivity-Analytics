chrome.storage.local.get("timeData", function(result){

let data = result.timeData || {};

let div = document.getElementById("data");

for(let site in data){

let seconds = Math.floor(data[site] / 1000);

div.innerHTML += `<p>${site} : ${seconds} seconds</p>`;

}

});
