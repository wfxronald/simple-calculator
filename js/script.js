$(document).ready(function() {
	var newExpression = true;

	// Everytime a button is clicked, reflect it on the screen
	$("button.number, button.operator").on("click", function() {
		if (newExpression) {
			$("#screen").text($(this).text());
			newExpression = false;
		}
		else $("#screen").append($(this).text());
	});

	// When the reset button is clicked, clear the screen
	$("#reset").on("click", function() {
		$("#screen").text("0");
		newExpression = true;
	});

	// When the equal button is clicked, evaluate the expression
	$("#equal").on("click", function() {
		try {
			var result = eval($("#screen").text());
			$("#screen").text(result);
		}
		catch(anyError) {
			$('#screen').text("An error occurred");
		}
		finally {
			newExpression = true;
		}
	})
});