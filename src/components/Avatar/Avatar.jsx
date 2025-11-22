import "./Avatar.css";

function Avatar({ src, alt, size = 150 }) {
  return (
    <div className="avatar">
      <img
        src={src}
        alt={alt}
        style={{ width: size.width, height: size.height }}
        className="avatar-image"
      />
    </div>
  );
}

export default Avatar;