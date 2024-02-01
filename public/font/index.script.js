(function () {
	var d = document, e = d.documentElement, s = d.createElement('style');
	s.textContent = 'header nav a, main{visibility:hidden}';
	var r = document.getElementsByTagName('script')[0];
	r.parentNode.insertBefore(s, r);
	function f() { s.parentNode && s.parentNode.removeChild(s); }
	addEventListener('load', f, false);
	setTimeout(f, 3000);
})();
