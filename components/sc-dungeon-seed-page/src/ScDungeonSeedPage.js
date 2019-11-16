import { LitElement, html, css } from 'lit-element';
import { Log } from 'interface-handler/src/logger.js';
import { generateSeed } from './services/interface/firebase/dungeon-seed';
import { SC_BTN_TYPES } from '../../sc-shared/src/components/ScBtn';

export class ScDungeonSeedPage extends LitElement {
  static get styles() {
    return [
      css`
        .dungeon-tags {
          border-left: 4px solid #eee;
          padding-left: 10px;
          margin-bottom: 15px;
        }

        .title {
          margin-bottom: 10px;
          color: #666;
          font-size: 14px;
        }
      `,
    ];
  }

  render() {
    return html`
    <sc-input value=${this._dungeonId} @input=${e => this._dungeonId = e.target.value}>Dungeon ID</sc-input>
      <div class="title">Tags to update with seed:</div>
      <div class="dungeon-tags">
        <sc-checkbox ?checked=${this._updateTagStable} @click=${e => this._updateTagStable = e.target.checked}>Stable</sc-checkbox>
        <sc-checkbox ?checked=${this._updateTagBeta} @click=${e => this._updateTagBeta = e.target.checked}>Beta</sc-checkbox>
        <sc-checkbox ?checked=${this._updateTagAlpha} @click=${e => this._updateTagAlpha = e.target.checked}>Alpha</sc-checkbox>
        <sc-checkbox ?checked=${this._updateTagDev} @click=${e => this._updateTagDev = e.target.checked}>Dev</sc-checkbox>
      </div>
      <sc-btn .btntype=${SC_BTN_TYPES.PRIMARY} @click=${() => this.__generateDungeonSeed()}>Generate Seed</sc-btn>
      <sc-response .responses=${[this._generateSeedResponse, this._updateTagsResponse]}></sc-response>
    `;
  }

  static get properties() {
    return {
      _dungeonId: { type: String },
      _generateSeedResponse: { type: Object },
      _updateTagsResponse: { type: Object },
      _updateTagStable: { type: Boolean },
      _updateTagBeta: { type: Boolean },
      _updateTagAlpha: { type: Boolean },
      _updateTagDev: { type: Boolean }
    };
  }

  constructor() {
    super();
    this._dungeonId = "";
    this._updateTagStable = true;
    this._updateTagBeta = true;
    this._updateTagAlpha = true;
    this._updateTagDev = true;
    this._responsesVersion = 0;
  }

  __generateDungeonSeed() {
    generateSeed(this._dungeonId).then(generateSeedResponse => {
      this._generateSeedResponse = generateSeedResponse;
      updateTags(generateSeedResponse.data.seed, this._updateTagStable, this._updateTagBeta, this._updateTagAlpha, this._updateTagDev)
      .then(updateTagsResponse => {
        this._updateTagsResponse = updateTagsResponse;
      }, err => {
        Log.error(err);
        this._updateTagsResponse = err;
      });
    }, err => {
      Log.error(err);
      this._generateSeedResponse = err;
    });
  }
}
