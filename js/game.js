class Game extends Phaser.Game
{
    constructor()
    {
        super(800, 600, Phaser.AUTO, 'content', null);
        this.state.add('Boot', Boot, false);
        this.state.add('Preload', Preload, false);
        this.state.add('Topdown', Topdown, false);
        this.state.start('Boot');
    }
}
window.onload = function()
{
    window.game = new Game();
}