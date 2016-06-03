# chartist-plugin-mousetrap
Chartist plugin for mouse events

#install using bower
bower install chartist-plugin-mousetrap


#add plugin section with details - see chartist plugins
plugins: [
        Chartist.plugins.mousetrap({
          clickFnc: function(meta, value){
            console.log('I am clicked');
          }
        })
      ]
      
      
#callback functions are available for mouse events
clickFnc
mouseoutFnc
mouseoverFnc


#add meta values in series to identify the visualisation area

sample coming soon
