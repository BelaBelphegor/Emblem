class Game extends Phaser.Game
{
    constructor()
    {
        super(800, 600, Phaser.AUTO, 'content', null);
        this.state.add('Boot', BootState, false);
      //  this.state.add('MainState', MainState, false);
        //this.state.start('MainState');
    }
}

window.onload = function()
{
    window.game = new Game();
}