Package.describe({
	summary: "This date range picker component for Twitter Bootstrap creates a dropdown menu from which a user can select a range of dates."
});

Package.on_use(function (api) {
	api.add_files([
		'lib/bootstrap-daterangepicker/daterangepicker-bs3.css',
		'lib/bootstrap-daterangepicker/moment.js',
		'lib/bootstrap-daterangepicker/moment.min.js',
		'lib/bootstrap-daterangepicker/daterangepicker.js'
		], 'client');
});
