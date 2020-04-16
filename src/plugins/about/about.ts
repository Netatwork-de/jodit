import "./about.less";

import { Config } from '../../config';
import { IControlType, IJodit } from '../../types';
import { isLicense, normalizeLicense } from '../../core/helpers/';
import * as consts from '../../core/constants';

Config.prototype.controls.about = {
	exec: (editor: IJodit) => {
		const dialog: any = editor.getInstance('Dialog'),
			i18n = editor.i18n.bind(editor);

		dialog.setTitle(i18n('About Jodit'));

		dialog.setContent(
			`<div class="jodit-about">
					<div>${i18n('Jodit Editor')} v.${editor.getVersion()}</div>
					<div>${i18n(
				'License: %s',
				!isLicense(editor.options.license)
					? 'MIT'
					: normalizeLicense(editor.options.license)
			)}</div>
					<div>
						<a href="https://xdsoft.net/jodit/" target="_blank">http://xdsoft.net/jodit/</a>
					</div>
					<div>
						<a href="https://xdsoft.net/jodit/doc/" target="_blank">${i18n(
				"Jodit User's Guide"
			)}</a>
						${i18n('contains detailed help for using')}
					</div>
					<div>${i18n(
				'Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.'
			)}</div>
				</div>`
		);
		dialog.open();
	},
	tooltip: 'About Jodit',
	mode: consts.MODE_SOURCE + consts.MODE_WYSIWYG
} as IControlType;

export function about() {
	// Config.buttons.add('about', null, true);
}