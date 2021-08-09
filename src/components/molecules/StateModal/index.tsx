import React from 'react';
import { Modal } from 'react-native';
import { CustomText } from '../../atoms';

import { FavoriteImage, ModalBackgroundContainer, ModalContentContainer } from './styles';
import favoriteAdded from '../../../assets/favorite-add.png';
import favoriteRemoved from '../../../assets/favorite-remove.png';
import { CustomModalProps } from '../../../utils/interface';

export function StateModal({ visible, type }: CustomModalProps) {
  return (
    <Modal
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
    </Modal>
  );
}