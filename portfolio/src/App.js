import React, { useEffect, useState } from 'react';
import './App.css';
import './Recruitor.css';
import Roles from './components/Roles';
import Recruitor from './components/Recruitor';
import Explorer from './components/Explorer';
import Developer from './components/Developer';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [selectedRole, setSelectedRole] = useState('not-set');

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 6500); // start fade
    const hideTimer = setTimeout(() => setShowIntro(false), 9500); // remove intro

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  // Conditional rendering based on selectedRole
  let RenderedComponent = null;
  if (selectedRole === 'recruitor') RenderedComponent = <Recruitor roleChange={handleRoleChange} />;
  else if (selectedRole === 'developer') RenderedComponent = <Developer roleChange={handleRoleChange} />;
  else if (selectedRole === 'explorer') RenderedComponent = <Explorer roleChange={handleRoleChange} />;

  return (
    <div className="App">
      {selectedRole === 'not-set' ? (
        <>
          {showIntro && (
            <div className={`intro ${fadeOut ? 'fade-out' : ''}`}>
              <h1>Erick Mwangi.</h1>
            </div>
          )}
          <h2 id="welcome">Welcome to my portfolio</h2>
          <Roles roleChange={handleRoleChange} />
        </>
      ) : (
        RenderedComponent
      )}
    </div>
  );
}

export default App;
