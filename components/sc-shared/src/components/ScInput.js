import { LitElement, html, css } from 'lit-element';

export class ScInput extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          margin-bottom: 15px;
        }

        .label {
          font-size: 14px;
          margin-bottom: 5px;
        }

        input {
          width: 200px;
          padding: 10px;
          font-size: 14px;
        }
      `,
    ];
  }

  render() {
    return html`
      <label>
        <div class="label"><slot></slot></div>
        <input type="text" value=${this.value} @input=${e => this.value = e.target.value} ?disabled="${this.disabled}">
      </label>
    `;
  }

  static get properties() {
    return {
      value: { type: String, reflect: true },
      disabled: { type: Boolean },
    };
  }
}
