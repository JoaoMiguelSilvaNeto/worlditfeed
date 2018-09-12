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
 
 function getNews(token)	{

	let key = token['access_token'];
	let keyType = token['token_type'];
	console.log('oi news');
	//const date = '2018-09-12T15:48:30.743Z';

	var date = new Date();
    //var dateISO = date.toISOString();
	var dateISO = '2018-08-11T15:48:30.743Z';

	const newsData = 'page=0&records=30&date='+dateISO+'&id=5&lang=PT&theme=Noticias';

	const newsEndpoint =  ' https://azapp-services.azurewebsites.net/api/Info/GetUpdatesAndDeletes/?'+newsData;

	const newsHeaders = {
		"Access-Control-Allow-Origin": "*",
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

	var html = '<h2>Notícias</h2>';

	updates.forEach(function (entry) {
		html += '<tr>';
		html += '<th><a href="'+entry['LINK']+'"><h1>'+entry['TITLE']+'</h1></a></th>';
		html += entry['HTML_EDITOR'];
		html += '</tr>';
	});
	
	document.getElementById("table1").innerHTML = html;
};

function hello(name)	{
	return "Hello "+name;
}