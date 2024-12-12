//2-Uma fábrica de bolachas produz pacotes com 500 gramas cada e tem disponível um banco de dados
//  contendo o peso de todos os pacotes por lote produzido. A partir desses dados, a fábrica quer
//  saber qual a variação do maior e do menor pacote e quantos pacotes estão acima e quantos pacotes
//  estão abaixo. Caso a variação ocorra em mais de 20% do lote, deve mostrar uma mensagem dizendo
//  "lote com alta divergência", caso contrário, mostrar mensagem, "lote padrão". Gere um array contendo
//  valores aleatórios entre 400 e 600, para poder usá-lo no exercício.



// Função para gerar um array de pesos aleatórios entre 400 e 600
function generateWeightsArray(size: number): number[] {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 201) + 400);
}

// Função para calcular a variação do peso dos pacotes
function calculateWeightVariation(weights: number[]): { min: number, max: number, above: number, below: number, standard: string } {
  const minWeight = Math.min(...weights);
  const maxWeight = Math.max(...weights);
  const weightRange = maxWeight - minWeight;
  const aboveCount = weights.filter(weight => weight > 500).length;
  const belowCount = weights.filter(weight => weight < 500).length;
  const highDivergence = weightRange > (0.20 * 500);

  return {
      min: minWeight,
      max: maxWeight,
      above: aboveCount,
      below: belowCount,
      standard: highDivergence ? "lote com alta divergência" : "lote padrão"
  };
}

// Exemplo de uso
const weights = generateWeightsArray(100);
const variation = calculateWeightVariation(weights);

console.log(`Menor peso: ${variation.min} gramas`);
console.log(`Maior peso: ${variation.max} gramas`);
console.log(`Pacotes acima do peso: ${variation.above}`);
console.log(`Pacotes abaixo do peso: ${variation.below}`);
console.log(`Status do lote: ${variation.standard}`);
