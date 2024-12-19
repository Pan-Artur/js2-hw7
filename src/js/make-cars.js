import makeCarsList from "../templates/cars-list.hbs";
import { cars } from "./cars.js";

const layout = makeCarsList({ cars });

document.body.innerHTML = layout;