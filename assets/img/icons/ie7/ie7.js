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
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-dribbleicon': '&#xe94f;',
		'icon-logo_medicon': '&#xe907;',
		'icon-logo_bigicon': '&#xe918;',
		'icon-logo_smallicon': '&#xe950;',
		'icon-aiicon': '&#xe900;',
		'icon-arrowlfwicon': '&#xe901;',
		'icon-arrowrgnicon1': '&#xe904;',
		'icon-arrowupicon': '&#xe905;',
		'icon-arrowbticon2': '&#xe906;',
		'icon-backicon': '&#xe902;',
		'icon-behanceicon': '&#xe903;',
		'icon-closeicon': '&#xe92a;',
		'icon-codeicon': '&#xe92b;',
		'icon-facebookicon': '&#xe92c;',
		'icon-figmaicon': '&#xe92d;',
		'icon-giticon': '&#xe92e;',
		'icon-idicon': '&#xe92f;',
		'icon-instaicon': '&#xe930;',
		'icon-linkedinicon': '&#xe931;',
		'icon-mailicon': '&#xe932;',
		'icon-menuicon': '&#xe946;',
		'icon-psicon': '&#xe947;',
		'icon-sendicon': '&#xe948;',
		'icon-servicesicon': '&#xe949;',
		'icon-uxicon': '&#xe958;',
		'icon-xdicon': '&#xe959;',
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
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
