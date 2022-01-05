import car from "./pics/car1.jpg";
function App() {
  return (
    <div>
        <div className='div' style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Amine</h1>
          <br />
          <img className='pic' src="/images/car2.jpg" alt="carpic" />
        
          <br />
          <img className='pic' src={car} alt ='carpic' />
        
        </div>
        <br/>
        <video className='vid'  width={720} height={240} controls>
          <source src="/videos/car1min.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }


export default App;
