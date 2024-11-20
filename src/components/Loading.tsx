import esri = __esri;
import { subclass } from '@arcgis/core/core/accessorSupport/decorators';
import Widget from '@arcgis/core/widgets/Widget';
import { tsx } from '@arcgis/core/widgets/support/widget';

import logoSvg, { heartPath, coffeePath } from './../support/logo';

const CSS = {
  base: 'loading',
  indicator: 'loading-indicator',
  logo: 'loading-logo',
  info: 'loading-info',
  heart: 'loading-heart',
  coffee: 'loading-coffee',
};

@subclass('Loading')
export default class Loading extends Widget {
  container = document.createElement('div');

  constructor(properties?: esri.WidgetProperties & { title: string }) {
    super(properties);
    document.body.appendChild(this.container);
  }

  title = 'vite-app';

  end(): void {
    const { container } = this;
    setTimeout((): void => {
      container.style.opacity = '0';
    }, 2500);
    setTimeout((): void => {
      this.destroy();
    }, 3500);
  }

  render(): tsx.JSX.Element {
    const { title } = this;

    return (
      <div class={CSS.base}>
        {/* title and indicator */}
        <div class={CSS.indicator}>
          <div>{title}</div>
          <calcite-progress type="indeterminate"></calcite-progress>
        </div>
        {/* logo */}
        <img class={CSS.logo} src={logoSvg}></img>

        <div class={CSS.info}>
          <div>Copyright &copy; {new Date().getFullYear()} City of Vernonia</div>
          <div>
            <span>Made with</span>
            <svg
              class={CSS.heart}
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path fill="currentColor" d={heartPath}></path>
            </svg>
            <span>and</span>
            <svg
              class={CSS.coffee}
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path fill="currentColor" d={coffeePath}></path>
            </svg>
            <span>in Vernonia, Oregon</span>
          </div>
        </div>
      </div>
    );
  }
}
