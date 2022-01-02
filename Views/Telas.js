import react from 'react'; 
 
 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

const cleanNote = (note) => {
    if (note.includes('2')) return note.split('2')[0]
    return note
}

export const checkAnswer = (note, answer) => note === cleanNote(answer)

const sheetNotes = ['do', 'do2', 'fa', 'fa2', 'la', 'la2', 'mi', 'mi2', 're', 're2', 'si', 'sol', 'sol2']
const notes = ['do', 'fa', 'la', 'mi', 're', 'si', 'sol'] 


const sheetImgs = {
    do: require('../ImagensApp/DoPartitura.png'),
    do2: require('../ImagensApp/Do2Partitura.png'),
    fa: require('../ImagensApp/FaPartitura.png'),
    fa2: require('../ImagensApp/Fa2Partitura.png'),
    la: require('../ImagensApp/LaPartitura.png'),
    la2: require('../ImagensApp/La2Partitura.png'),
    mi: require('../ImagensApp/MiPartitura.png'),
    mi2: require('../ImagensApp/Mi2Partitura.png'),
    re: require('../ImagensApp/RePartitura.png'),
    re2: require('../ImagensApp/Re2Partitura.png'),
    si: require('../ImagensApp/SiPartitura.png'),
    sol: require('../ImagensApp/SolPartitura.png'),
    sol2: require('../ImagensApp/Sol2Partitura.png'),
}

const buttonsImgs = {
    do: require('../ImagensApp/Do.png'),
    fa: require('../ImagensApp/Fa.png'),
    la: require('../ImagensApp/La.png'),
    mi: require('../ImagensApp/Mi.png'),
    re: require('../ImagensApp/Re.png'),
    si: require('../ImagensApp/Si.png'),
    sol: require('../ImagensApp/Sol.png'),
}

export function getSheet(current) {
    const note = sheetNotes[getRandomInt(0,13)]
    if (note === current) return getSheet(current)
    return {
        note,
        image: sheetImgs[note],
    }
}

export function getButtons(answer) {
    let possibleNotes = ['do', 'fa', 'la', 'mi', 're', 'si', 'sol']

    const cleanAnswer = cleanNote(answer)
    const button1 = { note: cleanAnswer, image: buttonsImgs[cleanAnswer] }

    possibleNotes = possibleNotes.filter((n)=> n != cleanAnswer)

    const note2Position = getRandomInt(0, 6)
    const note2 = possibleNotes[note2Position]
    const button2 = { note: note2, image: buttonsImgs[note2] }

    possibleNotes = possibleNotes.filter((n)=> n != note2)
    

    const note3Position = getRandomInt(0, 5)
    const note3 = possibleNotes[note3Position]
    const button3 = { note: note3, image: buttonsImgs[note3] }

    possibleNotes = possibleNotes.filter((n)=> n != note3)

    const note4Position = getRandomInt(0, 4)
    const note4 = possibleNotes[note4Position]
    const button4 = { note: note4, image: buttonsImgs[note4] }

    var random2 = getRandomInt(0, 4)
    
    switch(random2){
        case(0):
            return [button1, button2, button3, button4]
        break;
        case(1):
            return [button2, button1, button3, button4]
        break;
        case(2):
            return [button3, button2, button1, button4]
        break;
        case(3):
            return [button4, button2, button3, button1]
        break;
        default:
            return [button1, button2, button3, button4]
        break;
    }
    
}


