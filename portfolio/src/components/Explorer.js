import React from 'react'
import '../Explorer.css'
import GlobeCanvas from './GlobeCanvas';

function Explorer(props) {

  let resetRole = (event) => {
    props.roleChange('not-set');
  }

  return (
    <div className='explorer-container'>
      <section className='nav'>
        <button id='back-button' onClick={resetRole} title='Back to roles'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="none" stroke="#00aeff" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M249.38 336L170 256l79.38-80m-68.35 80H342" /><path fill="none" stroke="#650094" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z" /></svg>
        </button>
      </section>

      <GlobeCanvas />
      
      <div className='info-container'>
        <h2>Explorers</h2>
        <p>Coming Soon!!!!</p>
      </div>
    </div>
  )
}

export default Explorer
