// Javascript file for settings.html

$(document).ready(function(){
	
	console.log(getCategories());
	// Save Settings
	
	$("#category").getCtrl().onChange(function (value) {
		console.log(value);
		
    });
	
	// Retrieve settings
	
	
	
	
	
	
	
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

function getCategories()	{
	
	//Call WebService that returns Categories
	
	var categories = "[{ value: 'Noticias', label: 'Notícias'},{ value: 'Tweets', label: 'Tweets'},{value: 'Outras', label: 'Outras'}]";
	
	return categories;
	
}