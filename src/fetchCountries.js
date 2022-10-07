import Notiflix from 'notiflix';

const countryCard = document.querySelector('.country-info');

function fetchCountries(name) {
    fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data[0]);
            const markup = generateMarkup(data[0]);
            console.log(markup);
            countryCard.innerHTML = markup;
        })
        .catch(error => {
            console.log(error);
            Notiflix.Notify.failure("Oops, there is no country with that name");
        })
}

function generateMarkup(country) {
    return `<h2 class="country-name">
                <img class="country-flag" src="${country.flags.svg}" alt="${country.name.official}" width="40" height="25" />
                ${country.name.official}
            </h2>
            <ul class="country-properties">
                <li class="country-capital">Capital: ${country.capital}</li>
                <li class="country-population">Population: ${country.population}</li>
                <li class="country-langs">Languages: ${Object.values(country.languages)}</li>
            </ul>`
}

export { fetchCountries };

