import hyperscriptify from '../../../..';
import { h, Fragment, render } from 'preact';
import components from './components';
import propsify from "./propsify";

const App = hyperscriptify(document.getElementById('example').content, h, Fragment, components, { propsify });

const root = document.getElementById('root');
render(App, root);
