// function getData(){
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '8ae1c7493ebmsh87f4049c06b695dp175580jsn098a54be0344',
//             'X-RapidAPI-Host': 'joke3.p.rapidapi.com'
//         }
//     };
    
//     fetch('https://joke3.p.rapidapi.com/v1/joke', options)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(err => console.error(err));
//         // console.log('Hello')
// }

// function getJokes(){
//     // console.log('clicked...')
//     let url = 'https://api.chucknorris.io/jokes/random'
//     fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data.value))
// }


function getJokes(){
    // console.log('clicked...')
    let store = document.getElementById('store')
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(data => {
        console.log(data.value)
        
        store.innerHTML = `<h2>${data.value}</h2>`
    }).catch(err => console.log(err))
}

// setTimeout(()=>{
//     console.log('Hello')
// }, 2000)

// setInterval(()=>{
//     console.log('Hello')
// }, 1000)

// setInterval(()=>{
//     getJokes()
// }, 2000)

