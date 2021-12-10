import React, {useState, useEffect, useDebugValue} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [data,setData] = useState([{}]);
  
  useEffect( () => {
    fetch("http://localhost:5000/funcionarios").then(
        response => response.json()
      ).then(
        data1 => {
          setData(data1);
          console.log(data1);
        })
  }, [])

  return (
    <View style={styles.container}>
      <div id = "menu">
      
      </div>
      <Text style={styles.textSelect}>CONTROLE DE FUNCIONÁRIOS<br /></Text>
        {(typeof data.funcionario === "undefined") ?
        (
          <p>Carregando.....</p>
        ): (
          data.funcionario.map((func, i) =>(
            <tr><p key={i}>{func}</p></tr>
          ))
        )
        }
      <TouchableOpacity>
        <Text style = {styles.button}>Inserir novo funcionário</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'green',
    borderWidth:20,
    fontFamily: 'Comic Sans MS',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor:'green',
    padding:20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  text: {
    fontSize: 40,
  },
  textSelect: {
    fontSize:30,
    fontWeight:'bold',
    textAlign: 'center',
    marginBottom:300,
  },
  table: {
    border: 1,
    borderColor: 'black',
  },
});