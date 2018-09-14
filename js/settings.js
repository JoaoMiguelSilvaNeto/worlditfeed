// Javascript file for settings.html

$(document).ready(function(){
	
	// Save Settings
	
	$("#category").getCtrl().onChange(function (value) {
		console.log(value);
    });
	
	// Retrieve settings
	
	$("#category").attr("wix-options","{title: 'Category', defaultValue: 'Noticias',options: [{ value: 'Noticias', label: 'Notícias'},{ value: 'Tweets', label: 'Tweets'}{ value: 'Outras', label: 'Outras'}]}");
	
	//getValue function
	//console.log($("#sampleCheckbox").getCtrl().getValue());
 
 
});