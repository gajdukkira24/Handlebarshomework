import Handlebars from "handlebars";
import { products } from "./data.js";
import templateSrc from "./template.hbs";

const template = Handlebars.compile(templateSrc);
document.getElementById("app").innerHTML = template({ products });
