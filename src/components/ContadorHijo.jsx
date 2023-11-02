import React , {memo,useMemo} from 'react'

const ContadorHijo = ({contador,sumar,restar}) => {
    // let superNumero = 0;

    // for (let i = 0; i < 100000; i++) {
    //     superNumero ++;
        
    // }
     const superNumero = useMemo(() => {
        let numero = 0;
        for (let i = 0; i < 10000; i++) {
            numero ++;
            
        }
        return numero;
     }, [])

    console.log("contador hijo se renderiza")
  return (
    <div style={{border:"thin solid #000", marigin: "1rem" , padding: "1rem"}}>
        <h2>ContadorHijo</h2>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </nav>
        <h3>{superNumero}</h3>
        <h3>{contador}</h3>
    </div>
  )
}

export default memo(ContadorHijo)