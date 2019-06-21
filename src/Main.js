import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Menu from './Menu';
import Login from './Login';
import Home from './Home';
import Kastil from './Kastil';
import DetailKastil from './DetailKastil';
import addkastil from './addkastil';
import Isi from './Isi';


const AppNavigator = createStackNavigator(
        {
            Utama: Menu,
            Login:Login,
            Home:Home,
            Kastil:Kastil,
            DetailKastil:DetailKastil,
            addkastil:addkastil,
            Isi:Isi,
        },
        {
            initialRouteName: "Utama"
        }
        );
export default createAppContainer(AppNavigator);
