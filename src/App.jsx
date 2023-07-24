
import './App.css'
import { Slider } from "./components/Slider";
import {sliderimg} from "./data/data.json"
function App() {
  return(
  <div className='App'>
    <Slider data={sliderimg}/>
  </div>

  )
}

export default App
