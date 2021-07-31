import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { defaultTheme } from '../../../global/styles/theme';

import { GoBackContainer } from './styles';

export function GoBack() {
  const navigation = useNavigation();
  return (
    <GoBackContainer onPress={() => navigation.goBack()}>
      <Ionicons name="chevron-back" color={defaultTheme.colors.white} size={defaultTheme.metrics.px(28)} />
    </GoBackContainer>
  );
}