import React from 'react'
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import Theme from '../Theme';
import Header from '../components/Header'

const DetailView = (props) => {
    return (
        <View style = {styles.container}>
            <Header title = "Karta projektu:"/>
            <View style = {styles.card}>
                {/* props.title w header*/}
                <Text style = {styles.caption}>Tytuł:</Text>
                <Text style = {styles.info}>{props.detail.title}</Text>
                <Text style = {styles.caption}>Autor:</Text>
                <Text style = {styles.info}>{props.detail.author}</Text>
                <Text style = {styles.caption}>Utworzony:</Text>
                <Text style = {styles.info}>{props.detail.academic_year}</Text>
                <Text style = {styles.caption}>Projekt Inżynierski:</Text>
                <Text style = {styles.info}>{props.detail.is_diploma ? "Tak": "Nie"}</Text>
                <Text style = {styles.caption}>Kategoria:</Text>
                <Text style = {styles.info}>{props.detail.category}</Text>
                <Text style = {styles.caption}>Pliki projektu:</Text>
                <Text onPress ={()=>{ Linking.openURL("http://kni.prz.edu.pl:5050/file/"+props.detail.id)}} 
                style ={styles.info}>
                    Pobierz
                </Text>
                { props.detail.files_link === null ? null :
                <View>
                    <Text style = {styles.caption}>Pliki dodatkowe:</Text>
                    <Text onPress ={()=>{ Linking.openURL(props.detail.files_link)}}  
                    style ={styles.info}>
                        Pobierz
                    </Text>
                </View>
                }
            </View>
            <TouchableOpacity style = {styles.button} onPress={()=>{props.setScene("Home")}}>
                <Text style = {styles.btnText}>Powrót do listy</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DetailView

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Theme.background
    },
    card:{
        backgroundColor:'#fff',
        margin: '5%',
        padding: 20,
        width: '90%',
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
    caption:{
        fontSize:16
    },
    info:{
        marginLeft:25,
        fontSize:20,
        fontStyle:'italic',
        padding: 5
    },
    button:{
        width:'90%',
        marginHorizontal:'5%',
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
    }
})
