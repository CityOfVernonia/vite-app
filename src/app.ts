import '@esri/calcite-components/dist/calcite/calcite.css';
import './main.scss';
// import './scss/arcgis.scss';
import './components/Loading.scss';
import './components/Application.scss';

const load = async (): Promise<void> => {
  // arcgis config
  // const esriConfig = (await import('@arcgis/core/config')).default;
  // esriConfig.portalUrl = 'https://gis.vernonia-or.gov/portal';
  // esriConfig.assetsPath = './arcgis';

  // calcite assets
  const defineCustomElements = (await import('@esri/calcite-components/dist/loader')).defineCustomElements;
  defineCustomElements(window, { resourcesUrl: './calcite/assets' });

  // arcgis modules
  // const Map = (await import('@arcgis/core/Map')).default;
  // const MapView = (await import('@arcgis/core/views/MapView')).default;
  // const Basemap = (await import('@arcgis/core/Basemap')).default;
  // const FeatureLayer = (await import('@arcgis/core/layers/FeatureLayer')).default;

  // application modules
  const Loading = (await import('./components/Loading')).default;
  const Application = (await import('./components/Application')).default;

  const title = 'Hello World!';

  const loading = new Loading({
    title,
  });

  // const cityLimits = new FeatureLayer({
  //   portalItem: { id: '5e1e805849ac407a8c34945c781c1d54' },
  // });

  // await cityLimits.load();

  // const view = new MapView({
  //   map: new Map({
  //     basemap: new Basemap({
  //       portalItem: {
  //         id: '6e9f78f3a26f48c89575941141fd4ac3',
  //       },
  //     }),
  //     layers: [cityLimits],
  //   }),
  //   extent: cityLimits.fullExtent.clone(),
  //   constraints: {
  //     geometry: cityLimits.fullExtent.clone().expand(3),
  //     minScale: 40000,
  //     rotationEnabled: false,
  //   },
  // });

  // view.ui.remove('zoom');

  new Application({
    title,
  });

  loading.end();
};

load();
