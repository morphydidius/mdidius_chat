import './styles/main.scss';
import Handlebars from 'handlebars/runtime';
import login from './pages/login/index';

// import { print } from './modules/sum';

const root = document.createElement('div');
// const template = Handlebars.compile("Names: {{name}}");
const template = Handlebars.compile(login);

// root.textContent = template({ name: "Nils" });
root.innerHTML = template();
// root.innerHTML = '<div>mytest</div>';

// document.body.append(root);