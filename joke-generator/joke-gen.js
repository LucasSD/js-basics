jokeBtn = document.getElementById("joke-btn")


function genJoke() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random')
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(this.responseText)
            document.getElementById("joke").innerHTML = data.value
            console.log(data.value)
        } else {
            document.getElementById("joke").innerHTML = "Joke request failed, please click again."
        }
    }
    xhr.send()
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = genJoke;
}

jokeBtn.addEventListener("click", genJoke)
document.addEventListener("DOMContentLoaded", genJoke)
