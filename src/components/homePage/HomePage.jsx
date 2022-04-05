import "./styles.css"
import img1 from '../../svg/NuTitle.svg'
import img2 from '../../svg/img2.svg'
import img3 from '../../svg/img3.svg'
import img4 from '../../svg/img4.jpeg'


const Home = () => {
  return (
    <>
    <body className="homePageDiv">
      <div className="globalDiv">
    <div className="div1Home">
      <img src={img1} alt="img1" className="img1"></img>
      <img src={img2} alt="img2" className="img2"></img>
      <img src={img3} alt="img3" className="img3"></img>
      <button className="inicio">Iniciar</button>
    </div>
      <img src={img4} alt="img4" className="img4"></img>
    </div>
    </body>
    </>
  );
};

export default Home;
