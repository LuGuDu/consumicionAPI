const aplicacion = document.querySelector('.container')
const getUrl = new URLSearchParams(window.location.search) //desglosa la url que recibe 

id = getUrl.get('id')
console.log(id)

const url = `https://jsonplaceholder.typicode.com/users/${id}`

fetch(url)
.then(response => response.json())
.then(data => {
        const name = document.createElement('p')
        name.innerHTML = data.name
        const email = document.createElement('p')
        email.innerHTML = data.email
        aplicacion.appendChild(name)
        aplicacion.appendChild(email)
})
.catch(error => console.log(error))