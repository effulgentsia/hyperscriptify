import hyperscriptify from '../../..';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import components from './components';
import propsify from "./propsify";

const App = hyperscriptify(document.getElementById('example').content, React.createElement, React.Fragment, components, { propsify });

const root = createRoot(document.getElementById('root'));
root.render(App);
