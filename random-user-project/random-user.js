document.addEventListener("DOMContentLoaded", () => {
        const userBtn = document.getElementById("generate");
        userBtn.addEventListener("click", genUser);
        genUser();
});

function fetchUserData() {
        showSpinner()
        return fetch('https://randomuser.me/api')
            .then(response => response.json())
            .then(data => data.results[0])
            .catch(error => {
                    console.error('Error fetching user data:', error);
                    return null;
            });
}

function createUserElement(tag, className, textContent = '') {
        const element = document.createElement(tag);
        element.className = className;
        element.textContent = textContent;
        return element;
}

function displayUserDetails(userDetails) {
        const thirdDiv = createUserElement('div', 'space-y-3');
        Object.entries(userDetails).forEach(([key, value]) => {
                const p = createUserElement('p', 'text-xl');
                const span = createUserElement('span', 'font-bold', `${key}: `);
                p.appendChild(span);
                p.appendChild(document.createTextNode(value));
                thirdDiv.appendChild(p);
        });
        return thirdDiv;
}

function setUserBackground(gender) {
        document.body.style.backgroundColor = gender === "female" ? 'lightblue' : "pink";
}

function genUser() {
        fetchUserData().then(userData => {
                hideSpinner()
                if (!userData) return;

                setUserBackground(userData.gender);

                const user = document.getElementById("user");
                user.innerHTML = "";

                const firstDiv = createUserElement('div', 'flex justify-between');
                const secondDiv = createUserElement('div', 'flex');
                firstDiv.appendChild(secondDiv);
                user.appendChild(firstDiv);

                const img = createUserElement('img', 'w-48 h-48 rounded-full mr-8');
                img.src = userData.picture.large;
                secondDiv.appendChild(img);

                const userDetails = {
                        Name: `${userData.name.first} ${userData.name.last}`,
                        Email: userData.email,
                        Phone: userData.phone,
                        Location: `${userData.location.state}, ${userData.location.country}`,
                        Age: userData.dob.age,
                };

                const thirdDiv = displayUserDetails(userDetails);
                secondDiv.appendChild(thirdDiv);
        });
}

function showSpinner() {
        document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner() {
        document.querySelector('.spinner').style.display = 'none';
}

// Export genUser function if in a module environment
if (typeof module !== 'undefined' && module.exports) {
        module.exports = {genUser, createUserElement};
}
