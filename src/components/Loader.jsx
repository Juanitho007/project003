import React from 'react';

const Loader = () => {
  return (
    <div className="Loader">
      <img src="/public/img/rick.png" alt="" />
      <div className="loader__footer">
        <marquee>
          <a
            href="https://juanitho007.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visita mis otros proyectos
          </a>
        </marquee>
        <p>
          <span>&#x276e;Hecho con </span>
          <a href="https://www.academlo.com/" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-heart-pulse"></i>
          </a>
          <span> en Academlo&#x276f;_</span>
        </p>
      </div>
    </div>
  );
};

export default Loader;
