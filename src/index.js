import './styles.css';
import { output } from './convert';
const input = document.querySelector('input');
const p = document.querySelector('p')
const button = document.querySelector('button')
button.addEventListener('click', () => {
    p.innerHTML = `${output(input.value)} lbs`;
})
