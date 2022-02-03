import React from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import Theme from '../Theme';

export default function About (props) {
  return (
    <ScrollView style = {styles.container}>
      <Text style = {styles.title}> About this app </Text>
      <Text style = {styles.mainText}>This app was created in Rzeszow University of Technology</Text>
      <Text style = {styles.mainText}>Some tools and frameworks, and the app itself, are based on MIT license:</Text>
      {/*Rozdzielić jakoś poszczególnych gości od licencji */}
      <Text style = {styles.mainText}>
            The MIT License (MIT)

            Expo : Copyright (c) 2015-present 650 Industries, Inc. (aka Expo)
            Select Dropdown: Copyright 2021 Adel Reda
            Async Storage: Copyright (c) 2015-present, Facebook, Inc.
            React Native Screens (installed but probably unused) Copyright (c) 2018 Krzysztof Magiera
            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:

            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.

            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
        </Text>
        <TouchableOpacity  style = {styles.button} onPress={()=>{props.setScene("Home")}}>
            <Text style = {styles.btnText}>Powrót</Text>
        </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:Theme.background
    },
    title:{
        fontSize:38,
        fontWeight:'900',
        color:'white',
        textAlign:'center',
        padding:30,
        marginTop:20
    },
    mainText:{
        paddingHorizontal:25,
        paddingVertical:10,
        fontSize:16
    },
    button:{
        width:'60%',
        marginHorizontal:'20%',
        marginVertical:20,
        backgroundColor:'white',
        padding:20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.5,
        shadowRadius: 12,
        elevation: 19,
        borderRadius: 5
    },
    btnText:{
        fontSize:18,
        textAlign:'center'
    },
});