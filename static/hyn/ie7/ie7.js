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
		'hyn-image': '&#xe908;',
		'hyn-facebook': '&#xe900;',
		'hyn-github': '&#xe907;',
		'hyn-instagram': '&#xe901;',
		'hyn-linkedin': '&#xe902;',
		'hyn-mail-dot-ru': '&#xe906;',
		'hyn-medium': '&#xe903;',
		'hyn-twitter': '&#xe904;',
		'hyn-vk': '&#xe905;',
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
		c = c.match(/hyn-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
