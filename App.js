import React, {useState, useEffect} from 'react';
import { StyleSheet, View, TouchableNativeFeedback, Alert} from 'react-native';
import Theme from './Theme';
import DetailView from './Views/DetailView';
import ListView from './Views/ListView';
import About from './Views/About';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [select, setSelect] = useState('Kategorie')
  const [sort, setSort] = useState('Sortowanie')
  const [scene, setScene] = useState("Home")
  const [detail, setDetail] = useState({})
  const [itemList, setItemList] = useState()
  const [isGeneral, setIsGeneral] = useState(true)
  const [Data, setData] = useState([])
  const [categories, setCategories] = useState([])
  const [primaryData, setPrimaryData] = useState([])
  const myAlert = () =>
    Alert.alert(
      "Aplikacja jest offline",
      "Jeśli wcześniej pobrała kopię listy projektów zostanie ona za chwilę wczytana",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      {cancelable: true}
    );
  const save = async(name, data) =>{
    try {
      const jsonValue = JSON.stringify(data)
      await AsyncStorage.setItem(name, jsonValue)
    } catch (e) {
      // saving error
    }
  }
  const read = async(name) =>{
    try {
      const jsonValue = await AsyncStorage.getItem(name)
      if(jsonValue != null)
      {
        if(name == 'projectData')
        {
          setData(JSON.parse(jsonValue))
          setPrimaryData(JSON.parse(jsonValue))
        }
        else
        {
          setCategories(["Wszystkie",...JSON.parse(jsonValue)])
        }
      }
    } catch(e) {
      // error reading value
    }
  }
  useEffect(()=>{
    fetch(
      "http://kni.prz.edu.pl:5050/projects")
      //"http://fesz.aqatl.pl:5050/projects")
                  .then(response => {
                    if(response.ok)
                    {
                      return response.json()
                    }
                    throw response
                  })
                  .then(data => {
                      save('projectData',data) 
                      setData(data)
                      setPrimaryData(data)
                  })
                  .catch((error) => {
                    myAlert()
                    read('projectData')
                  });
    fetch(
      "http://kni.prz.edu.pl:5050/categories")
      //"http://fesz.aqatl.pl:5050/categories")
                  .then(response => {
                    if(response.ok)
                    {
                      return response.json()
                    }
                    throw response
                  })
                  .then(data => {
                      save('projectCategories',data)
                      setCategories(["Wszystkie",...data])
                  })
                  .catch((error) => {
                    read('projectCategories')
                  })
  },[])
  return(
    scene === "Home" ?
      <ListView select = {select} setSelect={setSelect} sort={sort} setSort={setSort} Data = {Data} setData = {setData} primaryData = {primaryData} categories = {categories} setScene = {setScene} setDetail = {setDetail} itemList = {itemList} setItemList = {setItemList} isGeneral = {isGeneral} setIsGeneral = {setIsGeneral}/>:
      scene === "About" ? <About setScene = {setScene} /> : <DetailView setScene = {setScene} detail = {detail}/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.background
  },
  listContainer:{
    width:'100%',
    padding:'5%',
    marginVertical: 20,
    backgroundColor:'#fff',
    marginVertical: 10,
    backgroundColor: Theme.background
  }
});
