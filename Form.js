class Form
{
    constructor()
    {
      
    }

    display()
    {
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(200,100);

        var input = createInput("Name");
        var button = createButton("GO");
        var greeting = createElement('h3');
        input.position(200,200);
        button.position(250,250);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount = playerCount + 1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello"+ name);
            greeting.position(250,250);

        });


    }
}