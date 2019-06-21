import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight,} from 'react-native';
import {ListItem } from 'react-native-elements'
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';


export default class DetailKastil extends React.Component {
  constructor(props) {
    super(props)
    prefik_url = 'http://wadaya.rey1024.com/api/uploads/';
    this.state = {
        categories: [],
        id_menu:this.props.navigation.state.params.id_menu,
        nama_menu:this.props.navigation.state.params.nama_menu,
    };
  }
  componentDidMount() {
    axios.get('https://yogiesetiawan.000webhostapp.com/getKastil.php?id_menu='+this.state.id_menu)
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
      <ScrollView>
        <View style={styles.container} >
          <View style={styles.header}>
            <Text style={styles.txtHeader}>  {this.state.nama_menu} </Text>
          </View>
          <FlatList
              keyExtractor = {(item, index) => index.toString()}
              data={this.state.categories}
              renderItem = {({ item }) => (
                <ListItem
                onPress={()=>     this.props.navigation.navigate('Isi',{id_kastil:item.id_kastil})}
                  title={item.nama_kastil}
                  leftAvatar={{ source: { uri: 'https://yogiesetiawan.000webhostapp.com/image/'+item.image} }}
                />
              )}
          />
          <View style={styles.box1}>
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={()=> this.props.navigation.navigate('addkastil') }>
                    <Text style={styles.buttonText}>ADD</Text>
                </TouchableHighlight>
                </View>
       </View>
       </ScrollView>
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
      marginTop: 5,
      marginBottom: 40,
      height: 40,
      width: 200,
      borderRadius: 5,
  },
});
