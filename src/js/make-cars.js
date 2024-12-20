import makeCarsList from "../templates/cars-list.hbs";
import makeSortedCarsList from "../templates/sorted-cars-list.hbs";
import { cars } from "./cars.js";

const layout = makeCarsList({ cars });

document.body.innerHTML = layout;

const sortBtn = document.querySelector("#btn");
const carsList = document.querySelector(".cars");

const parsePrice = (price) => parseFloat(price.slice(0, -1));

const renderCarsList = () => {
  carsList.remove();

  const sortedCars = cars.sort(
    (a, b) => parsePrice(b.price) - parsePrice(a.price)
  );

  const sortedLayout = makeSortedCarsList({ cars: sortedCars });

  document.body.innerHTML = sortedLayout;

  sortBtn.removeEventListener("click", renderCarsList);
};

sortBtn.addEventListener("click", renderCarsList);
