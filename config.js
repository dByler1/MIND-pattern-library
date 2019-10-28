const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://keen-northcutt-668d66.netlify.com/",
		"gaTrackingId": null
	},
	"header": {
		"logo": "",
		"logoLink": "",
		"title": "MIND Component Library",
		"githubUrl": "",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
			"enabled": false,
			"indexName": "",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction",
    		"/codeblock"
		],
		"links": [
			{ "text": "", "link": "https://www.mindresearch.org/"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "MIND Component Library | FEND",
		"description": "MIND FEND Web Components",
		"ogImage": null,
		"docsLocation": "",
		"favicon": ""
	},
};

module.exports = config;