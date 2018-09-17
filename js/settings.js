// Javascript file for settings.html

$(document).ready(function(){
	
	// Save Settings
	
	$("#category").getCtrl().onChange(function (value) {
		console.log(value);
    });
	
	// Retrieve settings
	
	var categories = {title: 'Category', defaultValue: 'Noticias', InfoText: 'Category of the feed to show.'};
	
	//$("#category").attr("wix-options","{title: 'Category', defaultValue: 'Noticias', options: [{ value: 'Noticias', label: 'Notícias'},{ value: 'Tweets', label: 'Tweets'}{ value: 'Outras', label: 'Outras'}]}");
	$("#category").getCtrl().wix-options(categories);
	//getValue function
	//console.log($("#sampleCheckbox").getCtrl().getValue());
 
 
});