/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: PL (Polish; j  zyk polski, polszczyzna)
 */
(function ($) {
	$.extend($.validator.messages, {
		required: "To pole jest wymagane.",
		remote: "Prosz   o wype  nienie tego pola.",
		email: "Prosz   o podanie prawid  owego adresu email.",
		url: "Prosz   o podanie prawid  owego URL.",
		date: "Prosz   o podanie prawid  owej daty.",
		dateISO: "Prosz   o podanie prawid  owej daty (ISO).",
		number: "Prosz   o podanie prawid  owej liczby.",
		digits: "Prosz   o podanie samych cyfr.",
		creditcard: "Prosz   o podanie prawid  owej karty kredytowej.",
		equalTo: "Prosz   o podanie tej samej warto  ci ponownie.",
		accept: "Prosz   o podanie warto  ci z prawid  owym rozszerzeniem.",
		maxlength: $.validator.format("Prosz   o podanie nie wi  cej ni   {0} znak  w."),
		minlength: $.validator.format("Prosz   o podanie przynajmniej {0} znak  w."),
		rangelength: $.validator.format("Prosz   o podanie warto  ci o d  ugo  ci od {0} do {1} znak  w."),
		range: $.validator.format("Prosz   o podanie warto  ci z przedzia  u od {0} do {1}."),
		max: $.validator.format("Prosz   o podanie warto  ci mniejszej b  d   r  wnej {0}."),
		min: $.validator.format("Prosz   o podanie warto  ci wi  kszej b  d   r  wnej {0}.")
	});
}(jQuery));