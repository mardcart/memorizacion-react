import './App.css';
import Contador from './components/Contador';

function App() {
  return (
    <div className="App">
      <h2>memorizador en react</h2>
      <hr/>
      <h3>memo</h3>
      <ul>
        <li>Se encarga de memorizar un componente</li>
        <li>lo vuelve a memorizar al momento de que sus <strong>props</strong> cambian</li>
        <li>evita re-renderizados</li>
        <li>hay que evitar en la medida de lo posile, pues podria ser mas costosa ka tarea de memorizacion que la renderizacion del componente</li>
        <li>
            usalo cuando:
            <ul>
              <li>tenemos muchos elementos renderizado en la lista</li>
              <li>llamamos datos de APIS</li>
              <li>un componente se vuelve muy pesado</li>
              <li>salen alertas de rendimientos en la consola</li>
            </ul>

        </li>
      </ul>
      <h3>useCallBack</h3>
      <ul>
        <li>memoriza una funcion, para no volvera a definir en cada render</li>
        <li>usala siempre que se pase una funcion como <strong>props</strong> a un componente memrizado</li>
        <li>usala siempre que se pase una funcion como parametros de efecto</li>
      </ul>
      <hr/>
      <Contador/>
    </div>
  );
}

export default App;
