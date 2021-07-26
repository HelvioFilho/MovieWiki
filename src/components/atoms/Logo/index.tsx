import React from 'react';
import logoImage from '../../../assets/LogoEmpire.png';
import { LogoImage } from './styles';

export function Logo() {
  return (
    <LogoImage source={logoImage} />
  );
}