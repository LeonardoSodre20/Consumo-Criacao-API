const url = "http://localhost:4567/";

async function getContent() {
  try {
    const response = await fetch(url);
    // console.log(response)

    const data = await response.json()

    show(data)
  } catch (error) {
    console.error(error);
  }
}

getContent();

function show(users) {

    let output = ''

    for(let user of users) {
        output += `
            <li>${user.name}</li>
            <li>${user.username}</li>
            <li>${user.email}</li>
        `
    }

    document.querySelector('main').innerHTML = output
}
