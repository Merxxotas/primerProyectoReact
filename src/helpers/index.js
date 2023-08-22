const formatearDinero = (valor) => {
  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  });
  return formatter.format(valor);
};

const calcularTotalPagar = (cantidad, plazo) => {
  let total;

  // mientras mayor es la cantidad, menor es el interés
  if (cantidad < 3000000) {
    total = cantidad * 1.5;
  } else if (cantidad >= 3000000 && cantidad < 6000000) {
    total = cantidad * 1.4;
  } else if (cantidad >= 6000000 && cantidad < 8000000) {
    total = cantidad * 1.3;
  } else {
    total = cantidad * 1.2;
  }

  // plazo - más plazo, mayor interés
  if (plazo === 6) {
    total *= 1.1;
  } else if (plazo === 12) {
    total *= 1.2;
  } else {
    total *= 1.3;
  }
  return total;
};

export { formatearDinero, calcularTotalPagar };
