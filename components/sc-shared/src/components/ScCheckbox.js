import { LitElement, html, css } from 'lit-element';

export class ScCheckbox extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          margin-bottom: 15px;
        }

        label {
          display: flex;
          justify-content: flex-start;
        }

        .label {
          font-size: 14px;
          margin-left: 5px;
        }

        input {
          font-size: 14px;
        }
      `,
    ];
  }

  render() {
    return html`
      <label>
        <input type="checkbox" @click=${() => this.checked = !this.checked} ?checked=${this.checked} ?disabled=${this.disabled}>
        <div class="label"><slot></slot></div>
      </label>
    `;
  }

  static get properties() {
    return {
      checked: { type: Boolean, reflect: true },
      disabled: { type: Boolean },
    };
  }
}
