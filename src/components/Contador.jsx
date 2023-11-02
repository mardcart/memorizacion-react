import React, { useState,useCallback } from 'react'
import ContadorHijo from './ContadorHijo'

const Contador = () => {
    const [contador, setContador] = useState(0)
    const [input, setInput] = useState("")

//    const sumar =()=>setContador(contador + 1)
    const sumar = useCallback(()=>setContador(contador + 1),[contador])

//   const restar=()=>setContador(contador - 1)
    const restar = useCallback(()=>setContador(contador-1),[contador])
    const onChangeInput = (e)=>setInput(e.target.value)
  return (
    <div>
        <h3>Contador</h3>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </nav>
        <h3>{contador}</h3>
        <input type='text' onChange={onChangeInput} value={input}/>
        <ContadorHijo contador={contador} sumar={sumar} restar={restar}/>
    </div>
  )
}

export default Contador