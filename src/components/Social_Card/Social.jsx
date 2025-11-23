import "./Social.css";


function Social_Card({url, icon, alt}) {
  return (
     <a href={url} target="_blank" rel="noopener noreferrer" title={alt}>
      <img className="social-icon" src={icon} alt={alt} 
      />
    </a>
  );
}

export default Social_Card;