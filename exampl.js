var Todo = Backbone.Model.extend({
	defaults: function(){
		return {
			title: "empty todo...",
			order: Todos.nextOrder(),
			completed: false
		};
	},

	toggle: function() {
		this.save({completed: this.get("completed")});
	}
});


var TodoList = Backbone.Collection.extend({
	model: Todo,

	localStorage: new Backbone.LocalStorage("todos-backbone"),

	completed: function() {
		return this.where({completed: true});
	},

	remaining: function() {
		return this.without.apply(this, this.completed());
	},

	nextOrder: function() {
		if (!this.length) return 1;
		return this.last().get('order') +  1;
	},

	comparator: 'order'

});


var Todos = new TodoList;


var TodoView = Backbone.View.extend({

	tagname: "li",

	template: _.template($('#item-template').html()),

	events: {
		"click .toggle": "toggledone",
		"dblclick .view": "edit",
		"click a.destroy": "clear",
		"keypress .edit": "updateOnEnter",
		"blur .edit": "close"
	},

	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		this.$el.toggleClass('completed', this.model.get('completed'));
		this.input = this.$('.edit');
		return this;
	},

	toggleDone: function() {
		this.model.toggle();
	},

	edit: function() {
		this.$el.addClass("editing");
		this.input.focus();
	},

	close: function() {
		var value = this.input.val();
		if (!value) {
			this.clear();
		} else {
			this.model.save({title: value});
			this.$el.removeClass("editing");is
		}
	},

	updateOnEnter: function(e) {
		if (e.keycode == 13) this.close();
	},

	clear: function() {
		this.model.destroy();
	}

});


var AppView = Backbone.View.extend({
	el: $("#todoapp"),

	statsTemplate: _.template($('#stats-template').html()),

	events: {
		"keyup #new-todo": "createOnEnter",
		"click #clear-completed": "clearCompleted",
		"click #toggle-all": "toggleAllComplete"
	},

	initialize: function() {
		this.input = this.$("#new-todo");
		this.allCheckbox = this.$("#toggle-all")[0];

		this.listenTo(Todos, 'add', this.addOne);
		this.listenTo(Todos, 'reset', this.addAll);
		this.listenTo(Todos, 'all', this.render);

		this.footer = this.$('footer');
		this.main = $('#main');

		Todos.fetch();
	},

	render: function() {
		var completed = Todos.completed().length;
		var remaining = Todos.completed().length;

		if (Todos.length) {
			this.main.show();
			this.footer.show();
			this.footer.html(this.statsTemplate({completed: completed, remaining: remaining}));
		} else {
			this.main.hide();
			this.footer.hide();
		}

		this.allCheckbox.checked = !remaining;
 	},

 	addOne: function(todo) {
 		var view = new TodoView({model: todo});
 		this.$("#todo-list").append(view.render().el);
 	},

 	addAll: function() {
 		Todos.each(this.addOne, this);
 	},

 	createOnEnter: function(e) {
 		console.log(e.keyCode)
 		if (e.keyCode != 13) return;
 		if (!this.input.val()) return;

 		Todos.create({title: this.input.val()});
 		this.input.val('');
 	},

 	clearCompleted: function() {
 		_.invoke(Todos.completed(), 'destroy');
 		return false;
 	},

 	toggleAllComplete: function() {
 		var completed = this.allCheckbox.checked;
 		Todos.each(function(todo) { todo.save({'completed': completed}); });
 	}

});

var App = new AppView;

//++++






var AppView = Backbone.View.extend({
	tagname: "div",
	classname: "container",

	events: {
		"keypress .searchbox": "keypress"
	},

	keypress: function(e) {
		switch (e.keycode) {
			case 13:
				follow();
			case 9:
				nextResult();
			case 38:
				comHistBack();
			case 40:
				comHistForward();
			}
		}
	},

	follow: function() {

	},

	nextResult: function() {

	},

	comHistBack: function() {

	},

	comHistForward: function() {

	},

	relevant: function() {
		return 
	}
})

var Result = Backbone.Model.extend({

})

var ResultList = Backbone.Collection.extend({
	model: Result,
})

var LoadedLibs = Backbone.Collection.extend({

})

var RefUnit = Backbone.Model.extend({

})

var DB = Backbone.Collection.extend({
	model: Result,


})

var dB = new DB;

var ResultView = Backbone.View.extend({
	tagname: "li",
	classname: "result",

	template: doT.template(document.getElementById('result_tmpl').text),

	events: {
		"keypress .result": "keypress"
	},

	initialize: function(){
	},

	keypress: function(e){
		if (e.keycode == 13) this.follow();
	},

	follow: function() {
		if (e.keyCode != 13) return;
		if (!this.input.val()) return;

		var iframe = new IframeView({model: result})

	}

})

var IframeView = Backbone.View.extend({
	tagname: "li",
	classname: "whole",

	events: {
		"keyup .searchbox": "searchOnKeyup"
	},

	searchOnKeyup: function(e){
		if (e.keyCode == 13 || 
			e.keyCode == 37 || 
			e.keyCode == 38 ||
			e.keyCode == 39 ||
			e.keyCode == 40) return;

		if (this.input.val().length() > 2) {

		} else {

		}
	}

	//Get results for query
	//Get array of corresponding documents
	//Render template with document array
	var searchRender = function(results) {
		var results_length = results.length;
		var results_arr = [];
		i = 0;


		while (i < results_length) {
			var rel = results[i].score
			var ref = results[i].ref;
			results_arr.push(db[ref])
			i++
		}

		var result_fn = doT.template(document.getElementById('result_tmpl').text)
		document.getElementById('results-list').innerHTML = result_fn(results_arr);
	}

})
