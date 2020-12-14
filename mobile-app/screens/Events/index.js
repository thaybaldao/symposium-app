import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import MyCard from './MyCard';


class Events extends React.Component {
  render() {
    const event1 = {
      title: 'Mulheres na Ciência',
      content: 'Data: 22/12/2020 \nHorário: 10:00',
      uri: 'https://s2.glbimg.com/V3yqyPjPw-MLmc8Defd7Xw6OGw0=/e.glbimg.com/og/ed/f/original/2017/03/08/madame-curie.jpg'
    };

    const event2 = {
      title: ' Liderança Feminina',
      content: 'Data: 23/12/2020 \nHorário: 14:00',
      uri: 'https://lh3.googleusercontent.com/proxy/GW1QzIQsTvclAt1oKAKd6ZqZBMvsXBSyeHQzUf2FrgT7L-6vVK4emVTfOAeyu7bUyDnj4mGjxyUVI5nCFg3mYhrA3ptX7pm2otpR3QrDCAIHVQJUSK1eFKXZ9n9kp9tBRltRV6hhlJTVoS0l47l6J1df04FTwhfoLJ4'
    };

    const event3 = {
      title: 'Mulheres e a Nanotecnologia',
      content: 'Data: 23/12/2020 \nHorário: 20:00',
      uri: 'https://www12.senado.leg.br/noticias/materias/2019/03/11/empresas-de-nanotecnologia-poderao-ser-incluidas-no-simples-nacional/nanotecnologia_iStock-483287441.jpg/@@images/image/imagem_materia'
    };

    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <MyCard data={event1} id = {0}/>
      <MyCard data={event2} id = {1}/>
      <MyCard data={event3} id = {2}/>
      </ScrollView>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Events;
