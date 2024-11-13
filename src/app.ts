import '@esri/calcite-components/dist/calcite/calcite.css';
import './main.scss';

// calcite assets
import { defineCustomElements } from '@esri/calcite-components/dist/loader';
defineCustomElements(window, { resourcesUrl: './calcite/assets' });

import Application from './Application';

const load = async (): Promise<void> => {
  new Application();
};

load();
