const searchInput = document.getElementById('search-input');

// const searchInput2 = document.querySelector('.cards'); /*Nesse caso ele vai pegar o 1º elemento que usa a classe cards: */

// tbm existe o querySelectorAll

const resultArtist = document.getElementById('result-artist')
const resultPlaylist = document.getElementById('result-playlists')

function requestApi(searchTerm){
    const url = `http://localhost:3000/artists?name_like=${searchTerm}` //Isso vai trazer apenas os cantores que tem o nome similar ao que o usuarios esta digitando
        fetch(url)
            .then((response) => response.json()) //é o momento que ele le o JSON
            .then((result) => displayResults(result))//e aqui eu vou trabalhar os dados do JSON
}

function displayResults(result){
    resultPlaylist.classList.add('hidden')
    const artistName = document.getElementById('artist-name')
    const artistImage = document.getElementById('artist-img')

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden')
}

// VERSÃO DO GPT

// function displayResults(result) {
//     resultPlaylist.classList.add('hidden');
    
//     if (result.length === 0) {
//         resultArtist.classList.add('hidden');
//         return;
//     }

//     // Exemplo de como exibir vários artistas
//     const artistContainer = document.getElementById('artist-container');
//     artistContainer.innerHTML = ''; // Limpa o conteúdo anterior

//     result.forEach(element => {
//         const artistName = document.createElement('div');
//         artistName.innerText = element.name;

//         const artistImage = document.createElement('img');
//         artistImage.src = element.urlImg;

//         artistContainer.appendChild(artistName);
//         artistContainer.appendChild(artistImage);
//     });

//     resultArtist.classList.remove('hidden');
// }


// Aqui eu posso usar tabem function() {}
document.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return
    }
    
    requestApi(searchTerm);
})
