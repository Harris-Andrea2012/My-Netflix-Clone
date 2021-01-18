import React from 'react'
import './App.css';
import Row from './Components/RowComponent/Row'
import requests from './requests'
import Spotlight from './Components/SpotlightComponent/Spotlight'
import Navbar from './Components/NavbarComponent/Navbar'




function App() {
    return (
    <div className = "App" >
        <Navbar />
        <Spotlight />
        <div className="rows">
        <Row title="Netflix Originals" dataUrl={requests.getOriginals} />
        <Row title="Trending Now" dataUrl={requests.getTrending}/>
        <Row title="Anime" dataUrl={requests.getAnimation}/>
        <Row title="Horror Movies" dataUrl={requests.getHorror}/>
        <Row title="Documentaries" dataUrl={requests.getDocs}/>
        <Row title="Action" dataUrl={requests.getAction}/>
        <Row title="Romance" dataUrl={requests.getRomance}/>

        </div>
       
      

       
      

    </div>
    );
}

export default App;