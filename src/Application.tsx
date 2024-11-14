import esri = __esri;
import { subclass, property } from '@arcgis/core/core/accessorSupport/decorators';
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

  constructor(properties?: esri.WidgetProperties & { title: string }) {
    super(properties);
    document.body.appendChild(this.container);
  }

  title = 'vite-app';

  @property()
  private _activePanel: 'home' | 'info' | null = 'home';

  private _showPanel(panel: 'home' | 'info'): void {
    const { _activePanel } = this;

    if (_activePanel === panel) {
      this._activePanel = null;
    } else {
      this._activePanel = panel;
    }
  }

  render(): tsx.JSX.Element {
    const { _activePanel, title } = this;

    return (
      <calcite-shell>
        {/* header */}
        <div class={CSS.header} slot="header">
          <div class={CSS.headerTitle}>
            <img src={logoSvg}></img>
            <div>{title}</div>
          </div>
        </div>

        {/* shell panel */}
        <calcite-shell-panel collapsed={_activePanel === null} position="start" slot="panel-start">
          {/* action bar */}
          <calcite-action-bar slot="action-bar">
            <calcite-action
              active={_activePanel === 'home'}
              icon="home"
              text="Home"
              onclick={this._showPanel.bind(this, 'home')}
            >
              <calcite-tooltip close-on-click="" slot="tooltip">
                Home
              </calcite-tooltip>
            </calcite-action>
            <calcite-action
              active={_activePanel === 'info'}
              icon="information"
              text="Info"
              onclick={this._showPanel.bind(this, 'info')}
            >
              <calcite-tooltip close-on-click="" slot="tooltip">
                Info
              </calcite-tooltip>
            </calcite-action>
          </calcite-action-bar>

          {/* panels */}
          <calcite-panel heading="Home" hidden={_activePanel !== 'home'}>
            <calcite-block open="">
              <calcite-notice icon="home" open="">
                <div slot="title">Hi</div>
                <div slot="message">This is a message</div>
              </calcite-notice>
            </calcite-block>
          </calcite-panel>

          <calcite-panel heading="Info" hidden={_activePanel !== 'info'}>
            <calcite-block open="">
              <calcite-notice icon="information" open="">
                <div slot="title">Hello</div>
                <div slot="message">This is another message</div>
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
