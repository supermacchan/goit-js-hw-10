import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');

inputEl.addEventListener('input', debounce(onSearchInput, DEBOUNCE_DELAY));

function onSearchInput(e) {
    const name = e.target.value.trim();
    if (name === "") {
        return;
    }
    fetchCountries(name);
}