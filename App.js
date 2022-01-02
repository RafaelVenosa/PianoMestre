
import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Image, SafeAreaView, Platform, StatusBar, ImageBackground, View } from 'react-native';
import { checkAnswer, getButtons, getSheet} from './Views/Telas'

export default function App() {
  const [sheet, setSheet] = useState(getSheet())
  const [buttonsNotes, setButtonsNotes] = useState([])

  useEffect(() => {
    if (sheet) {
      const buttons = getButtons(sheet.note)
      setButtonsNotes(buttons)
    }
  }, [sheet])
  
  const onNotePress = (note, selectedIndex) => {
    if (checkAnswer(note, sheet.note)) {
      setTimeout(() => setSheet(getSheet(sheet.note)), 400)
      return
    }
    const updatedButtonsNotes = [...buttonsNotes]
    updatedButtonsNotes[selectedIndex] = { 
      ...updatedButtonsNotes[selectedIndex],
      error: true 
    }
    setButtonsNotes(updatedButtonsNotes)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
          style = {styles.corFundo}
          source ={require("./ImagensApp/Tomdobranco.png")}>
        <View style={styles.container}>
          <Image style={
            styles.image1
            }
            source ={sheet.image}/>
          <View style={
            styles.flexStyle1
            }>
            {buttonsNotes.map((buttonNote, index) => {
              return (
                <TouchableOpacity
                  style={
                    styles.optionButton
                  }
                  onPress= {() => onNotePress(buttonNote.note, index)}
                  key={index}
                >
                <Image  style={
                  styles.image
                } 
                source ={buttonNote.image}
                resizeMode = "contain"
                />
                {buttonNote.error && 
                  <Image style={styles.wrongStyle} source= {require('./ImagensApp/Errado.png')}/>
                }
                </TouchableOpacity>  
              )
            })}            
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  startButton: {
    height: 116,
    width: 135,
    left: 8,
    margin: 5,
  },
  optionButton: {
    height: 130,
    width: '45%',
    left: 8,
    margin: 5,
    marginBottom: 45

  },
  corFundo: {
    flex: 1
  },
  image:{
    height: '100%',
    width: '100%',
  },
  image1:{
    height: 180,
    width: 200,
  },
  flexStyle1:{
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    marginTop: 15
  },
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flexDirection: 'column',
    alignItems: 'center',
    top: 40
  },
  safeArea: {
    flex: 1
  },
  wrongStyle: {
    height: 30,
    width: 30,
    marginTop: 8,
    marginLeft: 70
  },
});
