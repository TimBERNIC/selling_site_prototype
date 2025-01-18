const newItem = {
  name: "",
  image: "",
  price: "",
};

const itemsForSale = [
  {
    name: "GIGABYTE RTX 3060 ti 8go ",
    image: '<img src="../IMG/img2.jpg">',
    price: 329,
    btn: null,
  },
  {
    name: "CPU AMD R7 5800x3d",
    image: '<img src="../IMG/img3.jpg">',
    price: 179,
    btn: null,
  },
  {
    name: "GIGABYTE Carte mère B650 ",
    image: '<img src="../IMG/sImg3.jpg">',
    price: 169,
    btn: null,
  },
  {
    name: "HYPERX Ram 16Gb (8Gbx2) DDR4, 3000 CL16",
    image: '<img src="../IMG/sImg1.jpg">',
    price: 79,
    btn: null,
  },
  {
    name: "CORSAIR Ventirad NHS3000",
    image: '<img src="../IMG/sImg2.jpg">',
    price: 65,
    btn: null,
  },
  {
    name: "LEXAR SSD 1 To M.2 NVME 2280 PCIE Gen3<",
    image: '<img src="../IMG/sImg4.jpg">',
    price: 94,
    btn: null,
  },
  {
    name: "Seasonic PSU 750w ATX 3.0",
    image: '<img src="../IMG/sImg5.jpg">',
    price: 79,
    btn: null,
  },
  {
    name: "NZXT H7 Air flow",
    image: '<img src="../IMG/sImg6.jpg">',
    price: 149,
    btn: null,
  },
];

const basket = [];

// Mise a jour du la liste d'objet à Vendre
itemsForSale.map((element, index) => {
  // Récupération de la table
  const hardwareTable = document.getElementById("hardwareTable");

  // Création de la ligne de tableau
  const newItemForSale = document.createElement("tr");

  // Affichage du Nom
  const newItemForSaleName = document.createElement("td");
  newItemForSaleName.textContent = element.name;
  newItemForSale.appendChild(newItemForSaleName);

  // Affichage de l'image
  const newItemForSaleImg = document.createElement("td");
  newItemForSaleImg.innerHTML = element.image;
  newItemForSale.appendChild(newItemForSaleImg);

  // Affichage du Prix
  const newItemForSalePrice = document.createElement("td");
  newItemForSalePrice.textContent = element.price + " €";
  newItemForSale.appendChild(newItemForSalePrice);

  // Création d'un bouton avec un identifiant unique
  const newItemForSaleBtn = document.createElement("button");
  newItemForSaleBtn.className = "addToBasketBtn";
  newItemForSaleBtn.textContent = "Ajouter au Panier";
  // Associer l'index de l'objet
  newItemForSaleBtn.setAttribute("data-index", index);
  newItemForSale.appendChild(newItemForSaleBtn);

  // Ajout de la ligne à la table
  hardwareTable.appendChild(newItemForSale);
});

// Actualisation du prix du panier
const totalPrice = () =>
  basket.reduce((accumulator, itemIndex) => {
    return accumulator + itemIndex.price;
  }, 0);
totalPriceBox.innerHTML = "Prix du panier: " + totalPrice() + " €";

// Fonction pour ajouter/Supprimer du panier
const addToBasket = (event) => {
  // Récupérer l'index de l'objet associé au bouton
  const button = event.target;
  const itemIndex = button.getAttribute("data-index");
  const selectedItem = itemsForSale[itemIndex];

  //Ajout de l'objet au niveau Tableau Basket
  basket.push(selectedItem);

  // Ajout de l'article au panier (par exemple, dans une autre table)
  const basketTable = document.getElementById("basketTable");

  const newBasketItem = document.createElement("td");
  newBasketItem.innerHTML = `
  <tr>${selectedItem.name}</tr>
  <tr>${selectedItem.image}</tr>
  <tr>${selectedItem.price} €</tr>
  `;

  // Ajouter un bouton pour retirer du panier
  const removeBtn = document.createElement("button");
  removeBtn.className = "removeFromBasketBtn";
  removeBtn.textContent = "Retirer du Panier";
  newBasketItem.appendChild(removeBtn);
  basketTable.appendChild(newBasketItem);

  // Actualisation du prix du panier
  totalPrice();
  totalPriceBox.innerHTML = "Prix du panier: " + totalPrice() + " €";

  // Gestion de suppression d'article
  removeBtn.addEventListener("click", () => {
    basketTable.removeChild(newBasketItem);
    basket.splice(basket.indexOf(selectedItem), 1);
    //Réactualisation du panier
    totalPrice();
    totalPriceBox.innerHTML = "Prix du panier: " + totalPrice() + " €";
  });
};

// Ajouter des gestionnaires d'événements pour chaque bouton Basket
document.addEventListener("DOMContentLoaded", () => {
  const addToBasketBtns = document.querySelectorAll(".addToBasketBtn");
  addToBasketBtns.forEach((button) => {
    button.addEventListener("click", addToBasket);
  });
});

//Ouvrir le menu du Panier
const basketInput = document.getElementById("basketInput");
const basketBox = document.getElementById("basketBox");
basketInput.addEventListener("click", () => {
  if (basketBox.id === "basketBox") {
    basketBox.id = "basketBoxTransition";
  } else {
    basketBox.id = "basketBox";
  }
});
