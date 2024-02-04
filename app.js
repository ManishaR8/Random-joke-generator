let url = "https://icanhazdadjoke.com/";
let jokesCont = document.querySelector(".jokeCont");
let joke = document.getElementById("jokes");

let btn = document.getElementById("jokeBtn");

newJoke = async() =>{
    let firstJoke = await getJokes();
    joke.innerText = firstJoke.joke;
    console.log()
}

newJoke();

btn.addEventListener("click", async ()=>{
    let jokeData = await getJokes();
    console.log(jokeData.joke);
    joke.innerText = jokeData.joke;
})

async function getJokes(){
    try{
        const config =  { headers: { Accept : "application/json" }}
        let res = await axios.get(url, config);
        return res.data;
    }
    catch(e){
        console.log(e)
    }
}




