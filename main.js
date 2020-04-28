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
  {
    type: 'Meat Pie',
    size: 'Real Big',
    crust: 'Meat Crust',
    price: 1,
    imageUrl: 'https://culinaryginger.com/wp-content/uploads/Minced-Beef-and-Onion-Pies-10-480x480.jpg',
    owner: 'Luke',
    aLaMode: true
  },
  {
    type: 'Pizza Pie',
    size: 'XL',
    crust: 'regular',
    price: 6,
    imageUrl: 'https://themercenaryresearcher.files.wordpress.com/2012/07/ginormous-pizza.jpg',
    owner: 'Michael',
    aLaMode: true
  },
  {
    type: 'Rhubarb',
    size: 'Pie Sized',
    crust: 'Normal',
    price: 2147483647,
    imageUrl: 'https://assets.kraftfoods.com/recipe_images/opendeploy/54036_640x428.jpg',
    owner: 'Matt',
    aLaMode: true
  },
];

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildPies = (pieCollection) => {
  let domString = '';

  for (let i = 0; i < pieCollection.length; i++) {
    const aLaModeText = (pieCollection[i].aLaMode) ? 'with Ice Cream' : 'without Ice Cream';

    domString += `
      <div class="pie">
        <h2>${pieCollection[i].type}</h2>
        <img src="${pieCollection[i].imageUrl}" alt="image of ${pieCollection[i].type} pie">
        <p>This ${pieCollection[i].type} pie is a ${pieCollection[i].size} pie, it's owned by ${pieCollection[i].owner}, and has a ${pieCollection[i].crust} crust and is served ${aLaModeText}.</p>
        <h4>Price: ${pieCollection[i].price}</h4>
      </div>
    `;
  }

  printToDom('#pieContainer', domString);
}

const filterPiesEvent = (event) => {
  const buttonID = event.target.id;
  const tempPieCollection = [];

  if (buttonID === 'all') {
    buildPies(pies);
    return;
  }

  for (let i = 0; i < pies.length; i++) {
    if (pies[i].owner === buttonID) {
      tempPieCollection.push(pies[i]);
    }
  }

  buildPies(tempPieCollection);
}


const clickEvents = () => {
  document.querySelector('#Luke').addEventListener('click', filterPiesEvent);
  document.querySelector('#Michael').addEventListener('click', filterPiesEvent);
  document.querySelector('#Matt').addEventListener('click', filterPiesEvent);
  document.querySelector('#all').addEventListener('click', filterPiesEvent)
}

const init = () => {
  buildPies(pies);
  clickEvents();
}

init();
