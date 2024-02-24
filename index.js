// we only import the functions we want to use 
import { initializeApp } from 'firebase/app'

// Import confidential data
import { firebaseConfig } from './firebaseconfig'

// we import the function that'll connect the web to the storage
import { getFirestore, collection, getDocs } from 'firebase/firestore'


  // to connect your app to your firebase stuffs
 const app = initializeApp(firebaseConfig)

//   to connect the website to the database
const db = getFirestore(app)

const col_ref = collection(db, 'quotes')
async function getquote(){
    const quotesSnapshot = await getDocs(col_ref)
    const quoteList = quotesSnapshot.docs.map(doc => doc.data())
    return quoteList
}

// let quotes = getquote()

// console.log(quotes)
// export default quotes;
getDocs(col_ref).then((snapshot)=>{

    console.log(snapshot);

})