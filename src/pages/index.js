import React, {useState} from 'react'





const Index = () =>{

    const [valor, setValor] = useState(0)

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


     </div>       


    )
}



export default Index;