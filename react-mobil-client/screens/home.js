import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from 'react-native-gradient-buttons';

export default function Home({ navigation }) {
  const image = {
    uri:
      'https://downloader.disk.yandex.ru/preview/2dedb85700ff788b520babf9ee264359820c356b59f1d35d1da69ff3a07f9e46/5ee7e06b/4Kt4HTE9w4-3yIPwFid1SMJWYF7QSyIg8klaGEN0Ab0G1pSjariukCthlCtMtDgxi_9ftKU_DSaTVO3IdySCvw==?uid=0&filename=bgson.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&owner_uid=178310430&size=2048x2048',
  };

  const pressHandler = () => {
    //navigation.navigate('ReviewDetails');
    navigation.push('Hakkinda');
  };

  const pressHandler2 = () => {
    //navigation.navigate('ReviewDetails');
    navigation.push('Map');
  };

  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={{ paddingHorizontal: 5 }}>
        <GradientButton
          style={{ marginTop: 5 }}
          textStyle={{ fontSize: 30 }}
          text="Harita"
          height={50}
          pinkDarkGreen
          impact
          onPressAction={pressHandler2}
        />

      </View>

      <View style={{ paddingHorizontal: 5 }}></View>

      <View style={{ paddingHorizontal: 5 }}>
        <GradientButton
          style={{ marginTop: 5 }}
          textStyle={{ fontSize: 25 }}
          text="Hakkinda"
          height={50}
          blueViolet
          impact
          onPressAction={pressHandler}
        />
      </View>
    </ImageBackground>
  );
}



const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  
});
