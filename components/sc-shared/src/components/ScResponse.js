import { LitElement, html, css } from 'lit-element';

export class ScResponse extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          margin-top: 40px;
          display: block;
        }

        .label {
          margin-bottom: 10px;
          color: #666;
        }

        .index {
          font-size: 12px;
          color: #666;
        }

        .response {
          margin-bottom: 10px;
        }
      `,
    ];
  }

  render() {
    return html`
      ${this.__getResponsesHtml()}
    `;
  }

  static get properties() {
    return {
      responses: { type: Array }
    };
  }

  __getResponsesHtml() {
    const result = [];
    for (let i = 0; i < this.responses.length; i++) {
      if (this.responses[i]) {
        result.push(this.__getResponseHtml(this.responses[i], i));
      }
    }
    if (!result.length) {
      return html``;
    }
    return html`
      <div class="label">Responses:</div>
      ${result}
    `;
  }

  __getResponseHtml(response, index) {
    return html`
      <div class="response"><span class="index">${index + 1}:</span> ${JSON.stringify(response)}</div>
    `;
  }
}
