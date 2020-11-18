import React from 'react';
import { Button, ScrollView, StyleSheet, View } from 'react-native';
import { Text } from './Themed';

const styles = StyleSheet.create({
  flex: { 
    justifyContent: 'center',
    flex:1
  },
    item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  horizontal: {
    flex:1,
    flexDirection: 'row'
  }
})

const LetraAnterior =({value: item}: any) => 
    <Text>{item}</Text>

export default class EditScreenInfo extends React.Component {
    state = {
      ultimaLetraSorteada: '',
      letrasAnteriores: [''], 
      disableButton: false
    }

    sortearLetra = () => {
      const {letrasAnteriores} = this.state;
      let letra = '';
      do { 
        letra = String.fromCharCode(Math.ceil( Math.random() * 26)+64)
      }
      while(letrasAnteriores.some(letraAnterior => letraAnterior === letra));

      letrasAnteriores.push(letra)

      this.setState({
        ultimaLetraSorteada:letra,
        letrasAnteriores
      }, () => {
        if (letrasAnteriores.length === 26){
          this.setState({
            disableButton: true
          })
        }
      })
    }

    render(){

      const { ultimaLetraSorteada, letrasAnteriores, disableButton} = this.state;
      
      return <ScrollView contentContainerStyle={styles.flex}>

        <View style={styles.item}>
          <Text>Letra sorteada</Text>
          <Text style={styles.title}>{ultimaLetraSorteada}</Text>
        </View>
        
        <View style={styles.horizontal}>
          {letrasAnteriores.map(letraAnterior => <LetraAnterior value={letraAnterior} />)}
        </View>

        <Button disabled={disableButton} title="Sortear outra letra" onPress={() => this.sortearLetra()}></Button>


      </ScrollView>
    }
}
