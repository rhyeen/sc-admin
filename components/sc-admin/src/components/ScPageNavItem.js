import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

export class ScPageNavItem extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          width: 100%;
        }

        div {
          cursor: pointer;
          padding-left: 20px;
          display: flex;
          height: 40px;
          line-height: 40px;
          background-color: white;
          color: #222;
          border-bottom: 1px solid #222;
        }

        .active {
          background-color: #222;
          color: white;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class=${this.__getClasses(this.currentPage, this.thisPage)} @click=${this.__onClick}>${this.title}</div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      currentPage: { type: String },
      thisPage: { type: String }
    };
  }

  __onClick() {
    this.dispatchEvent(new CustomEvent('selected', {
      detail: {
        page: this.thisPage
      }
    }));
  }

  __getClasses(currentPage, thisPage) {
    return classMap({ active: currentPage === thisPage });
  }
}
