import React from 'react';
import './calculadora.css';
import { Button, Row, Col, Divider } from 'antd';


function Calculadora () {
  return (
    <div className="main">
      <form name="MyForm">
        <input type="text" name="textview" className="textview"/>
      </form>
      <table>
        <tr>
          <td><input type="button" className="button" value="√"/></td>
          <td><input type="button" className="button" value="x²"/></td>
          <td><input type="button" className="button" value="⌫"/></td>
          <td><input type="button" className="button" value="÷"/></td>
        </tr>
        <tr>
          <td><input type="button" class="button" value="7"/></td>
          <td><input type="button" class="button" value="8"/></td>
          <td><input type="button" class="button" value="9"/></td>
          <td><input type="button" class="button" value="X"/></td>
        </tr>
        <tr>
          <td><input type="button" class="button" value="4"/></td>
          <td><input type="button" class="button" value="5"/></td>
          <td><input type="button" class="button" value="6"/></td>
          <td><input type="button" class="button" value="-"/></td>
        </tr>
        <tr>
          <td><input type="button" class="button" value="1"/></td>
          <td><input type="button" class="button" value="2"/></td>
          <td><input type="button" class="button" value="3"/></td>
          <td><input type="button" class="button" value="+"/></td>
        </tr>
        <tr>
          <td><input type="button" class="button" value="C"/></td>
          <td><input type="button" class="button" value="0"/></td>
          <td><input type="button" class="button" value="."/></td>
          <td><input type="button" class="button" value="="/></td>
        </tr>
      </table>
    </div>
  )
}

export default Calculadora