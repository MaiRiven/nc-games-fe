import loadingIcon from '../Assetts/loader.png';
import '../Style/Loader.css';

export const Loader = () => {
    return(
        <img className='loader' src={loadingIcon} alt=""/>
    );
};