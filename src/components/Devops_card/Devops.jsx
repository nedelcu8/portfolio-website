import "./Devops.css";
import DevOpsImage from "../../assets/devops.png";

function Devops() {
  return (
    <div className="devops-card" >
        <div className="devops-title">
            DevOps
        </div>
        <div style={{
            backgroundImage: `url(${DevOpsImage})`,
            width: '100px',
            height: '100px',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            marginBottom: '10px', 
            
        }}></div>
        
    </div>
  );
}


export default Devops;