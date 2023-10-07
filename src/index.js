import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_iSRIpIDGcz7xbDEvu0w2whwiemTunA6qYEKa8fPsjeRDNYIEsvN0R7IYBm3oCfAW";
import { fetchBreeds, fetchCatByBreed } from './cat-api'

 function createMarkup(catData, breedData){
        return `<img src='${catData.url}' width='350' alt='${breedData.name}'/>
        <div class='textInformation'><h1>${breedData.name}</h1>
        <p>${breedData.description}</p>
        <p><b>Temperament:</b> ${breedData.temperament}</p></div>`
} 

const breedSelect = document.querySelector('.breed-select');
const informationLoader = document.querySelector('.loader');
const selectError = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

window.addEventListener('load', startInit);

function startInit(){
    let breedsData;
    fetchBreeds()
    .then(data => {
        breedsData = data;
        data.forEach(breed => {
            const option = document.createElement('option');
            option.value = breed.id;
            option.textContent = breed.name;
            breedSelect.appendChild(option);

            breedSelect.classList.remove('hidden');
            informationLoader.classList.add('hidden');
          })
    })
    .catch(error => {
        console.log(error);
        selectError.classList.remove('hidden');
        breedSelect.classList.add('hidden');
        informationLoader.classList.add('hidden');
    })

    breedSelect.addEventListener('change', () => {
        const selectBreedId = breedSelect.value;
        informationLoader.classList.remove('hidden');
        catInfo.classList.add('hidden');
        selectError.classList.add('hidden');

        fetchCatByBreed(selectBreedId)
        .then(result => {
            const catData = result[0];
            const breedData = breedsData.find(breed => breed.id === catData.breeds[0].id);

            const markup = createMarkup(catData, breedData);
            catInfo.innerHTML = markup;

            informationLoader.classList.add('hidden');
            catInfo.classList.remove('hidden');
        })
        .catch(error => {
            console.log(error);
            selectError.classList.remove('hidden');
            informationLoader.classList.add('hidden');
        })
    });
}

  
 /* fetchCatByBreed(selectedBreedId)
    .then(function (result) {
      const catData = result[0];
      const breedData = breedsData.find(function (breed) {
        return breed.id === catData.breeds[0].id;
      });

      const markup = createMarkup(catData, breedData);
      catInfo.innerHTML = markup;
      hideLoader();
      displayCatInfo();
    })
    .catch(function (error) {
      console.error(error);
      showSelectError();
      hideLoader();
    });
});*/








    
