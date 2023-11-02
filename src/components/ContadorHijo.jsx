import React , {memo} from 'react'

const ContadorHijo = ({contador,sumar,restar}) => {
    console.log("contador hijo se renderiza")
  return (
    <div style={{border:"thin solid #000", marigin: "1rem" , padding: "1rem"}}>
        <h2>ContadorHijo</h2>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </nav>

        <h3>{contador}</h3>
    </div>
  )
}

export default memo(ContadorHijo)