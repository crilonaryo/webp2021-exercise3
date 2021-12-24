export async function fetchImages() {
    const response = await fetch("https://dog.ceo/api/breed/doberman/images/random/60");
    const data = await response.json();
    
    return data.message;

}