$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['#662c2c', '#3a662c', '#402c66', '#665b2c'],
		anchors: ['MainPage', 'SalePage', 'SchedulePage', 'ContactUsPage'],
		menu: '#menu',
		scrollingSpeed: 1000
	});
});