
import './App.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


  
    const image1="https://cdn-ajggd.nitrocdn.com/kMoOFpDlsOVtlYJLrnSRNCQXaUFHZPTY/assets/images/optimized/rev-814242f/wp-content/uploads/bb-plugin/cache/nature-photography-landscape-a892fa3059994f7f5119d4a53fadada3-zybravgx2q47.jpg";
    const image2="https://e0.pxfuel.com/wallpapers/734/52/desktop-wallpaper-full-wide-nature-i-beautiful-nature-birds-nature.jpg";
    const image3="https://wallpaperaccess.com/full/5073019.jpg";
    const image4="https://c4.wallpaperflare.com/wallpaper/169/490/533/nature-cat-panther-wild-wallpaper-preview.jpg";
  
  function App() {
    const images= [
      {
      
        
        imgSrc: image1,
        id: "asdhajsdbhjabhsjdfdfvll",
      },
      {
       
        imgSrc: image2,
        id: "sdjfdlaajsdbhjabhsjdfdfv",
      },
      {
        imgSrc: image3,
        id: "sdjfdlaajsdbhjabhsjdfdff",
      },
      {
        imgSrc: image4,
        id: "sdjfdlaajsdbhjabhsjdfdfd",
      },
    ];
    
  return (
    <>
    <div>
    <Carousel 
    className="custom-carousel" 
    infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}>
      {images.map((image) => (
            <div key={image.id}>
              <img src={image.imgSrc} alt={`Nature ${image.id}`}className="carousel-image" />
            </div>
      ))}
    </Carousel>
    </div>
    </>
  );
}

export default App;
