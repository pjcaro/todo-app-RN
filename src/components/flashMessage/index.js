import React from 'react';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import t from '../../services/translate';

const FlashMessageComponent = () => <FlashMessage position="top" />;

export const showFlashMessage = ({ message, type, ...props }) =>
  showMessage({ message: t(message), type, ...props });

export default FlashMessageComponent;
