import Navbaring from '../Components/Nav';
import Footer from '../Components/Foot';
import './Home.css';
import Slider from '../Components/Slider.js';
import './Slider.css'
import data from '../Components/data.js'

function Home() {
  return (
    <div>
        <Navbaring />
        <div className='center'>
        <Slider  data={data} activeSlide={5} />
        </div>
        <Footer />
    </div>

    );
}

export default Home;