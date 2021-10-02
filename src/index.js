import './styles/main.scss';
import Handlebars from 'handlebars';

// import { print } from './modules/sum';

const root = document.createElement('div');
const template = Handlebars.compile("Names: {{name}}");

root.textContent = template({ name: "Nils" });

document.body.append(root);