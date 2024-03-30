console.log(document.getElementById("title").innerHTML);


// get all the names of the surah in english
async function getSurah(){
    await fetch("http://api.alquran.cloud/v1/surah")
        .then((response)=>response.json())
        .then((surah)=>
        {
            surah.data.forEach(surah => {
                console.log(surah['englishName']);
            });
        }
        );
}

// get all surah button
const allSurahBtn = document.getElementById("getSurah");
allSurahBtn.addEventListener('click', getSurah);




