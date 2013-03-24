Backbone.View.prototype.close = function () {
    console.log('Closing view ' + this);
    if (this.beforeClose) {
        this.beforeClose();
    }
    this.remove();
    this.unbind();
};


var AppRouter = Jr.Router.extend({
    routes: {
        '': 'main',
        'dishoftheday':'dishoftheday',
        'recipe':'recipe',
        'search':'search',
        'settings':'settings',
        'favorite':'favorite',
        'detail':'detail',
 
    },
    
    main: function () {

        //make_active('main');
        this.renderView( new MainView() );
        
    },

     dishoftheday: function () {

        //make_active('main');
        this.renderView( new DishofthedayView() );
        
    },
    


     recipe: function () {

        //make_active('main');
        this.renderView( new RecipeView() );
        
    },

        detail: function () {

        //make_active('main');
        this.renderView( new DetailView() );
        
    },

        search: function () {

        //make_active('main');
        this.renderView( new SearchView() );
        
    },


        favorite: function () {

        //make_active('main');
        this.renderView( new FavoriteView() );
        
    },

        settings: function () {

        //make_active('main');
        this.renderView( new SettingsView() );
        
    },


      showView: function(view) {
        if (this.currentView)
            this.currentView.close();
        $('body').html(view.render().el);
        this.currentView = view;
        return view;
    },

 
});
 

function startApp() {
    tpl.loadTemplates(['main', 'dishoftheday', 'recipes', 'detail', 'favorite', 'search', 'settings'], function() {
        app = new AppRouter();
        Backbone.history.start();
    });
}