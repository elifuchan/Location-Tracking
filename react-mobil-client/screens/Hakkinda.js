import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Text, Button } from 'react-native';

export default function Hakkinda({ navigation }) {

  const pressHandler = () => {
    //navigation.navigate('ReviewDetails');
    navigation.push('Home');
  }

  const image = {
    uri:
      'https://downloader.disk.yandex.ru/preview/2dedb85700ff788b520babf9ee264359820c356b59f1d35d1da69ff3a07f9e46/5ee7e06b/4Kt4HTE9w4-3yIPwFid1SMJWYF7QSyIg8klaGEN0Ab0G1pSjariukCthlCtMtDgxi_9ftKU_DSaTVO3IdySCvw==?uid=0&filename=bgson.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&owner_uid=178310430&size=2048x2048',
  };

  return (
   <ImageBackground source={image} style={styles.image}>
    <View>
    <Text style={{ textAlign: "center" }}>
    MÜŞTERİ PROBLEMİ
    </Text>
    <Text style={{ textAlign: "center", fontWeight: "bold", color:"white" }}>
Müşterilerin problemleri, evcil hayvanları dışarı çıktıklarında yaşadıkları kaybolma korkusudur.
Genel olarak nerede olduklarını bilmek ve ulaşabilecekleri bir konumda olmalarını istemektedirler.
Müşteri, hayvan takip cihazının evcil hayvanını rahatsız etmeyecek boyutta olmasını istemektedir.
Evcil hayvan bakımında daha çok kedi ve köpek tercih edilmektedir evcil hayvan sahipleri Chi-Pet sayesinde evcil hayvanlarını 7/24 saat nerede olduklarını bilebilecekler.
Hangi sokaklarda gezdiğini bilme önceliği duyulmaktadır ve gezilen yollar hakkında kayıt tutulmaktadır, evcil hayvanın dolaştığı sokaklarda ona zarar verebilecek herhangi bir durumun olduğu zaman önüne geçebilecek bir konumda bulunacaktır
Bu projede evcil hayvanın hem güvenli dolaşmasını ve kullanıcı takibinde olmasını sağlıyoruz. Bu şekilde evcil hayvanın doğasını bozmayıp, evde hapsolmasını engellenmiş olunur. Güvenli bir şekilde sokaklarda takip edilebilecek konumlarda özgürce gezmesini amaçlar.


    </Text>
     <Text style={{ textAlign: "center", color:"white" }}>
     Elif Uçhan 201613172046 uchan-elif@hotmail.com ,
mahmut Semiz 201413172064-mahmutsemiz55@gmail.com
     </Text>
     
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