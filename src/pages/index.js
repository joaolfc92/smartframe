import React, {useState, useEffect} from 'react'


import firebase from '../lib/firebase'


const db = firebase.firestore()





const Index = () =>{

    const [valor, setValor] = useState(0)
    const [data, setData] = useState([])
    useEffect(()=>{
        db.collection('testes').onSnapshot(function(querySnapshot) {
            const docs = []
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, doc.data());
                docs.push(doc.data())
            })
            setData(docs)
        });
        
    }, [])

    const incrementar = () =>{
        setValor(valor+1);
    }

    const diminuir = () => {
        setValor(valor-1)
    }

    return(

     <div>

        <h1>Página Inicial {valor}</h1>
        <button onClick={incrementar} >incrementar</button>
        <button onClick={diminuir} >Diminuir</button>

        <pre>

            {JSON.stringify(data, null, 2)}

        </pre>


     </div>       


    )
}



export default Index;