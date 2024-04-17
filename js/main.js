//Clear Input Field on Page Reload
window.onload = function() {
    document.querySelector('#month-select').value = 'default'
};


document.querySelector('#month-select').addEventListener('change', apiRequest)

async function apiRequest(){
    const flowerName = document.querySelector('#month-select').value
    try {
        const response = await fetch(`https://hilarious-pantyhose-fish.cyclic.app/api/${flowerName}`)
        const data = await response.json()
        const imgContainer = document.querySelector('.img-container');
        
        imgContainer.classList.remove('hidden');
        document.querySelector('img').src = data.image
        document.querySelector('#flowerName').innerText = 'Name: ' + data.flower
        document.querySelector('#botName').innerText = 'Botonaical Name: ' + data.botanicalname
        document.querySelector('#symbolism').innerText = 'Symbolizes: ' + data.symbolism
    }
    catch(error) {
        console.log(error);
    }
}