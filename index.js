const Generate = () => {
    let id = document.getElementById('text').value

    let answer = id.split('/')[5];
    console.log(answer)

    if (answer == undefined) {
        document.getElementById('error').style.display = "flex";
    } else {
        document.getElementById('answer').value = answer;
        document.getElementById('error').style.display = "none";
    }
}

const Copy = () => {
    // Get the text field
    var copyText = document.getElementById('answer');

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    alert("Copied to Clipboard")
}

const Clear = () => {
    document.getElementById('answer').value = " ";
    document.getElementById('text').value = " "
}