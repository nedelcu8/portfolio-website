import "./Info_Card.css";
import Social_Card from "../Social_Card/Social";
import Github from "../../assets/github.png";
import Linkedin from "../../assets/linkedin-icon.png";

function Info_Card() {
  return (
    <div className="info-card">
      <div className="container-card">
        <div className="title">👋 Hello, I am Bogdan</div>

        <div className="description">
            <p>A self taught DevOps engineer with a passion for:</p>
            <ul>
              <li>🧱 Infrastructure and automation </li>
              <li>🏗️ Building scalable systems</li>
              <li>♾️ Continuous integration and deployment</li>
              <li>💡 Creating software solutions</li>
            </ul>
            
          </div>
        <div className="social">
            <Social_Card 
              url={"https://github.com/nedelcu8"}
              icon={Github}
              alt={"GitHub Icon"}
            />
            <Social_Card 
              url={"https://www.linkedin.com/in/macovei-mihai-bogdan-8922571b9/"}
              icon={Linkedin}
              alt={"LinkedIn Icon"}
            />
      </div>
        </div>
    
        
      </div>
    
  );
}

export default Info_Card;