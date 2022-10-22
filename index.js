import { catsData } from '/data.js'

const emotionRadios = document.getElementById('emotion-radios')
const btn = document.getElementById('get-image-btn')


btn.addEventListener ("click", getMatchingCatsArray)
function getMatchingCatsArray (e){
    const checkedRadio = document.querySelector('input[type = "radio"]:checked')
    console.log(checkedRadio.value)
}


// so we want to add an event listener to emotionRadios to help us highlight our option
emotionRadios.addEventListener('change', highlightCheckedOption)

// we add a fxn that adds the styling (highlight) when we click on the radio and also listen for change
function highlightCheckedOption(e){
    // so we want to to remove the styling when we click on another option
    const radios = document.getElementsByClassName("radio")
    document.getElementById(e.target.id).parentElement.classList.remove('highlight')
    for(radio of radios){
    } 

    document.getElementById(e.target.id).parentElement.classList.add('highlight')
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




