import "./styles.css"
import nuKenzie from '../../svg/NuKenzie.svg'

const Header = () =>{

    return (
        <>
        <header>
            <img src={nuKenzie} alt="logo" className="imgLogo"></img>
            <button className="buttonHeader">Início</button>
        </header>
        </>
    )

} 

export default Header