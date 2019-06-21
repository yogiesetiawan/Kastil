import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight} from 'react-native';
import {ListItem } from 'react-native-elements'
import axios from 'axios';


export default class Kastil extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        categories: [],
    };
  }
  componentDidMount() {
    axios.get('https://yogiesetiawan.000webhostapp.com/getMenu.php')
      .then(res => {
        const categories = res.data;
        console.log(categories);
        this.setState({ categories });
      })
      .catch(function (error){
        console.log(error);
    })
  }

  render() {
    return (

        <View style={styles.container} >
          <View style={styles.header}>
            <Text style={styles.txtHeader}> Kastil </Text>
          </View>
          <FlatList
              keyExtractor = {(item, index) => index.toString()}
              data={this.state.categories}
              renderItem = {({ item }) => (
                <ListItem
                  onPress={()=>this.props.navigation.navigate("DetailKastil",{id_menu:item.id_menu,nama_menu:item.nama_menu,keterangan:item.keterangan,image:item.image})}
                  title={item.nama_menu}
                  leftAvatar={{ source: { uri: 'https://yogiesetiawan.000webhostapp.com/image/'+item.image} }}
                />
              )}
          />

       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
       flex: 1,
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
    alignItems:'center'
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
