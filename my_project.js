let joke=document.getElementById('joke')
let fact=document.getElementById('fact')
let aqi=document.getElementById('AQI')
let dictionary=document.getElementById('dict')
let answer=document.getElementById('answer')
joke.addEventListener('click',()=>{
    let f=fetch('https://api.api-ninjas.com/v1/jokes?limit=1',{headers: { 'X-Api-Key': 'J+WAqyXoAQ1u6D77rVQbuQ==OGfLxMqBF74CUV2g'}})
    f.then((response)=>{
        
        return response.json()
    }).then((data)=>{
        console.log(data[0].joke)
        answer.textContent='JOKE: '+data[0].joke
    }).catch(()=>{
        answer.innerText=`SORRY, CAN'T PROCESS YOUR REQUEST AT THE MOMENT`
    })
})
fact.addEventListener('click',()=>{
    let f=fetch('https://api.api-ninjas.com/v1/facts?limit=1',{headers: { 'X-Api-Key': 'J+WAqyXoAQ1u6D77rVQbuQ==OGfLxMqBF74CUV2g'}})
    f.then((response)=>{return response.json()
    }).then((data)=>{
        answer.textContent='FACT: '+data[0].fact
    }).catch(()=>{answer.innerText=`SORRY, CAN'T PROCESS YOUR REQUEST AT THE MOMENT`})
})
dictionary.addEventListener('click',()=>{
    p=prompt('ENTER THE WORD...')
    let f=fetch(`https://api.api-ninjas.com/v1/dictionary?word=${p}`,{headers: { 'X-Api-Key': 'J+WAqyXoAQ1u6D77rVQbuQ==OGfLxMqBF74CUV2g'}})
    f.then((response)=>{
        console.log(response.json)
        return response.json()
    }).then((data)=>{
        answer.textContent='MEANING: '+data.definition
    }).catch(()=>{
        answer.innerText=`SORRY, CAN'T PROCESS YOUR REQUEST AT THE MOMENT`
    })
})
aqi.addEventListener('click',()=>{
    p=prompt('ENTER THE NAME OF YOUR CITY')
    let f=fetch(`https://api.api-ninjas.com/v1/airquality?city=${p}`,{headers: { 'X-Api-Key': 'J+WAqyXoAQ1u6D77rVQbuQ==OGfLxMqBF74CUV2g'}})
    f.then((response)=>{
        return response.json()
    }).then((data)=>{
        answer.textContent='AIR QUALITY INDEX IS: '+data.overall_aqi
    }).catch(()=>{answer.innerText=`SORRY, CAN'T PROCESS YOUR REQUEST AT THE MOMENT`
    })
})