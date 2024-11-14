import '@esri/calcite-components/dist/calcite/calcite.css';
import './main.scss';
import './components/Loading.scss';
import './Application.scss';

const load = async (): Promise<void> => {
  // calcite assets
  const defineCustomElements = (await import('@esri/calcite-components/dist/loader')).defineCustomElements;
  defineCustomElements(window, { resourcesUrl: './calcite/assets' });

  // modules
  const Loading = (await import('./components/Loading')).default;
  const Application = (await import('./Application')).default;

  const title = 'Hello World!';

  const loading = new Loading({
    title,
  });

  new Application({
    title,
  });

  loading.end();
};

load();
