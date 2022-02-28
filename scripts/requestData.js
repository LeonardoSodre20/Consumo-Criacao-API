const url = `https://rickandmortyapi.com/api/character`

const containerData = document.querySelector('[data-container-items="items"]')

async function getDataAPI() {

    try{
        const response = await fetch(url);
        console.log(response)

        const data = await response.json()
        console.log(data)
        
        showData(data)
        
    }
    catch(error){
        console.error(error)
    }
}


getDataAPI()

function showData(data) {

    data.results.reduce((accumulator, {id,name,gender}) => {
        accumulator += `
            <div class="container-card">
                <div class="container-img">
                    <img src="https://rickandmortyapi.com/api/character/avatar/${id}.jpeg" "alt="image-character"></img>
                </div>
                <li class="topics-characters">ID: ${id}</li>
                <li class="topics-characters">Nome: ${name}</li>
                <li class="topics-characters">Gênero: ${gender}</li>
            </div>

        `
        return containerData.innerHTML = accumulator
    },'')

    

    }


