(function(){
/////////////
//Model
/////////////
var BlogModel = Backbone.Model.extend({
   defaults: function(attributes){
      attributes = attributes || {};
      return _.defaults(attributes, {
        id: '',
        username: '',
        body: ''
      });
    }
  });

var PostCollection = Backbone.Collection.extend({
	url:'http://tiny-pizza-server.herokuapp.com/collections/greenville-chats',
	Model: Blog,

});

/////////////
//View
/////////////
var BlogPostView = Backbone.View.extend({
	el:'js-blog-posts',

	event: {
		'submit': 'createPost'
	} 	
	
});

/////////////
//Router
/////////////
var BlogRouter = Backbone.Router.extend({
	routes:{

	},

	initialize: function(){
		this.post = new PostCollection();
	},

	index: function(){
		this.blog.fetch();
	}
});

$(document).ready(function){
	Backbone.history.start();
}

})();