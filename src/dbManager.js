// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, setDoc, updateDoc, addDoc, deleteDoc  } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCPFErdLyozVar5KtV7dVLqNlbc24m7ebc",
  authDomain: "where-s-waldo-7a82b.firebaseapp.com",
  projectId: "where-s-waldo-7a82b",
  storageBucket: "where-s-waldo-7a82b.appspot.com",
  messagingSenderId: "524017739707",
  appId: "1:524017739707:web:52f57e7b15033e6852869e",
  measurementId: "G-BYMRNNNNKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

class ScoreEntry {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
};

async function getAnswerKey(db) {
    const answerKeyCol = collection(db, 'answerKey');
    const answerKeySnapshot = await getDocs(answerKeyCol);
    const answerKeyDB = answerKeySnapshot.docs.map(doc => doc.data());
    const sortedAnswerKey = answerKeyDB.sort((a, b) => a.index - b.index);
    return sortedAnswerKey;
}

async function getScoreboard(db) {
    const scoreboardCol = collection(db, 'scoreboard');
    const scoreboardSnapshot = await getDocs(scoreboardCol);
    const scoreboardDB = scoreboardSnapshot.docs.map(doc => doc.data());

    return scoreboardDB;
}

async function updateSavedScores(scoreboard) {

    for (let i = 0; i < scoreboard.length; i++) {
        //console.log(scoreboard[i].score)
        const docRef = doc(db, "scoreboard", i.toString())
        const newData = {
            name: scoreboard[i].name,
            score: scoreboard[i].score 
        }
        setDoc(docRef, newData);
    }

}

async function deleteScore(ref) {
    await deleteDoc(doc(db, "scoreboard", ref));
}

export { db, ScoreEntry, getAnswerKey, getScoreboard, updateSavedScores };
