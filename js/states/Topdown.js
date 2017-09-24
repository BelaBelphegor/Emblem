class Topdown extends Phaser.State
{
    create()
    {
        this.map = this.game.add.tilemap('level');
        this.map.addTilesetImage('open_tileset', 'tileset');
        this.backgroundLayer = this.map.createLayer(0);
        this.collisionLayer = this.map.createLayer(1);
        this.map.setCollisionBetween(1, 512, true, this.collisionLayer);
        this.backgroundLayer.resizeWorld();

         // Monsters
        this.mobs = game.add.group();
        this.evil = this.mobs.create(4 * 32, 32, 'ydraflui');
        this.evil.anchor.setTo(0.5, 0.5);
        this.evil.animations.add('walk_top', [0, 1, 2], 9);
        this.game.physics.arcade.enable(this.evil);
        this.evil.body.setSize(16, 32, 16, 16);
        this.evil.body.moves = true;
        this.evil.body.velocity.x = 0;
        this.evil.body.velocity.y = 0;

        // Player initialisation
        this.player = game.add.tileSprite(124, 224, 24, 32, 'player');
        this.player.anchor.setTo(0.5, 0.5);
        this.player.weapon = new Weapon(1, 3, 0.8, EWeapon_type.DAGGER);
        this.player.animations.add('walk_top', [0, 1, 2], 12);
        this.player.animations.add('walk_right', [3, 4, 5], 12);
        this.player.animations.add('walk_down', [6, 7, 8], 12);
        this.player.animations.add('walk_left', [9, 10, 11], 12);
        this.game.physics.arcade.enable(this.player);
        this.player.body.setSize(16, 16, 4, 16);
        this.game.camera.follow(this.player);

        // Enable Keyboard
        this.cursors = this.game.input.keyboard.createCursorKeys();  
    }

    update()
    {
        // Player movements
        this.player.body.velocity.y = 0;
        this.player.body.velocity.x = 0;
        if (this.cursors.up.isDown)
        {
            this.player.body.velocity.y -= 75;
            this.player.animations.play('walk_top');
        }
        if (this.cursors.down.isDown)
        {
            this.player.body.velocity.y += 75;
            this.player.animations.play('walk_down');
        }
        if (this.cursors.left.isDown)
        {
            this.player.body.velocity.x -= 75;
            this.player.animations.play('walk_left');    
        }
        if (this.cursors.right.isDown)
        {
            this.player.body.velocity.x += 75;
            this.player.animations.play('walk_right');
        }
        // Set collisions
        this.game.physics.arcade.collide(this.player, this.collisionLayer);
        this.game.physics.arcade.collide(this.evil, this.collisionLayer);
        this.game.physics.arcade.collide(this.player, this.evil);
        this.evil.animations.play('walk_left');
    }
}   