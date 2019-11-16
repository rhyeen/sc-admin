import '../sc-dungeon-seed-page/sc-dungeon-seed-page.js';

import { ScAdmin } from './src/ScAdmin.js';
import { ScPageNavItem } from './src/components/ScPageNavItem.js';
import { ScBtn } from '../sc-shared/src/components/ScBtn.js';
import { ScInput } from '../sc-shared/src/components/ScInput.js';
import { ScCheckbox } from '../sc-shared/src/components/ScCheckbox.js';
import { ScResponse } from '../sc-shared/src/components/ScResponse.js';


window.customElements.define('sc-response', ScResponse);
window.customElements.define('sc-btn', ScBtn);
window.customElements.define('sc-checkbox', ScCheckbox);
window.customElements.define('sc-input', ScInput);
window.customElements.define('sc-page-nav-item', ScPageNavItem);
window.customElements.define('sc-admin', ScAdmin);
