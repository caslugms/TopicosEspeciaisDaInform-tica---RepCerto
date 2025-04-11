import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './components/PrimeiroComponente';
export default function App() {
    return (
        <View style={styles.container}>
            <Text>Bem-vindo ao React Native!</Text>
            <PrimeiroComponente />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export const Saudacao = (props) => {
    return (
        <Text> Ol , {props.nome}!</Text>
    );
  };
  export function SaudacaoCompleta(props) {
    return (
        <Text>
            Ol , {props.nome}! Voc tem {props.idade} anos.
        </Text>
    );
  }
  
  import { Saudacao, SaudacaoCompleta } from './components/PrimeiroComponente';
  export default function App() {
    return (
        <View style={styles.container}>
            <Text> Ol , Mundo!</Text>
            <Saudacao nome="Joo" />
            <SaudacaoCompleta nome="Maria" idade={30} />
            <StatusBar style="auto" />
        </View>
    );
  }