import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Footer = () => {
    return (
        <View style = {styles.footer}>
            <Text>This app was created in Rzeszow University of Technology By J.L.</Text>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footer:{
        width:'100%',
        paddingVertical:15
    }
})
