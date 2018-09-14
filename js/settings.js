// Javascript file for settings.html

$(document).ready(function(){
	
	// Save Settings
	
	$("#category").getCtrl().onChange(function (value) {
		console.log(value);
    });
	
	// Retrieve settings
	
	$("#category").setAttribute("wix-options","{title: 'Category',faultValue: 'Noticias',options: [{ value: 'Noticias', label: 'Notícias'},{ value: 'Tweets', label: 'Tweets'}{ value: 'Outras', label: 'Outras'}]}");
	
	//getValue function
	//console.log($("#sampleCheckbox").getCtrl().getValue());
 
 
});