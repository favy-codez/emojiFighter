import { catsData } from '/data.js'

const emotionRadios = document.getElementById('emotion-radios')

// so we want to add an event listener 
emotionRadios.addEventListener('change', highlightCheckedOption)

function highlightCheckedOption(e){

    console.log(e.target.id)
}

function getEmotionsArray(cats){
    const emotionsArray = []
        
    for (let cat of cats){
        for (let emotion of cat.emotionTags){

            emotionsArray.push(emotion)
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




