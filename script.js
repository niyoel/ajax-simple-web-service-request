(() => {

    const reqListener = response => {
        let temp = JSON.parse(response.currentTarget.response);

        document.getElementById('quote').innerHTML = temp.quote
        document.getElementById('author').textContent = temp.author
        document.getElementById('image').src = temp.photo
        document.getElementById('source').href = temp.permalink

    };
    const loadData = () => {
        const req = new XMLHttpRequest();
        req.onload = reqListener;
        req.open("get", "https://thatsthespir.it/api", true);
        req.send();
    };
    window.onload = () => {
        const loadButton = document.getElementById("load");
        loadButton.onclick = loadData;
    };
    loadData()
})();