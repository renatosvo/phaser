/// <reference path="../../Phaser/Game.ts" />

(function () {

    var game = new Phaser.Game(this, 'game', 800, 600, preload, create);

    function preload() {

        //  Using Phasers asset loader we load up a PNG from the assets folder
        game.load.image('fuji', 'assets/pics/atari_fujilogo.png');
        

    }

    var fuji: Phaser.Sprite;

    function create() {

        game.stage.backgroundColor = 'rgb(0,0,100)';

        //  Here we'll assign the new sprite to the local fuji variable
        fuji = game.add.sprite(game.stage.centerX, game.stage.centerY, 'fuji');

        //  The sprite is 320 x 200 pixels in size
        //  If we don't set an origin then the sprite will rotate around 0,0 - the top left corner
        game.add.tween(fuji).to({ rotation: 360 }, 2000, Phaser.Easing.Linear.None, true, 0, true);

    }

})();
