console.log(document.getElementById("title").innerHTML);


async function getSurah(){
    await fetch("http://api.alquran.cloud/v1/surah")
        .then((response)=>response.json())
        .then((surah)=>
        {
            surah.data.forEach(surah => {
                console.log(surah['englishName']);
            });
        }
        )
    
    
}



getSurah();


