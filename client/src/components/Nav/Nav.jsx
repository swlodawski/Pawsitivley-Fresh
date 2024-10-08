import { Link, useLocation } from 'react-router-dom';
import '../../index.css';

function Nav() {
    const currentPage = useLocation().pathname;

    return (
        <div>
            <ul className='nav'>
                <li className='nav-item' id='our-products'>
                    <Link to='/products' className={currentPage === 'Products' ? 'nav-link active' : 'nav-link '}>
                        <h3 className='modak-regular'>Our Products</h3>
                    </Link>
                </li>

                <li className='nav-item' id='about-us'>
                <Link to='/about' className={currentPage === 'About' ? 'nav-link active' : 'nav-link '}>
                        <h3 className='modak-regular'>About Us</h3>
                    </Link>
                </li>

                  <li className='nav-item' id='reviews'>
                  <Link to='/reviews' className={currentPage === 'Reviews' ? 'nav-link active' : 'nav-link '}>
                        <h3 className='modak-regular'>Reviews</h3>
                    </Link>
                </li>

                  <li className='nav-item' id='profile'>
                  <Link to='/profile' className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link '}>
                        <h3 className='modak-regular'>My Profile</h3>
                    </Link>
                </li>  

                <li className='nav-item'>
                    <button>
                    <Link to='/login'>
                        <h3 id='log-in' className='mooli-regular'>login</h3>
                    </Link> 
                    </button>
                    <button>
                    
                        <h3 id='cart' className='mooli-regular'> View Cart 🛒</h3>
                    
                    </button>
               
                </li> 

            </ul>

        </div>

    );
}

export default Nav;