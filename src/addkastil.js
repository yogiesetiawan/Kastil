import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight, TextInput,ImageBackground,Image   } from "react-native";
import { Icon } from 'react-native-elements';

import Header from "./Header";

const axios = require('axios');
class addkastil extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {

            id_kastil:'',
            nama_kastil:'',
            deskripsi:'',
            id_menu:'',
            image:'',

        };
    }
    UpFoto(){
      this.uploadPicture();
      axios.post("https://yogiesetiawan.000webhostapp.com/addKastil.php", {
        id_kastil: this.state.id_kastil,
        nama_kastil: this.state.nama_kastil,
        deskripsi: this.state.deskripsi,
        id_menu: this.state.id_menu,
        image: this.state.image,
      })
      .then((response) => {
          console.log("Status update trx  "+response);
            console.log(response);
        }
      )
      .catch(function (error) {
        console.log(error);
      });
    }
    choosePicture = () => {
      console.log("upload");
      var ImagePicker = require("react-native-image-picker");
      var options = {
        title: "Pilih Gambar",
        storageOptions: {
          skipBackup: true,
          path: "images"
        }
      };
      ImagePicker.showImagePicker(options, response => {
        console.log("Response = ", response);
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.error) {
          console.log("ImagePicker Error: ", response.error);
        } else if (response.customButton) {
          console.log("User tapped custom button: ", response.customButton);
        } else {
          let source = { uri: response.uri };
          console.log(source);
          console.log(response.fileName);
          this.setState({
            srcImg: source,
            uri: response.uri,
            fileName: response.fileName,
            image: response.fileName
          });
        }
      });
    };
    uploadPicture = () => {
      const data = new FormData();
      data.append("fileToUpload", {
        uri: this.state.uri,
        type: "image/jpeg", // or photo.type
        name: this.state.fileName
      });
      const url =
      "https://yogiesetiawan.000webhostapp.com/addimage.php";
      fetch(url, {
        method: "post",
        body: data
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          this.setState({
            loading: false
          });
        });
    };

    submit () {
      this.UpFoto();
    };
    render() {

        return (
            <View style={styles.container}>
               <View style={styles.header}>
            <Text style={styles.txtHeader}> Tambah Kastil </Text>
          </View>
              <TouchableHighlight
                large
                transparent
                onPress={this.choosePicture.bind(this)}
              >
                <View
                  style={styles.uploadFoto}
                >
                  {this.state.srcImg === null ? (
                   <Icon
                   reverse
                   name='camera'
                   color='red'
                      />
                  ) : (
                    <Image
                      source={this.state.srcImg}
                      style={styles.image}
                    />
                  )}
                </View>
              </TouchableHighlight>

              <View style={styles.box1}>
              <Text style={styles.Text}>ID Kastil </Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={id_kastil => this.setState({ id_kastil })}
                    placeholder="Masukkan Kode Kastil"
                    />
              </View>
              <View style={styles.box1}>
              <Text style={styles.Text}>Nama Kastil </Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={nama_kastil => this.setState({ nama_kastil })}
                    placeholder="Masukkan Nama Kastil"
                    />
              </View>

              <View style={styles.box1}>
              <Text style={styles.Text}>Deskripsi </Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={deskripsi => this.setState({ deskripsi })}
                    placeholder="Tulis Deskripsi"
                    />
              </View>
              <View style={styles.box1}>
              <Text style={styles.Text}>ID Menu </Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={id_menu => this.setState({ id_menu })}
                    placeholder="Masukkan ID Menu"
                    />
              </View>

              <View style={styles.box2}>
                <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.buttons}
                  onPress={() =>
                    this.UpFoto()
                  }
      >
                  <Text style={styles.Text2}>save</Text>
                </TouchableHighlight>
              </View>


            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
       // flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#ffcccc"
    },
    Text2: {
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "white",
        fontSize: 20

    },
    Text:{
      textAlign: "center",
      marginTop: 10,
      color: "black",
      fontSize: 13,
    },
    buttons: {
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'center',
      backgroundColor: "pink",
      marginBottom: 20,
      height: 40,
      width: "45%",
      borderRadius: 5,
    },
    box1: {
      width: "80%",
      paddingTop: 10,
      paddingBottom: 10,
      marginLeft: 2,
      justifyContent: "space-between",
      flexDirection: "row"
  },
  box2: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
},
textInput: {
  width: 170,
  height: 40,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  borderWidth: 1,
},
     image:{
        width: 150,
        height: 150,
        marginTop: 2,
        borderColor: "#fff",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"white"
    },
    uploadFoto:{
        width: 150,
        height: 150,
        marginTop: 5,
        borderColor: "#ffcccc",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    txtHeader: {
      fontSize: 20,
      textAlign: 'center',
      color:'black',
      fontWeight : 'bold',
    },
    header: {
      height:70,
      backgroundColor:'#ffcccc',
      justifyContent:'center',
      alignItems:'center',

    },
});
export default addkastil;
