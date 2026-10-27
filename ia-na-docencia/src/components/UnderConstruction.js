import React from 'react';

export default function UnderConstruction() {
  return (
    <div className="under-construction-container">
      <img 
        src={require('@site/static/img/wait.gif').default} 
        alt="Trabalhando..." 
        className="under-construction-gif" 
      />
      <div className="under-construction-text">
        <h2>Página em Construção 🚧</h2>
        <p>
          Estamos preparando este conteúdo ainda!<br/>
          Em breve você encontrará todas as informações aqui :)
        </p>
      </div>
    </div>
  );
}