import hyperscriptify from 'hyperscriptify';
import propsify from 'hyperscriptify-propsify-minimal';
import { h, Fragment, render } from 'preact';
import components from './components';

const App = hyperscriptify(document.getElementById('example').content, h, Fragment, components, { propsify });

const root = document.getElementById('root');
render(App, root);
