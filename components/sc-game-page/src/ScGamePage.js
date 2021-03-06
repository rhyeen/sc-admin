import { LitElement, html, css } from 'lit-element';
import { Log } from 'interface-handler/src/logger.js';
import { getGame } from './services/interface/game';
import { SC_BTN_TYPES } from '../../sc-shared/src/components/ScBtn';

export class ScGamePage extends LitElement {
  static get styles() {
    return [
      css`
        .note {
          margin-bottom: 10px;
          color: #666;
          font-size: 14px;
        }
      `
    ];
  }

  render() {
    return html`
      <sc-input value=${this._gameId} @input=${e => this._gameId = e.target.value}>Game ID</sc-input>
      <div class="note">Note that this returns back the actual data object from Firestore and not a JSON version of a built game.</div>
      <sc-btn .btntype=${SC_BTN_TYPES.PRIMARY} @click=${() => this.__getGame()}>Get Game</sc-btn>
      <sc-response .responses=${[this._getGameResponse]}></sc-response>
    `;
  }

  static get properties() {
    return {
      _gameId: { type: String },
      _getGameResponse: { type: Object },
    };
  }

  constructor() {
    super();
    this._gameId = "";
  }

  __getGame() {
    this._getGameResponse = "";
    getGame(this._gameId).then(game => {
      this._getGameResponse = game;
    }, err => {
      Log.error(err);
      this._getGameResponse = err;
    });
  }
}
