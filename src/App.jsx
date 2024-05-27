import { useState } from "react";


const App = ()=> {

  // const [ayah, setAyah ] = useState('');
  // fetch('http://api.alquran.cloud/v1/ayah/262')
  //   .then((response) => response.json())
  //   .then((ayah) => setAyah(ayah));

  fetch('http://api.alquran.cloud/v1/ayah/2')
    .then((response) => response.json())
    .then((ayah) => console.log(ayah.data.text));
  
  
  return (
    <div className="bg-red-200">
      <h1 className="text-2xl text-slate-600">Hello World! My name is Raiyan</h1>
    </div>
  )
}

export default App;