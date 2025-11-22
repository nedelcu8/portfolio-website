import "./Info_Card.css";
import Carousel from "../Tech_Carousel/Carousel";
function Info_Card() {
  return (
    <div className="info-card">
      <div className="container-card">
        <div className="title">Bogdan</div>
        <div className="description">I am a bla bla blasda asdadasd sad asd a sadasd a</div>
      
        <Carousel/>
      </div>

    </div>
    
  );
}

export default Info_Card;