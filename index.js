import { catsData } from '/data.js'

const emotionRadios = document.getElementById('emotion-radios')
const btn = document.getElementById('get-image-btn')
const gifOption = document.getElementById('gifs-only-option')


btn.addEventListener ("click", getMatchingCatsArray)

function getMatchingCatsArray (){
    // so we created an if statement 
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotions = document.querySelector('input[type="radio"]:checked').value
        console.log(selectedEmotions)
    }
}

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

// we want to render this fxn when the gif checkbox is clicked 
    function getMatchingCatsArray(){
if(document.querySelector('input[type="radio"]:checked')){
    const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
    const isGif = gifOption.checked
/*
Challenge:
1. Use the .filter() and .includes() methods to get 
an array of cats which have the selected emotion
in their emotionTags array. 
2. Store this array in a const and log it out to check
it's working. Think: what would be a good name for the
const?
*/  
}  
}
// }

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