import React from 'react';
import { CustomText } from '../../atoms';

import { FavoriteImage, ModalBackgroundContainer, ModalContainer, ModalContentContainer } from './styles';

import favoriteAdded from '../../../assets/favorite-add.png';
import favoriteRemoved from '../../../assets/favorite-remove.png';


interface ModalProps {
  visible: boolean;
  type: string;
}

export function StateModal({ visible, type }: ModalProps) {
  return (
    <ModalContainer
      visible={visible}
      transparent={true}
      animationType="fade"
      statusBarTranslucent
    >
      <ModalBackgroundContainer>
        <ModalContentContainer>
          <FavoriteImage
            source={type === 'added' ? favoriteAdded : favoriteRemoved}
          />
          <CustomText
            align="center"
            size={28}
            mt={24}
            fontFamily="bold"
          >
            {`Favorito ${type === 'added' ? 'adicionado' : 'removido'
              } com sucesso!`}
          </CustomText>
        </ModalContentContainer>
      </ModalBackgroundContainer>
    </ModalContainer>
  );
}