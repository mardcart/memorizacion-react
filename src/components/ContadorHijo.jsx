import React , {memo} from 'react'

const ContadorHijo = () => {
    console.log("contador hijo se renderiza")
  return (
    <div style={{border:"thin solid #000", marigin: "1rem" , padding: "1rem"}}>
        <h2>ContadorHijo</h2>
    </div>
  )
}

export default memo(ContadorHijo)