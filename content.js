chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    var keyVal     = document.getElementById('key-val');
    var summaryVal = document.getElementById('summary-val');
    
    if (keyVal == undefined || summaryVal == undefined || keyVal['innerText'] == undefined || summaryVal['innerText'] == undefined) {
    	alert('Error: Debes abrir un issue de Jira para correr esta extensión.');
    } else {
    	sendResponse([keyVal.innerText, summaryVal.innerText]);
    }
});