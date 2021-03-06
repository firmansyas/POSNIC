/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: CS (Czech;   e  tina,   esk   jazyk)
 */
(function ($) {
	$.extend($.validator.messages, {
		required: "Tento   daj je povinn  .",
		remote: "Pros  m, opravte tento   daj.",
		email: "Pros  m, zadejte platn   e-mail.",
		url: "Pros  m, zadejte platn   URL.",
		date: "Pros  m, zadejte platn   datum.",
		dateISO: "Pros  m, zadejte platn   datum (ISO).",
		number: "Pros  m, zadejte     slo.",
		digits: "Pros  m, zad  vejte pouze     slice.",
		creditcard: "Pros  m, zadejte     slo kreditn   karty.",
		equalTo: "Pros  m, zadejte znovu stejnou hodnotu.",
		accept: "Pros  m, zadejte soubor se spr  vnou p    ponou.",
		maxlength: $.validator.format("Pros  m, zadejte nejv  ce {0} znak  ."),
		minlength: $.validator.format("Pros  m, zadejte nejm  n   {0} znak  ."),
		rangelength: $.validator.format("Pros  m, zadejte od {0} do {1} znak  ."),
		range: $.validator.format("Pros  m, zadejte hodnotu od {0} do {1}."),
		max: $.validator.format("Pros  m, zadejte hodnotu men     nebo rovnu {0}."),
		min: $.validator.format("Pros  m, zadejte hodnotu v  t     nebo rovnu {0}.")
	});
}(jQuery));