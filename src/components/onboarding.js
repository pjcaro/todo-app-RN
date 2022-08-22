import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

const image = require('../assets/onboarding.png');
const elipse = require('../assets/elipse.png');

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.info}>
        <Image source={elipse} style={styles.elipse} />
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>Gets things done with TODo</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
          volutpat, tristique lacinia ut. Elementum non turpis nullam ipsum.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
