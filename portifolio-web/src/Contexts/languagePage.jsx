import { createContext, useState } from 'react';

import PropTypes from 'prop-types';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [language, setLanguage] = useState(false);

  return (
    <StateContext.Provider value={{ language, setLanguage }}>{children}</StateContext.Provider>
  );
};

StateProvider.propTypes = {
  children: PropTypes.node,
  // outras propriedades
};
