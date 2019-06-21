import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, style } from 'react-native';
import Header from "./Header";
import { ImageBackground } from 'react-native';


export default class Main extends React.Component {

  render() {
    return (
      <ImageBackground resizeMode ='cover' source={require("./img/walpaper.png")}  style={{width: '100%', height: '100%',opacity:0.75}}>
    <View style={styles.containerMain}>
        <Image style = {styles.gambar}
            source={require("./img/logo.png")} style = {{marginTop: 50, marginRight:100, marginLeft:100, width: 150, height: 160}} />
        <Image style = {styles.gambar}
            source={require("./img/kastil.png")} style = {{marginRight:80, marginLeft:100,width: 170, height: 60, borderRadius:20}} />
         <View style={styles.box1}>
                <TouchableHighlight activeOpacity={0.5} style={styles.button1Style} onPress={()=> this.props.navigation.navigate('Kastil') }>
                    <Text style={styles.buttonText}>KASTIL</Text>
                </TouchableHighlight>

                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={()=> this.props.navigation.navigate('Utama') }>
                    <Text style={styles.buttonText}>LOGOUT</Text>
                </TouchableHighlight>
                </View>
            </View>
            </ImageBackground>

    );
  }
}
const styles = StyleSheet.create({
  containerMain: {

    flex:1,
    flexDirection: 'column'
},
  box1: {
    flex: 1,
    width: "90%",
    paddingTop: 30,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    //justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center"

  },
  buttonText: {
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "black",
        fontSize: 18,
        fontStyle:"italic",
        fontWeight: "bold"
    },
  txtInput: {
        height: 30,
        backgroundColor:'#fff',
        borderColor: 'gray',
        borderWidth: 1,
    },
    button1Style: {

        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#ffcccc",
        marginTop: 20,
        marginLeft:60,
        marginRight:50,
        height: 60,
        width: 200,
        borderRadius: 5,
    },

  button2Style: {

      justifyContent: "center",
      alignItems:"center",
      backgroundColor: "#ffcccc",
      marginTop: 10,
      marginLeft:60,
      marginRight:50,
      marginBottom: 20,
      height: 60,
      width: 200,
      borderRadius: 5,
  },

});
