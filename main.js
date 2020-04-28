const pies = [
  {
    type: 'Apple',
    size: 'Family',
    crust: 'Lattice',
    price: 30,
    imageUrl: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2013/07/salted-caramel-apple-pie-recipe-7.jpg',
    owner: 'Luke',
    aLaMode: true
  },
  {
    type: 'Pecan',
    size: 'Personal',
    crust: 'Basic Flaky',
    price: 3,
    imageUrl: 'https://choosingchia.com/jessh-jessh/uploads/2017/11/healthy-mini-pecan-pies-3.jpg',
    owner: 'Michael',
    aLaMode: false
  },
  {
    type: 'Blueberry',
    size: 'Regular',
    crust: 'Crumb',
    price: 400,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOFBwEDpKqKepcrS2NGLu-Pikregnef74tmFQkaEXHW5pOLVlv&usqp=CAU',
    owner: 'Matt',
    aLaMode: false
  },
];

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildPies = (pieCollection) => {
  let domString = '';

  for (let i = 0; i < pieCollection.length; i++) {
    domString += `
      <div class="pie">
        <h2>${pieCollection[i].type}</h2>
        <img src="${pieCollection[i].imageUrl}" alt="image of ${pieCollection[i].type} pie">
        <p>This ${pieCollection[i].type} pie is a ${pieCollection[i].size} pie, it's owned by ${pieCollection[i].owner}, and has a ${pieCollection[i].crust} crust.</p>
        <h4>Price: ${pieCollection[i].price}</h4>
      </div>
    `;
  }

  printToDom('#pieContainer', domString);
}

const init = () => {
  buildPies(pies);
}

init();
