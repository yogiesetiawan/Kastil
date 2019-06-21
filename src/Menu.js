import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, style } from 'react-native';
import Header from "./Header";
import { ImageBackground } from 'react-native';



export default class Main extends React.Component {
  static navigationOptions ={
    header:null
  }
  render() {
    return (
      <ImageBackground resizeMode ='cover' source={require("./img/walpaper.png")}  style={{width: '100%', height: '100%',opacity:0.80}}>
    <View style={styles.containerMain}>

        <Image style = {styles.gambar}
            source={require("./img/logo.png")} style = {{marginTop: 50, marginRight:100, marginLeft:100, width: 150, height: 160,opacity:1,}} />
        <Image style = {styles.gambar}
            source={require("./img/kastil.png")} style = {{marginRight:100, marginLeft:100,width: 170, height: 60, opacity:1,borderRadius:20}} />
         <View style={styles.box1}>
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={()=> this.props.navigation.navigate('Login') }>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableHighlight>
                </View>
            </View>
          </ImageBackground>



    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    marginTop : 20,
   // flex:1,
    flexDirection: 'column',
    alignItems:'center'
},
  box1: {
    //flex: 1,

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


  button2Style: {

      justifyContent: "center",
      alignItems:"center",
      backgroundColor: "#ffcccc",
      marginTop: 50,
      marginLeft:50,
      marginRight:50,
      marginBottom: 20,
      height: 60,
      width: 200,
      borderRadius: 5,
      opacity:1,
  },

});
