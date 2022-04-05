import "./styles.css"
import nuKenzie from '../../svg/NuKenzie.svg'

const Header = ({home}) =>{

    return (
        <>
        <header>
            <img src={nuKenzie} alt="logo" className="imgLogo"></img>
            <button onClick={home} className="buttonHeader">Início</button>
        </header>
        </>
    )

} 

export default Header