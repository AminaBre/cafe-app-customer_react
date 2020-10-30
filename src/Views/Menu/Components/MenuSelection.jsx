import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

export const MenuSelection = () => {
  const { area } = useParams();
  const history = useHistory();
  const menuSectionNames = ['Varm drikke', 'Kald drikke', 'Dessert'];

  return (
    <div>
      {/* Ternary if-else i className, sånn at den legger til "active-button" som klasse dersom state (menuSection) tilsvarer,
            og dermed kan man ha egen CSS-styling på den knappen som er aktiv.
            onClick endrer state på menuSection med argumentet i funksjonen (altså som setState) */}
      <button
        className={`menu-section-button ${area === 'VarmDrikke' ? 'active-button' : ''}`}
        onClick={() => history.push('/MainMenu/VarmDrikke')}
      >
        {menuSectionNames[0]} {/* Det som står på knappen. Hentes bare statisk fra menuSectionNames-array øverst */}
      </button>
      <button
        className={`menu-section-button ${area === 'KallDrikke' ? 'active-button' : ''}`}
        onClick={() => history.push('/MainMenu/KallDrikke')}
      >
        {menuSectionNames[1]}
      </button>
      <button
        className={`menu-section-button ${area === 'Desserts' ? 'active-button' : ''}`}
        onClick={() => history.push('/MainMenu/Desserts')}
      >
        {menuSectionNames[2]}
      </button>
    </div>
  );
};
