/*const api_key = "live_iSRIpIDGcz7xbDEvu0w2whwiemTunA6qYEKa8fPsjeRDNYIEsvN0R7IYBm3oCfAW";
const base_url = "https://api.thecatapi.com/v1/"

export function fetchBreeds(){
    return fetch(`${base_url}breeds?api_key=${api_key}`)
    .then(response => {
        if(!response.ok){
            throw new Error(response.status);
        }
        return response.json();
    })
}

export function fetchCatByBreed(breedId){
    return fetch(`${base_url}images/search?breed_ids=${breedId}&api_key=${api_key}`)
    .then(response => {
        if(!response.ok){
            throw new Error(response.status);
        }
        return response.json();
    })
}*/
const api_key = "live_iSRIpIDGcz7xbDEvu0w2whwiemTunA6qYEKa8fPsjeRDNYIEsvN0R7IYBm3oCfAW";
const base_url = "https://api.thecatapi.com/v1/";

export function fetchBreeds() {
  return fetch(`${base_url}breeds?api_key=${api_key}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error("Error fetching breeds:", error);
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  return fetch(`${base_url}images/search?breed_ids=${breedId}&api_key=${api_key}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error("Error fetching cat by breed:", error);
      throw error;
    });
}
