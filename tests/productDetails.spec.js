const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(productDetails('esponja','detergente'))).toBe(true);
    expect(productDetails('esponja','detergente')).toHaveLength(2);
    expect(typeof productDetails('esponja','detergente') [0] && typeof productDetails('esponja','detergente') [1]).toBe('object');
    expect(JSON.stringify(productDetails('mascara','alcool')[0]) !== JSON.stringify(productDetails('mascara','alcool')[1])).toBe(true);
    expect(productDetails('esponja','detergente')[0].details.productId.endsWith('123') && productDetails('esponja','detergente')[1].details.productId.endsWith('123')).toBe(true);
  
       
    // Teste se os dois productIds terminam com 123.
  });
});
