import React, { Component } from "react";
import { View,  Text,  StyleSheet,  ImageBackground, Alert, TextInput,  ScrollView,  Image,  FlatList,  TouchableOpacity} from "react-native";
import Header from "./Header";

import { Icon, Card, Divider } from "react-native-elements";
const axios = require("axios");

class Isi extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id_kastil: this.props.navigation.state.params.id_kastil

        };
      }
      componentDidMount() {
        axios
          .get(
            "https://yogiesetiawan.000webhostapp.com/isi.php?id_kastil="+this.state.id_kastil
          )
          .then(response => {
            console.log(response.data);
            this.setState({ data: response.data });
          })
          .catch(function(error) {
            // handle error
            console.log(error);
          });
      }


    render() {

            return (
              <ScrollView>
                <View style={styles.container}>
                <View style={styles.header}>
                <Text style={styles.txtHeader}> Kastil </Text>
                 </View>
                  <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({ item }) => (
                      <View style={styles.box1}>
                        <View style={styles.image}>
                          <Image
                            source={{
                              uri:
                                "https://yogiesetiawan.000webhostapp.com/image/"+item.image
                            }}
                            style={styles.image}
                          />
                        </View>
                      </View>
                    )}
                  />

                  <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({ item }) => (

                      <View style={styles.box2}>
                         <Text style={styles.text22}>ID Kastil  {item.id_kastil} </Text>

                       <ScrollView>
                         <Text style={styles.text22}>Nama Kastil : {item.nama_kastil}</Text>
                         <Text style={styles.text22}>Deskripsi   : {item.deskripsi}</Text>
                         <Text style={styles.text22}>ID Menu    : {item.id_menu}</Text>
                       </ScrollView>

                        <View style={styles.box4}>

                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={styles.editStyle}
                      onPress={() =>
                        this.props.navigation.navigate("update"
                          ,{kode_barang:item.id_kastil})}

                    >


                      <Text style={styles.texttombol}>Edit  </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={styles.hapusStyle}
                      onPress={() => {
                        Alert.alert(
                          "Hapus!",
                          "Yakin Hapus " + this.state.data[0].nama_kastil + " ?",
                          [
                            {
                              text: "Kembali",
                              onPress: () => console.log("Cancel ditekan"),
                              style: "cancel"
                            },
                            {
                              text: "Ya",
                              onPress: () =>
                                {
                                  axios
                                    .post(
                                      "https://yogiesetiawan.000webhostapp.com/deleteKastil.php",
                                      {
                                        id_kastil: this.state
                                          .id_kastil
                                      }
                                    )
                                    .then(response => {
                                      console.log(
                                        "Status  " + response
                                      );
                                      console.log(response);
                                      this.props.navigation.navigate('Kastil');
                                    })
                                    .catch(function(error) {
                                      console.log(error);
                                    });
                                }
                            }
                          ],
                          { cancelable: true }
                        );
                      }}
                    >

                      <Text style={styles.texttombol}>Hapus</Text>
                    </TouchableOpacity>
                  </View>
                      </View>
                    )}
                  />


                </View>
                </ScrollView>
   );
}
}



const styles = StyleSheet.create({
    container: {

      flexDirection: "column",
      alignItems: "center",
      backgroundColor : "#ffcccc"
    },
    box1: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    texttombol: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        fontSize: 18,
        color: "#fff"

    },
    text2: {
      fontSize: 14,
      textAlign: "left",
      justifyContent: 'flex-start',
      fontWeight: '100',
      color:"black",

    },
    text22: {
      fontSize: 14,
      textAlign: "left",
      justifyContent: 'flex-start',
      fontWeight: '100',
      color:"black",
      fontWeight: 'bold',

    },


      box2: {
        borderWidth: 1,
        marginTop: 15,
        height: 180,
        width:350,
        borderColor:"#ffcccc",
        backgroundColor:"white",
       opacity:0.8,
       paddingLeft : 30
      },
      box33: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginLeft: 30,
        marginRight: 30,
        paddingTop: 3,
        paddingBottom: 3,
        backgroundColor:"#ffcccc",
        paddingRight:100
      },
      box10: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginBottom: 30,
        marginLeft: 30,
        marginRight: 30,
        paddingTop: 3,
        paddingBottom: 3,
        backgroundColor:"#ffcccc",
        paddingRight:100
      },
      box4: {
        marginLeft: 35,
        marginRight: 30,
        paddingBottom: 20,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between"
      },
      editStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#ffcccc",
        borderColor:"#ffcccc",
        height: 40,
        borderWidth:1,
        borderRadius: 8,
        alignItems: "center",
        width: 120,
        paddingLeft: 10,
        paddingLeft: 10,
        marginRight:40
      },
      hapusStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#ffcccc",
        height: 40,
        borderRadius: 5,
        borderWidth:1,
        borderColor:"#ffcccc",
        alignItems: "center",
        width: 120,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight:20,
      },

      image: {
        width: 160,
        height: 160,
        borderColor: "black",
        borderWidth: 1,
        borderRadius:8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"white"
      },
      teksdetail: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        color: "black",
        fontSize: 20
      },
      txtHeader: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color:'black',
        fontWeight: 'bold',
      },
      header: {
        height:60,
        backgroundColor:'#ffcccc',
        justifyContent:'center',
        alignItems:'center'
      },

});
export default Isi;
