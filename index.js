let emotionRadio = document.getElementById("emotion-radios")

function getEmotionsArray(cats){
    const emotionsArray = []
    // we want to iterate(access each element one by one) using the for loop to iterate through the cats
    for (let i = 0; i < cats.length; i++){
        // this for loop will iterate through the cats emotionsTags
        for (let j=0; j < cats[i].emotionTags.length; j++){
            // and the emotionTags will be pushed one by one to the emotionArray
                emotionsArray.push(cats[i].emotionTags[j])
        }
    }
console.log(emotionsArray)
}

function getEmotionRadio(cats){
    let radioItems =''
    const emotions = getEmotionsArray(cats)
    for(let emotion of emotions){
        // so we want to loop through emotions and update the radioItems
        radioItems += `<p>${emotion}</p>`
    
    radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
                type="radio"
                id="${emotion}"
                value="${emotion}"
                name="emotions"
                >
        </div>
        ` 
    }
    // outside the for of code block we want to render out our emotions
    emotionRadios.innerHTML = radioItems
}


