import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatearDinero, calcularTotalPagar } from "./helpers";
import SweetAlert from "sweetalert2";

function App() {
  const [cantidad, setCantidad] = useState(5000000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);

  useEffect(() => {
    const resultadoTotalPagar = calcularTotalPagar(cantidad, meses);
    setTotal(resultadoTotalPagar);
  }, [cantidad, meses]);

  useEffect(() => {
    setPago(total / meses);
  }, [total]);

  // console.log(cantidad);
  const MIN = 100000;
  const MAX = 10000000;
  const STEP = 50000;
  function handleChange(e) {
    setCantidad(+e.target.value);
    // console.log(+e.target.value);
  }

  function handleClickDecremento() {
    const valor = cantidad - STEP;

    if (valor < MIN) {
      // alert("No se puede fai");
      SweetAlert.fire({
        title: "No se puede fai",
        text: "El valor no puede ser menor a $100.000",
        icon: "error",
      });
      return;
    }

    setCantidad(valor);
  }

  function handleClickIncremento() {
    const valor = cantidad + STEP;

    if (valor > MAX) {
      // alert("No tengo tanto mi fai");
      SweetAlert.fire({
        title: "No se puede fai",
        text: "El valor no puede ser mayor a $10,000.000",
        icon: "error",
      });
      return;
    }

    setCantidad(valor);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <div className="flex justify-between my-6">
        <Button operador="-" fn={handleClickDecremento} />
        <Button operador="+" fn={handleClickIncremento} />
      </div>
      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />
      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {formatearDinero(cantidad)}
      </p>
      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elija un <span className="text-indigo-600">Plazo </span> pa pagar
      </h2>
      <select
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
        value={meses}
        onChange={(e) => setMeses(+e.target.value)}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>
      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen <span className="text-indigo-600">de pagos </span>
        </h2>

        <p className="text-xl text-gray-500 text-center font-bold">
          {meses} Meses
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {formatearDinero(total)} Total a pagar
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {formatearDinero(pago)} Total a pagar de cada mes
        </p>
      </div>
      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Desarrollado por:{" "}
        <span className="text-indigo-600">Brayan Marin Guirales </span>
      </h2>
      <a
        className="block my-5"
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/Merxxotas"
      >
        @Merxxotas Github
      </a>
      <a
        className="block mb-5"
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.linkedin.com/in/brayan-marin-guirales/"
      >
        Vísita mi perfil de LinkedIn.
      </a>
    </div>
  );
}

export default App;
