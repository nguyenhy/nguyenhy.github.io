/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'hyn\'">' + entity + '</span>' + html;
	}
	var icons = {
		'hyni-chevrons-up': '&#xe905;',
		'hyni-github': '&#xe900;',
		'hyni-image': '&#xe906;',
		'hyni-instagram': '&#xe901;',
		'hyni-mail': '&#xe902;',
		'hyni-menu': '&#xe907;',
		'hyni-moon': '&#xe904;',
		'hyni-search': '&#xe908;',
		'hyni-share-2': '&#xe909;',
		'hyni-twitter': '&#xe903;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/hyni-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
