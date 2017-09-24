class Preload extends Phaser.State
{
    preload()
    {
        console.log("Enter on preload !");
        this.load.tilemap('level', './assets/level.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('tileset', './assets/open_tileset.png');
        this.load.spritesheet('player', './assets/characters/mage_f.png', 24, 33, 11);
        this.load.spritesheet('ydraflui', './assets/characters/ydraflui.png', 48, 48, 11);
    }

    create()
    {
        this.state.start('Topdown');
    }
}