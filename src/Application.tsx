import esri = __esri;
import { subclass } from '@arcgis/core/core/accessorSupport/decorators';
import Widget from '@arcgis/core/widgets/Widget';
import { tsx } from '@arcgis/core/widgets/support/widget';

import logoSvg from './support/logo';

const CSS = {
  header: 'application-header',
  headerTitle: 'application-header_title',
};

@subclass('Application')
export default class Application extends Widget {
  container = document.createElement('calcite-shell');

  constructor(properties?: esri.WidgetProperties) {
    super(properties);
    document.body.appendChild(this.container);
  }

  render(): tsx.JSX.Element {
    return (
      <calcite-shell>
        {/* header */}
        <div class={CSS.header} slot="header">
          <div class={CSS.headerTitle}>
            <img src={logoSvg}></img>
            <div>vite-app</div>
          </div>
        </div>
        {/* start shell panel */}
        <calcite-shell-panel position="start" slot="panel-start">
          <calcite-action-bar slot="action-bar">
            <calcite-action active="" icon="home" text="Home">
              <calcite-tooltip slot="tooltip">Home</calcite-tooltip>
            </calcite-action>
          </calcite-action-bar>
          <calcite-panel heading="Home">
            <calcite-block open="">
              <calcite-notice icon="home" open="">
                <div slot="title">Hi</div>
                <div slot="message">This is a message</div>
              </calcite-notice>
            </calcite-block>
          </calcite-panel>
        </calcite-shell-panel>
        {/* content */}
        <div style="padding: 0.75rem;">Some interesting content</div>
      </calcite-shell>
    );
  }
}
