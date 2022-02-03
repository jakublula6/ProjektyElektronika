import React, {useState} from 'react'
import { StyleSheet, TextInput, View, Button, Keyboard, CheckBox} from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'

export default function Toolbar(props){
    const submit =()=>{
        Keyboard.dismiss()
        props.search()
    }
    const condicions = ['domyślne','data', 'tytuł','dyplomowe']
    return (
    <View style = {styles.container} >
        <View style = {styles.level}>
            <TextInput
            style = {styles.searchField}
            onChangeText={props.setSearchedValue}
            value={props.searchedValue}
            placeholder="Szukaj"
            onSubmitEditing={submit}
            />
           
            <View style = {styles.btn}>
                <Button 
                title = "szukaj"
                color = "gray"
                onPress = {submit}/>
            </View>
        </View>
        <View style = {styles.level}>
            <SelectDropdown
                data={props.categories}
                defaultButtonText={props.select}
                buttonStyle = {styles.dropdown}
                onSelect={(selectedItem, index) => {
                    props.setSelect(selectedItem)
                    props.category(selectedItem)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />
            <SelectDropdown
                data={condicions}
                defaultButtonText={props.sort}
                buttonStyle = {styles.dropdown}
                onSelect={(selectedItem, index) => {
                    selectedItem !='domyślne'? props.setSort(selectedItem): props.setSort('Sortowanie')
                    props.sortList(selectedItem)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem !='domyślne'?  selectedItem : 'Sortowanie'
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:'90%',
        backgroundColor:'#fff',
        marginVertical:10,
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
    level:{
        flexDirection:'row',
        width:'100%'
    },
    searchField:{
        width: '70%',
        fontSize:20,
        padding: 4
    },
    btn:{
        width:'30%',
        padding:5
    },
    dropdown:{
        width:'50%'
    }
})
