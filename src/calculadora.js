import React, { useState } from 'react';
import './calculadora.css';
import CalculadoraService from './calculadora.service'



function Calculadora () {

  const [concatenarNumero, calcularNumeros] = CalculadoraService();
  const [txtNumeros, setTxtNumeros] = useState('0')
  const [numeroUm, setNumeroUm] = useState('')
  const [numeroDois, setNumeroDois] = useState(null)
  const [operacao, setOperacao] = useState(null)

  function adicioanarNumero(numero) {
    let resultado
    if (operacao === null) {
      resultado = concatenarNumero(numeroUm, numero)
      setNumeroUm(resultado)
    } else {
      resultado = concatenarNumero(numeroDois, numero)
      setNumeroDois(resultado)
    }
    setTxtNumeros(resultado)
  }

  function definirOperacao(op) {
    if (operacao === null) {
      setOperacao(op)
      return
    }
    if (numeroDois !== null) {
      const resultado = calcularNumeros(parseFloat(numeroUm), parseFloat(numeroDois), operacao)
      setOperacao(op)
      setNumeroUm(resultado.toString())
      setNumeroDois(null)
      setTxtNumeros(resultado.toString())
    }
  }

  function acaoCalcular() {
    if (numeroDois === null) {
      return
    }
    const resultado = calcularNumeros(parseFloat(numeroUm), parseFloat(numeroDois), operacao)
    setTxtNumeros(resultado)
    setNumeroUm('0')
    setNumeroDois(null)
  }
  function limparTudo() {
    setTxtNumeros('0')
    setNumeroUm('0')
    setNumeroDois(null)
    setOperacao(null)
  }

  return (
    <div className="main">
      <form name="MyForm" >
        <input type="text" 
               name="txtNumeros" 
               className="textview" 
               readOnly="readonly"
               value={txtNumeros}/>
      </form>
      <table>
        <tr>
          <td><input type="button" className="button" value="√" /></td>
          <td><input type="button" className="button" value="x²" /></td>
          <td><input type="button" className="button" value="⌫" onClick={() => adicioanarNumero('⌫')}/></td>
          <td><input type="button" className="button" value="÷" onClick={() => definirOperacao('/')}/></td>
        </tr>
        <tr>
          <td><input type="button" class="button" value="7" onClick={() => adicioanarNumero('7')}/></td>
          <td><input type="button" class="button" value="8" onClick={() => adicioanarNumero('8')}/></td>
          <td><input type="button" class="button" value="9" onClick={() => adicioanarNumero('9')}/></td>
          <td><input type="button" class="button" value="x" onClick={() => definirOperacao('*')}/></td>
        </tr>
        <tr>
          <td><input type="button" class="button" value="4" onClick={() => adicioanarNumero('4')}/></td>
          <td><input type="button" class="button" value="5" onClick={() => adicioanarNumero('5')}/></td>
          <td><input type="button" class="button" value="6" onClick={() => adicioanarNumero('6')}/></td>
          <td><input type="button" class="button" value="-" onClick={() => definirOperacao('-')}/></td>
        </tr>
        <tr>
          <td><input type="button" class="button" value="1" onClick={() => adicioanarNumero('1')}/></td>
          <td><input type="button" class="button" value="2" onClick={() => adicioanarNumero('2')}/></td>
          <td><input type="button" class="button" value="3" onClick={() => adicioanarNumero('3')}/></td>
          <td><input type="button" class="button" value="+" onClick={() => definirOperacao('+')}/></td>
        </tr>
        <tr>
          <td><input type="button" class="button" value="C" onClick={limparTudo}/></td>
          <td><input type="button" class="button" value="0" onClick={() => adicioanarNumero('0')}/></td>
          <td><input type="button" class="button" value="." onClick={() => adicioanarNumero('.')}/></td>
          <td><input type="button" class="button" value="=" onClick={acaoCalcular}/></td>
        </tr>
      </table>
    </div>
  )
}

export default Calculadora