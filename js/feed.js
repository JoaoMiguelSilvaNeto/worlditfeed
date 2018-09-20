/* 
	getToken(): to obtain token from endpoint, using POST method, to be used
	in getNews().
 */

function getToken()	{

	const tokenEndpoint =  'https://azapp-services.azurewebsites.net/api/security/token';

	const tokenHeaders = {
    	"Content-Type": "application/x-www-form-urlencoded"
  	};

	const tokenData = 'grant_type=password&username=volta18tvOS&password=volta18#tvOS';

	const tokenOptions = {
    "method": "post", 
    "headers": tokenHeaders, 
    "body": tokenData
  };

  return fetch(tokenEndpoint, tokenOptions)
	.then(response => response.json());

};

/*
	getNews(): to obtain JSON with the news from the Endpoint, using GET method,
	to be displayed in the webpage
 */
 
 function getNews(token, category, results)	{

	let key = token['access_token'];
	let keyType = token['token_type'];
	
	//const date = '2018-09-12T15:48:30.743Z';

	var date = new Date();
    //var dateISO = date.toISOString();
	var dateISO = '2018-08-11T15:48:30.743Z';

	const newsData = 'page=0&records='+results+'&date='+dateISO+'&id=5&lang=PT&theme='+category;

	const newsEndpoint =  'https://azapp-services.azurewebsites.net/api/Info/GetUpdatesAndDeletes/?'+newsData;

	const newsHeaders = {
    	"Authorization": "Bearer " + key,
    	"Content-Type": "application/x-www-form-urlencoded"
  	};

	const newsOptions = {
    	method: "get", 
    	headers: newsHeaders
 	};

	return fetch(newsEndpoint, newsOptions)
		.then(newsResponse => newsResponse.json());
	
};

function setFeed(updates)	{

	var html = '<!--<h2>Notícias</h2>-->';
	
	updates.forEach(function (entry)	{
		
		var link = entry['LINK'];
		var image = entry['Images_many'][0]['IMAGE_URL'];
		var imageAlt = entry['Images_many'][0]['IMAGE_NAME'];
		var title = entry['TITLE'];
		var content = entry['HTML_EDITOR'];
		
		console.log(image);
		
		html += '<tr>';
		html += '<td rowspan="2" style="text-align: top;"><a href="'+link+'"><img style="width: 100%; height: auto;" src="'+image+'" alt="'+imageAlt+'" /></a></td>';
		html += '<td class="tg-0pky"><a class="sample-content-link" href="'+link+'"><h1>'+title+'</h1></a></td></tr>';
		html += '<tr><td><span class="sample-content">'+content+'</span></td></tr>';
		
	});

	/*updates.forEach(function (entry) {
		html += '<tr>';
		html += '<th class="tg-0pky"><a class="sample-content-link" href="'+entry['LINK']+'"><h1>'+entry['TITLE']+'</h1></a><span class="sample-content">'+entry['HTML_EDITOR'];+'</span></th>';
		//html += entry['HTML_EDITOR'];
		html += '</tr>';
	});*/

	document.getElementById("table1").innerHTML = html;
	
};

function getCategories()	{
	
	//Call WebService that returns Categories
	
	var categories = "[{ value: 'Noticias', label: 'Notícias'},{ value: 'Tweets', label: 'Tweets'},{value: 'Outras', label: 'Outras'}]";
	
	return categories;
	
}

function getFeed(categories, resultsPerPage)
{
	//Get token and news feed
	getToken()
		.then(token => {

			//console.log(token['access_token']);
		
			//Send token and chosen category to Endpoint in order to retrieve feed
			getNews(token, categories, resultsPerPage)
				.then(news => {
			
					console.log(news);

					const updates = news['updates'];

					console.log(news['updates'][0]['HTML_EDITOR']);
				
					//update table1
					setFeed(updates);

				});

			});
}