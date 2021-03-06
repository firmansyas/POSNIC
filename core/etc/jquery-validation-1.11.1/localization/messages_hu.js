/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: HU (Hungarian; Magyar)
 */
(function ($) {
	$.extend($.validator.messages, {
		required: "K  telez   megadni.",
		maxlength: $.validator.format("Legfeljebb {0} karakter hossz   legyen."),
		minlength: $.validator.format("Legal  bb {0} karakter hossz   legyen."),
		rangelength: $.validator.format("Legal  bb {0}   s legfeljebb {1} karakter hossz   legyen."),
		email: "  rv  nyes e-mail c  mnek kell lennie.",
		url: "  rv  nyes URL-nek kell lennie.",
		date: "D  tumnak kell lennie.",
		number: "Sz  mnak kell lennie.",
		digits: "Csak sz  mjegyek lehetnek.",
		equalTo: "Meg kell egyeznie a k  t   rt  knek.",
		range: $.validator.format("{0}   s {1} k  z   kell esnie."),
		max: $.validator.format("Nem lehet nagyobb, mint {0}."),
		min: $.validator.format("Nem lehet kisebb, mint {0}."),
		creditcard: "  rv  nyes hitelk  rtyasz  mnak kell lennie.",
		remote: "K  rem jav  tsa ki ezt a mez  t.",
		dateISO: "K  rem   rjon be egy   rv  nyes d  tumot (ISO)."
	});
}(jQuery));