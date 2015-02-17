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

var PostCollection = Backbone.Collection.extend({	url:'http://tiny-pizza-server.herokuapp.com/collections/greenville-chats',
	Model: Blog,

});


/////////////
//View
/////////////
var BlogPostView = Backbone.View.extend({
	el:'js-blog-posts',

	event: {
		'submit': 'createPost'
	},

  createPost: function(){
    event.preventDefault();
    var id = this.$('js-blog-posts').val();
    var username = App.router.get('username');
    this.collection.create({body: body, username: username});
    this.$('js-blog-posts').val('');
  }
});





/////////////
//Router
/////////////
var BlogRouter = Backbone.Router.extend({
	routes:{
    '':'index'
	},

	initialize: function(){
		this.post = new PostCollection();
	},

	index: function(){
		this.blog.fetch();
	}

});

$(document).ready(function){
  App.router = new AppRouter();
	Backbone.history.start();
}


})();
