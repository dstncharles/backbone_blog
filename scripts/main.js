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

	}
});
$(document).ready(function){

}

})();