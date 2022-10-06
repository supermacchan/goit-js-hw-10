import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

// fetchCountries("Ukraine");

const inputEl = document.querySelector('#search-box');

inputEl.addEventListener('input', onSearchInput);

function onSearchInput(e) {
    const name = e.target.value;
    fetchCountries(name);
}