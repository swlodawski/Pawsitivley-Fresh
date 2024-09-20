import './Home.css';
import '../../index.css';
import dogImage from '../../assets/images/dog-with-bowl.jpg';
import pawPrints from '../../assets/images/paws4.png';
import { Link } from 'react-router-dom';

const Home = () => {
  
    return (
        <div className='header-container'>
            <div className='home-container'>
                <div>
                    <h1 className='modak-regular' id='freshly-crafted'>Freshly Crafted For Happy Paws!</h1>
                    <p className='mooli-regular' id='find-out'>Find out which foods are a good fit for your pet!</p>
                    <Link to='/signup'>
                    <button className='lets-go-btn'>Lets Go!<span className="arrow">&#x27F6;</span></button>
                    </Link>
                </div>
                <img src={dogImage} alt='Dog with bowl' className='dogImage' />
                <img src={pawPrints} alt="Paw Prints" className='pawPrints' />
                <img src={pawPrints} alt="Paw Prints" className='pawPrints2' />
            </div>
        </div>
    );
}

export default Home;