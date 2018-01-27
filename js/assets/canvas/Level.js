// -- user code here --
import Hud from '../../Hud';
import Map from '../../Map/Map';
import Player from '../sprites/player';

import tiles from '../tiles.png';
import Characters from '../characters';

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


class Level extends Phaser.State {

	/**
	 * Level.
	 */
	constructor() {

		super();


		this.cursors = null;

	}

	init() {

		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.stage.backgroundColor = '#ffffff';

	}

	preload() {

		this.preloadImages();

	}

	create() {
		this.customCreate();

	}

	/* state-methods-begin */
	render() {
		// this.game.debug.body(this.player);
	}

	update() {
		this.game.physics.arcade.collide(this.player, this.layer);
	}

	preloadImages() {
		this.game.load.image('tiles', tiles);
		this.game.load.spritesheet('warrior_m', Characters.WarriorM, 32, 32, 12);
	}

	customCreate() {
		const mapData = new Map(128, 128, 25);
		this.cache.addTilemap('dynamicMap', null, mapData.getCSV(), Phaser.Tilemap.CSV);
		const map = this.add.tilemap('dynamicMap', 32, 32);
		map.addTilesetImage('tiles', 'tiles', 32, 32);
		this.layer = map.createLayer(0);
		this.layer.resizeWorld();
		map.setCollisionBetween(1, 1);

		// Add player
		const playerLoc = mapData.playerStartLocation.getPixelLocation();
		this.player = new Player({ game: this.game, x: playerLoc.x, y: playerLoc.y });
		this.game.camera.follow(this.player);
		this.game.add.existing(this.player);
	}
	/* state-methods-end */

}
/* --- end generated code --- */
export default Level
