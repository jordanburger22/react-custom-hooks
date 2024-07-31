import {useNavigate} from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const handleNavigate = (e) => navigate(e.target.name);

    return ( 
        <nav className='navbar'>
            <h1>Movie and TV Database</h1>
            <div>
                <button onClick={handleNavigate} name='/'>Home</button>
                <button onClick={handleNavigate} name='/movie'>Movies</button>
                <button onClick={handleNavigate} name='/tv'>TV Shows</button>
            </div>
        </nav>
     );
}
 
export default Navbar;