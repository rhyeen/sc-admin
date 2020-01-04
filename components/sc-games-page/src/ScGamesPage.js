import { LitElement, html, css } from 'lit-element';
import { Log } from 'interface-handler/src/logger.js';
import { removeAllDungeonsGames } from './services/interface/games';
import { SC_BTN_TYPES } from '../../sc-shared/src/components/ScBtn';

export class ScGamesPage extends LitElement {
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
      <sc-input value=${this._dungeonId} @input=${e => this._dungeonId = e.target.value}>Dungeon ID</sc-input>
      <div class="note">Note that this is request takes N operations, where N is the number of games.</div>
      <sc-btn .btntype=${SC_BTN_TYPES.WARNING} @click=${() => this.__removeAllGames()}>Remove All Games</sc-btn>
      <sc-response .responses=${[this._removeAllGamesResponse]}></sc-response>
    `;
  }

  static get properties() {
    return {
      _removeAllGamesResponse: { type: Object },
      _dungeonId: { type: String }
    };
  }

  constructor() {
    super();
    this._dungeonId = "";
  }

  __removeAllGames() {
    this._removeAllGamesResponse = "";
    removeAllDungeonsGames(this._dungeonId).then(response => {
      this._removeAllGamesResponse = response;
    }, err => {
      Log.error(err);
      this._removeAllGamesResponse = err;
    });
  }
}
