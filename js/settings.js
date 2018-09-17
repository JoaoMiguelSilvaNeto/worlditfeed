// Javascript file for settings.html
//$("#category").attr("wix-options","{title: 'Category', defaultValue: 'Noticias', options: [{ 'value': 'Noticias', 'label': 'Notícias'},{ 'value': 'Tweets', 'label': 'Tweets'},{ 'value': 'Outras', 'label': 'Outras'}], InfoText: 'Category of the feed to show.'}");
	
window.onload = function() {
		
		document.getElementById('category').setAttribute("wix-options", "{title: 'Category', " +
				"defaultValue: 'Noticias', " +
				"options: [" +
				"	{ value: 'Noticias', label: 'Notícias'}," +
				"	{ value: 'Tweets', label: 'Tweets'}," +
				"	{ value: 'Outras', label: 'Outras'}" +
				"], " +
				"InfoText: 'Category of the feed to show.'" +
				"}");
		}

$(document).ready(function(){
	
	
	
	// Save Settings
	
	$("#category").getCtrl().onChange(function (value) {
		console.log(value);
		
    });
	
	// Retrieve settings
	
	var categories = {"title": 'Category', "options": [{ "value": 'Noticias', "label": 'Notícias'},{ "value": 'Tweets', "label": 'Tweets'},{ "value": 'Outras', "label": 'Outras'}],  "defaultValue": 'Noticias', "InfoText": 'Category of the feed to show.'};
	
	
	
	
	/*$("#category").prop("wix-options","" +
			"{title: 'Category', " +
			"defaultValue: 'Noticias', " +
			"options: [" +
			"	{ value: 'Noticias', label: 'Notícias'}," +
			"	{ value: 'Tweets', label: 'Tweets'}," +
			"	{ value: 'Outras', label: 'Outras'}" +
			"], " +
			"InfoText: 'Category of the feed to show.'" +
			"}");*/
	
	
	//$("#category").getCtrl().wix-options(categories);
	//getValue function
	//console.log($("#sampleCheckbox").getCtrl().getValue());
 
 
});
