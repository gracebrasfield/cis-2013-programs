var $ = function(id) {
	return document.getElementById(id);
};

var validateEmailForm = function() {
	var emailAddress1 = $("email_address1").value;
	var emailAddress2 = $("email_address2").value;
	//DEBUG alert("value of email address 1 is "+ emailAddress1);
	//DEBUG alert("value of email address 2 is "+ emailAddress2);

	$("email_address1_error").firstChild.nodeValue = "";
	$("email_address2_error").firstChild.nodeValue = "";
	$("first_name_error").firstChild.nodeValue = "";

	if (emailAddress1 !== emailAddress2) {
		$("email_address2_error").firstChild.nodeValue = "This entry must equal first entry.";
		return false;
	}

	return true;

};

window.onload = function() {
	$("email_address1").focus();
};
