import './Backend.css';
import Software from '../../assets/software.png';
import { useEffect, useRef, useState } from 'react';
import { Modal } from '@mui/material';
import ProjectCard from '../Project_Card/ProjectCard';

export default function Backend({ count = 50 }) {
  const cardRef = useRef(null);
  const particlesRef = useRef(null);
  const createdNodesRef = useRef([]);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const card = cardRef.current;
    const container = particlesRef.current;
    if (!card || !container) return;

    // Respect reduced motion
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    let active = false;

    function createParticles() {
      if (active) return;
      active = true;
      const nodes = [];
      for (let i = 0; i < count; i++) {
        const el = document.createElement('span');
        el.className = 'particle';
        el.style.left = `${Math.random() * 100}%`;
        const size = 3 + Math.random() * 2;
        el.style.width = el.style.height = `${size}px`;
        el.style.background = `rgba(255,0,0,${0.35 + Math.random() * 0.8})`;
        el.style.animationDuration = `${5 + Math.random() * 3}s`;
        el.style.animationDelay = `${-Math.random() * 5}s`;
        container.appendChild(el);
        nodes.push(el);
      }
      createdNodesRef.current = nodes;
    }

    function removeParticles() {
      const nodes = createdNodesRef.current || [];
      nodes.forEach(n => n.remove());
      createdNodesRef.current = [];
      active = false;
    }

    card.addEventListener('mouseenter', createParticles);
    card.addEventListener('mouseleave', removeParticles);

    // cleanup on unmount
    return () => {
      card.removeEventListener('mouseenter', createParticles);
      card.removeEventListener('mouseleave', removeParticles);
      removeParticles();
    };
  }, [count]);

  return (
    <div ref={cardRef} className="backend-card" onClick={() => setIsVisible(true)}>
      <div ref={particlesRef} className="particles" aria-hidden="true" />
      <div className="backend-title">Backend</div>
      <div
        style={{
          backgroundImage: `url(${Software})`,
          width: '100px',
          height: '100px',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          marginBottom: '10px',
        }}
      />
      <Modal open={isVisible} 
      onClose={() => setIsVisible(false)}
      onRequestClose={() => setIsVisible(false)}
      className="backend-modal"
      >
        <div className="modal-content">
          <button onClick={(e) => { e.stopPropagation(); setIsVisible(false); }}
          className='modal-button'
          >
          Close
          </button>
          <h2 >Backend Projects 🔧</h2>
          <ProjectCard
            
          />
        </div>
      </Modal>
    </div>
  );
}
