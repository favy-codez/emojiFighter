import { catsData } from '/data.js'

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifOption = document.getElementById('gifs-only-option')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal-inner')


getImageBtn.addEventListener('click', renderCat)

// so we want to add an event listener to emotionRadios to help us highlight our option
emotionRadios.addEventListener('change', highlightCheckedOption)

// we add a fxn that adds the styling (highlight) when we click on the radio and also listen for change
function highlightCheckedOption(e){
    // so we want to to remove the styling when we click on another option
    const radios = document.getElementsByClassName("radio")
    document.getElementById(e.target.id).parentElement.classList.remove('highlight')
    for (let radio of radios){
        radio.classList.remove('highlight')
    }

    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}



// we want to return an array of cat objects that matches the users criteria
    function getMatchingCatsArray(){
if(document.querySelector('input[type = "radio"]:checked')){
    const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
    const isGif = gifOption.checked

    const matchingCatsArray = catsData.filter(function(cat){
        if (catsArray.length === 1){
            return catsArray[0]
        }
        else {
            const randomNumber = Math.floor(Math.random() * catsArray.length)
            return catsArray[randomNumber]
        }
})  
console.log(matchingCatsArray)
    }  
}

// we want to return a single cat object selected from the array provided by getMatchingCatsArray
function getSingleCatObject(){

}

// we want t use the cat object provided by getSingleCatObject to create HTML string which will render it to the DOM
function renderCat(){
    const catObject = getSingleCatObject()
    memeModal.innerHTML =
    `<img 
    class="cat-img" 
    alt="${catObject.alt}"
    alt="CAT ALT TEXT"
    >
    `
}

function getEmotionsArray(cats){
    const emotionsArray = []
        
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if(!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}


function renderEmotionsRadios(cats){
        
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
        </div>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)

