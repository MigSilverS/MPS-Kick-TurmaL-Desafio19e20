function vote(option) {
    const voteMessage = document.getElementById('voteMessage');
    voteMessage.innerText = `Você votou em: ${option}`;
}

function changeBackgroundColor() {
    const colorPicker = document.getElementById('backgroundColorPicker');
    document.body.style.backgroundColor = colorPicker.value;
}
