// Em regex, cada símbolo é um metacaractere, pois possuem funções especiais
// Símbolos || Pattern || Match


//                  Constructor:
// O objeto RegExp é um construtor de expressões regulares ou patterns.
// Sintaxe: var text = new RegExp(pattern, [, modifier]);

// O parâmetro pattern define o padrão de busca.
// O parâmetro modifier (flag ou chave) é opcional e define se a busca será ou não global, se será caseSensitive ou caseInsensitive e define também se a busca será ou não multilinhas

// O padrão deve começar e terminar com '/'


//                  Modificador:
// Os modifcadores impõem as condições para a busca.

// i: a busca se torna caseInsensitive
// g: a busca será para todas as ocorrências, e não para a primeira
// m: busca multilinhas
// gi: todas as condições anteriores serão satisfeitas

//Ex.: 
//  /ala/i: vai buscar o padrão 'ala' nas palavras de um texto
let var_test_a = ['mala', 'MaLa', 'alameda', 'something different'];

// Com o modificador 'i'
var_test_a.forEach((item)=> (/ala/i.test(item) ? console.log(true) : console.log(false))); //--> Output: true, true, true, false
console.log('#########################');
// Sem o modificador 'i'
var_test_a.forEach((item)=> (/ala/.test(item) ? console.log(true) : console.log(false))); //--> Output: true, false, true, false


//                  Agrupadores:
// Os agrupadores se destinam a definir uma faixa de busca
//Ex.: 
//  [xyz]: a busca se faz pelos caracteres xyz
//  [^xyz]: o sinal ^ significa negação, ou seja, os caracteres dentro do agrupador não serão buscados
//  [0-9]: procura caracteres entre 0 e 9 inclusive
//  [a-zA-Z]: busca feita para caracteres de a à z e de A à Z
//  [x|y|z]: a busca se faz por x ou por y ou por z
//  x|y|z: a diferença entre este e o de cima é que esse só procura a letra ou palavra, enquanto que o de cima procura a palavra e as letras da palavra colocada como parâmetro

let var_test_b = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip \
ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat \
nulla pariatur. \
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
console.log('#########################');
console.log(var_test_b.match(/[^a-zA-Z]/g));