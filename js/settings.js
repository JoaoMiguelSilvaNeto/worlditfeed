// Javascript file for settings.html

function getCategories()	{
	
	//Call WebService that returns Categories
	
	var categories = "[{ value: 'Noticias', label: 'Notícias'},{ value: 'Tweets', label: 'Tweets'},{value: 'Outras', label: 'Outras'}]";
	
	return categories;
	
}

$(document).ready(function(){
	
	var category = $('#category').val();
	console.log('7777->'+category);
	
	Wix.Data.Public.set("category", category, { scope: 'APP' }, 
			function(d){console.log(d)},function(f){console.log(f)});
 
});