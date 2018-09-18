// Javascript file for settings.html

function getCategories()	{
	
	//Call WebService that returns Categories
	
	var categories = "[{ value: '0', label: 'Notícias'},{ value: '1', label: 'Tweets'},{value: '2', label: 'Outras'}]";
	
	return categories;
	
}

$(document).ready(function(){
	//console.log($("#category").getCtrl().getValue());
	/*$("#category").getCtrl().onChange(function (value) {
		console.log(value);
		
    });
	
	$("#toggleTitle").getCtrl().onChange(function (value) {
		console.log(value);
		
    });*/

	
	// Retrieve settings
	//console.log($("#descFont").getCtrl().getValue());
	//console.log($("#descFont").getCtrl().getValue()['font']);
	
	
	
	
	
	
	
	
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