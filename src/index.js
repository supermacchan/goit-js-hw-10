import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const countryCard = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');

inputEl.addEventListener('input', debounce(onSearchInput, DEBOUNCE_DELAY));

function onSearchInput(e) {
    const name = e.target.value.trim();
    if (name === "") {
        countryList.innerHTML = '';
        countryCard.innerHTML = '';
        return;
    }
    fetchCountries(name);
}


