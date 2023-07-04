import React from 'react';

const HomePage = () => {
  const divStyle = {
    backgroundImage: "url('/got.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <div style={divStyle}>
      <h1>Bem-vindo à Página Inicial</h1>
      <p>Esta é a página inicial do seu aplicativo.</p>
    </div>
  );
};

export default HomePage;
