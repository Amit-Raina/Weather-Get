const userInput = document.getElementById("weathercity");
const btn = document.getElementById("searchBtn"); 
const printTemp = document.getElementById("displayTemp");
const printTempMin = document.getElementById("displayTempMin");
const printTempMax = document.getElementById("displayTempMax");
const printDescription = document.getElementById("displayDescription");
var jsonData;
var iconId;


async function getData(){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&units=metric&appid=1e57ef36e0e9ce967e165565d5ff2fc1`);
    jsonData = await data.json();
    iconId = jsonData['weather'][0]['icon'];

    console.log(jsonData); 
    await printTempAll();
}

async function printTempAll(){
    printTemp.textContent    =  await  JSON.stringify("Feels Like " + jsonData['main']['feels_like']+ " °C in " + jsonData['name'] + ", "+jsonData['sys']['country']);
    printTempMax.textContent =  await  JSON.stringify("Max Temp " + jsonData['main']['temp_max']+ " °C ⇡" );
    printTempMin.textContent =  await  JSON.stringify("Min Temp " + jsonData['main']['temp_min']+ " °C " );
    printDescription.textContent =  await  JSON.stringify("Seems its " + jsonData['weather'][0]['description'] + " there"  );
    document.getElementById("displayDescriptionIcon").src = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
}


btn.addEventListener('click',function(){
    if(userInput.value === '' || userInput.value === !NaN){
        alert("Enter a valid City / Country Name");
        return 0;
    }
    getData();
});
