
const api_key = "live_iSRIpIDGcz7xbDEvu0w2whwiemTunA6qYEKa8fPsjeRDNYIEsvN0R7IYBm3oCfAW";
const base_url = "https://api.thecatapi.com/v1/";

export async function fetchBreeds() {
  try {
    const response = await fetch(`${base_url}breeds?api_key=${api_key}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching breeds:", error);
    throw error;
  }
}

export async function fetchCatByBreed(breedId) {
  try {
    const response = await fetch(`${base_url}images/search?breed_ids=${breedId}&api_key=${api_key}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cat by breed:", error);
    throw error;
  }
}
