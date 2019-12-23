import { LitElement, html, css } from 'lit-element';
import { Log } from 'interface-handler/src/logger.js';
import { InterfaceState, INTERFACE_STATE } from 'interface-handler/src/interface-state';

export const PAGE = {
  DUNGEON_SEED: 'dungeonSeed',
  GAME: 'game'
};

export const DEFAULT_PAGE = PAGE.DUNGEON_SEED;

export class ScAdmin extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: flex;
        }

        nav {
          width: 200px;
          height: 100vh;
          border-right: 1px solid #222;
        }

        main {
          padding: 20px;
        }
      `,
    ];
  }

  render() {
    return html`
      <nav>
        <sc-page-nav-item title="Dungeon Seed" .thisPage=${PAGE.DUNGEON_SEED} .currentPage=${this._page} @selected=${this.__selectPage}></sc-page-nav-item>
        <sc-page-nav-item title="Game" .thisPage=${PAGE.GAME} .currentPage=${this._page} @selected=${this.__selectPage}></sc-page-nav-item>
      </nav>

      <main>
        ${this._renderPage()}
      </main>
    `;
  }

  static get properties() {
    return {
      _page: { type: String },
    };
  }

  constructor() {
    super();
    this._page = DEFAULT_PAGE;
    InterfaceState.set(INTERFACE_STATE.HTTP);
  }

  __selectPage(ev) {
    this._page = ev.detail.page;
  }

  _renderPage() {
    switch (this._page) {
      case PAGE.DUNGEON_SEED:
        return html`
          <sc-dungeon-seed-page></sc-dungeon-seed-page>
        `;
      case PAGE.GAME:
        return html`
          <sc-game-page></sc-game-page>
        `;
      default:
        Log.error(`cannot find page: ${this._page}`);
        return html`
          <sc-dungeon-seed-page></sc-dungeon-seed-page>
        `;
    }
  }
}
