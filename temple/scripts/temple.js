
const requestURL = 'json/data.json';
const likeCounter = document.createElement("span")

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companies.forEach(displaycompanies);
  });

  
  function displaycompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let image = document.createElement('img');
    let phone = document.createElement('p');
    let address = document.createElement('p');
    let website = document.createElement('p');
    let email = document.createElement('p');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${company.name}`;

    image.setAttribute('src', company.image);
    image.setAttribute('alt', `image of ${company.name}`);
    image.setAttribute('loading', 'lazy');
    email.textContent = `${company.email}`;
    phone.textContent = `${company.phone}`;
    address.textContent = `${company.address}`;
    website.innerHTML = `<a href="${company.url}" target="_blank">Additional Information</a>`;
    // Add/append the section(card) with the h2 element
    card.appendChild(h2)
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(website);
    card.appendChild(image);


  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }


