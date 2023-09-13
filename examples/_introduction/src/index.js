import hyperscriptify from 'hyperscriptify';
import propsify from "hyperscriptify-propsify-standard";
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import components from './components';

const App = hyperscriptify(document.getElementById('example').content, React.createElement, React.Fragment, components, { propsify });

const root = createRoot(document.getElementById('root'));
root.render(App);
