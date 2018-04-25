function onTextReceived (val) {
	if (val == undefined || val.length != 2) {
		return;
	}

	var search  = [' ', 'á', 'é', 'í', 'ó', 'ú'];
	var replace = ['-', 'a', 'e', 'i', 'o', 'u'];
	var type    = prompt('Indica el tipo (ejemplo: feature, bugfix, hotfix, etc)');
	var i;

	if (type == '') {
		type = 'feature';
	}

	for (i = 0; i < search.length; i++) {
		val[1] = val[1].replace(new RegExp(search[ i ], 'g'), replace[ i ]);
	}

	var finalText = type + '/' + val[0] + '-' + val[1].toLowerCase();
	var input     = document.createElement('input');
	input.type    = 'text';
	input.value   = finalText;
	document.body.appendChild(input);
	input.select();
	document.execCommand('copy');
	alert("'" + finalText + "' copiado correctamente.");
}

chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.sendMessage(tab.id, {}, onTextReceived);
});