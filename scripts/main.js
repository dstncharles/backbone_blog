(function(){
/////////////
//Model
/////////////
var BlogModel = Backbone.Model.extend({
	defaults: function(attributes){
		id:'',
		username:'',
		body:''
	}
});

var PostCollection = Backbone.Collection.extend({
	url:http:'//tiny-pizza-server.herokuapp.com/collections/greenville-chats',
	Model: Blog

});

/////////////
//View
/////////////
var BlogPostView = Backbone.View.extend({
	el:'js-blog-posts',

	event: {
		'submit': 'createPost'
	}, 	
	
});

/////////////
//Router
/////////////
var BlogRouter = Backbone.Router.extend({
	routes:{

	},

	initialize: function(){
		this.Post = new PostCollection();
	}
});

$(document).ready(function){
	Backbone.history.start();
}

})();