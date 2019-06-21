import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, style } from 'react-native';
import Header from "./Header";
import { ImageBackground } from 'react-native';


export default class Main extends React.Component {

  render() {
    return (
      <ImageBackground resizeMode ='cover' source={require("./img/walpaper.png")}  style={{width: '100%', height: '100%',opacity:0.75}}>
    <View style={styles.containerMain}>
         <View style= {styles.Content}>
            <Text style={styles.logo}>ID Pegawai : </Text>
         </View>
         <TextInput style={styles.txtInput}
                          onChangeText = { (id) => { this.setState({id}) } }
                          placeholder="Masukkan ID"
                  />
        <View style= {styles.Content}>
            <Text style={styles.logo}>Password : </Text>
         </View>
         <TextInput style={styles.txtInput}
                          onChangeText = { (password) => { this.setState({password}) } }
                          placeholder="Masukkan Password"
                  />

        <View style={styles.box1}>
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={()=> this.props.navigation.navigate('Home') }>
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
    flex:1,
},
backgroundImage:{
    flex:1,
    alignSelf:"stretch",
    width:null,
    justifyContent: "center"
},
Content:{
  marginTop:50,
    alignItems: "center",
},
logo:{
    color: "black",
    fontSize : 18,
    fontStyle : "italic",
    fontWeight : "bold",
    textShadowColor : "#252525",
    textShadowOffset : {width: 2, height: 2},
    textShadowRadius: 15,
    marginBottom:20
},

  box1: {
    flex: 1,
    width: "90%",
    paddingTop: 20,
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
        height: 40,
        marginBottom:20,
        marginTop:10,
        marginLeft:50,
        marginRight:50,
        backgroundColor:'#fff',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:4
    },


  button2Style: {
      paddingLeft: 50,
      paddingRight: 50,
      justifyContent: "center",
      alignItems:"center",
      backgroundColor: "#ffcccc",
      marginTop: 20,
      marginBottom: 20,
      height: 60,
      width: 200,
      borderRadius: 5,
  },

});
