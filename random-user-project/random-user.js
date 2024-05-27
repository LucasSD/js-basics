userBtn = document.getElementById("generate")

function genUser() {
    fetch('https://randomuser.me/api')
        .then((response) => response.json())
        .then(data => {
            const user = document.getElementById("user")
            user.innerHTML = ""
            const firstDiv = document.createElement('div')
            firstDiv.className = "flex justify-between"
            const secondDiv = document.createElement('div')
            secondDiv.className = "flex"
            firstDiv.appendChild(secondDiv)
            user.appendChild(firstDiv)

            const img = document.createElement('img')
            img.className = "w-48 h-48 rounded-full mr-8"
            img.src = data.results[0].picture.large

            secondDiv.appendChild(img) // Append the img to secondDiv

            const thirdDiv = document.createElement('div')
            thirdDiv.className = "space-y-3"

            secondDiv.appendChild(thirdDiv)

            const userData = data.results[0]
            const userDetails = {Name: `${userData.name.first} ${userData.name.last}`,
            Email: userData.email,
            Phone: userData.phone,
            Location: `${userData.location.state}, ${userData.location.country}`,
            Age: userData.dob.age,
            }

            console.log(userDetails)
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        })
}

// This block should be outside the genUser function
if (typeof module !== 'undefined' && module.exports) {
    module.exports = genUser;
}

userBtn.addEventListener("click", genUser)
document.addEventListener("DOMContentLoaded", genUser)
