import "./Carousel.css"

const techStack = [
    { src: "/src/assets/ansible.png", alt: "Ansible" },
    { src: "/src/assets/docker.png", alt: "Docker" },
    { src: "/src/assets/k8s.png", alt: "Kubernetes"},
    { src: "/src/assets/terraform.png", alt: "Terraform" },
    { src: "/src/assets/prometheus_logo.png", alt: "Prometheus" },
    { src: "/src/assets/grafana.png", alt: "Grafana" },
    { src: "/src/assets/gitlab.png", alt: "GitLab CI/CD" },
    { src: "/src/assets/java.png", alt: "Java" },

];

function Carousel() {
  return (
    <div className="carousel">
        <div className="carousel-track">
            
            {techStack.map((tech, index) => (
            <img 
                key={index} 
                src={tech.src} 
                alt={tech.alt} 
                className="carousel-item" 
            />
            ))}

            {techStack.map((tech, index) => (
            <img aria-hidden="true"
                key={index} 
                src={tech.src} 
                alt={tech.alt} 
                className="carousel-item" 
            />
            ))}
            
        </div>
    </div>
  );
}

export default Carousel;