// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,
	width: '100%',
	height: '100%',

	transition: 'slide', // none/fade/slide/convex/concave/zoom

	// Optional reveal.js plugins
	dependencies: [
		{
			src: 'bower_components/reveal.js/lib/js/classList.js', condition: function () {
			return !document.body.classList;
		}
		},
		{
			src: 'bower_components/reveal.js/plugin/markdown/marked.js', condition: function () {
			return !!document.querySelector('[data-markdown]');
		}
		},
		{
			src: 'bower_components/reveal.js/plugin/markdown/markdown.js', condition: function () {
			return !!document.querySelector('[data-markdown]');
		}
		},
		{
			src: 'bower_components/reveal.js/plugin/highlight/highlight.js', async: true, condition: function () {
			return !!document.querySelector('pre code');
		}, callback: function () {
			hljs.initHighlightingOnLoad();
		}
		},
		{src: 'bower_components/reveal.js/plugin/zoom-js/zoom.js', async: true},
		{src: 'bower_components/reveal.js/plugin/notes/notes.js', async: true}
	]
});

function showDojoBackground() {
	var dojoSlide = document.querySelector('[data-state="dojo-slide"]');
	dojoSlide.setAttribute('data-background-image', './images/bg.jpg');
	Reveal.sync();
}

function blackDojoBackground() {
	var dojoSlide = document.querySelector('[data-state="dojo-slide"]');
	dojoSlide.setAttribute('data-background-image', '');
	dojoSlide.setAttribute('data-background-color', 'black');
	Reveal.sync();
}

Reveal.addEventListener('dojo-slide', function () {
	if(document.querySelector('[data-state="dojo-slide"] .fragment.visible')) {
		blackDojoBackground();
	}
	else {
		showDojoBackground();
	}
}, false);

Reveal.addEventListener('fragmentshown', function () {
	var slide = Reveal.getCurrentSlide();
	if (slide.getAttribute('data-state') === 'dojo-slide') {
		blackDojoBackground();
	}
});

Reveal.addEventListener('fragmenthidden', function () {
	var slide = Reveal.getCurrentSlide();
	if (slide.getAttribute('data-state') === 'dojo-slide') {
		showDojoBackground();
	}
});
