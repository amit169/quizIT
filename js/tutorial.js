var file = "../data/tutorial.txt"

    file.addEventListener('change', () => {
    var txtArr = [];
    var fr = new FileReader();
    fr.onload = function() {
        // By lines
        var lines = this.result.split('\n');
        for (var line = 0; line < lines.length; line++) {
            txtArr = [...txtArr, ...(lines[line].split(" "))];
        }
    }
    fr.onloadend = function() {
        console.log(txtArr);
        document.getElementById('output').textContent=txtArr.join("");
    }
    fr.readAsText(file.files[0]);
})

