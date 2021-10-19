import React from 'react';

// import { Container } from './styles';

const Logo: React.FC<{ title: string }> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default Logo;
