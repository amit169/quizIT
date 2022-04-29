fetch('../data/resources.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function appendData(data) {
    let mainContainer = document.getElementById("myData");
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = 'Name: ' + data[i].providerName + ' ' + data[i].urlLink;
        mainContainer.appendChild(div);
    }
}
