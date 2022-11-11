import React, { useState, useCallback } from 'react';
import { View, Image, Text } from 'react-native';
import BackgroundView from '../../containers/backgroundView';
import styles from './styles';
import images from '../../assets';
import t from '../../services/translate';
import Button from '../../components/button';
import * as ImagePicker from 'react-native-image-picker';
import { uploadImage } from '../../services/api';

const UploadImage = () => {
  const [imageSource, setImageSource] = useState(null);
  const onImageLibraryPress = async () => {
    console.tron.log('ingresa');
    const options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      noData: true,
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
      },
    };

    await ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.tron.log('User cancelled photo picker');
      } else if (response.error) {
        console.tron.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.tron.log('User tapped custom button: ', response.customButton);
      } else {
        console.tron.log('response: ', response);
        const source = response.assets[0];
        console.tron.log('source: ', source);
        setImageSource(source.uri);
        const body = new FormData();
        body.append('avatar', {
          uri: source.uri,
          type: source.type,
          name: source.fileName,
        });

        const data = source.fileName;
        console.tron.log('body: ', body);
        uploadImage(body);
      }
    });
  };

  const onCameraLibraryPress = () => {
    console.tron.log('fcion camara');
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, response => {
      if (response.didCancel) {
        console.tron.log('User cancelled photo picker');
      } else {
        const source = response.assets[0];
        console.tron.log('source: ', source);
        setImageSource(source.uri);
      }
    });
  };

  return (
    <BackgroundView>
      <View style={styles.info}>
        <Image source={images.onboarding} style={styles.image} />
        <Button
          style={styles.buttonContainer}
          textKey="upload_image.button_foto"
          onPress={onCameraLibraryPress}
        />
        <Button
          style={styles.buttonContainer}
          textKey="upload_image.button_subir_foto"
          onPress={onImageLibraryPress}
        />
        <Image
          source={{
            uri: imageSource,
          }}
          style={styles.image}
        />
      </View>
    </BackgroundView>
  );
};

export default UploadImage;
