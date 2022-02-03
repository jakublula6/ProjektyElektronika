import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Theme from '../Theme'

const Header = (props) => {
    return (
        <View style = {[styles.header,props.style /* Sprawdzić kolejność */]}> 
            <Text style ={styles.headerText} >{props.title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        marginTop:50
    },
    headerText:{
        textAlign:'center',
        fontSize: 32,
        fontWeight:'700',
        color: Theme.fontColor
    }
})
