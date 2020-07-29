import React from 'react';
import ReactDOM from 'react-dom'
import Calculadora from './calculadora';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Calculadora', () => {

  it('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calculadora />, div);
    ReactDOM.unmountComponentAtNode(div);

  });

  it('deve limpar o campo de números', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTestId('txtNumeros')).toHaveValue('0');
  });

  it('deve somar 2 + 3 e obter 5', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('5');
  })
  it('deve somar 2 - 3 e obter -1', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('-1');
  })
  it('deve somar 2 * 3 e obter 6', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('6');
  })
  it('deve somar 4 / 2 e obter 2', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('4'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('2');
  })


});