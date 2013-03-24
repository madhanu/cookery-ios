    
var MainView = Jr.View.extend({
    // Simply render our HomeTemplate in the View's HTML
     initialize: function() {
        this.template = _.template(tpl.get('main'));
    },
    render: function () {
        $(this.el).html(this.template());
        this.afterRender();
        // Always return 'this' so Jr.Router can append your view to the body
        return this;
    },
    afterRender: function(){
         this.CallJquery();
       
    },
    CallJquery:function(){
        var after = function() {
      // Use the flickable plugin to setup our carousel with 3 segments
    
    };
    // We have to put this in a setTimeout so that it sets it up after the view is added to the DOM
    setTimeout(after,1000);
    
    },
 
    events: {
        'click #launch': 'onLaunchClick',
    },
    onLaunchClick: function () {
        Jr.Navigator.navigate('dishoftheday', {
            trigger: true,
                   animation: {
                // Do a stacking animation and slide to the left.
                type: Jr.Navigator.animations.SLIDE_STACK,
                direction: Jr.Navigator.directions.LEFT
            }
        });
        return false;
    },
});
