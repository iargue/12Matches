var textSize = 18,
	textPadding = 2,
	textFont = "Calibri";



function createStage() {
	playerStage = new createjs.Stage("gameCanvas");
	playerStage.canvas.height = playerStage.canvas.clientHeight;
	playerStage.canvas.width = playerStage.canvas.clientWidth;

	gameStage = new createjs.Container();
	gameStage.width = playerStage.canvas.width * 0.75
	gameStage.height = playerStage.canvas.width * 0.75
	gameStage.x = playerStage.canvas.width * 0.125

	var border = new createjs.Shape(new createjs.Graphics().setStrokeStyle(1).beginStroke("black").beginFill('lightgreen').drawRect(0, 0, gameStage.width, gameStage.height));
	var playerSplit = new createjs.Shape(new createjs.Graphics().setStrokeStyle(1).beginStroke("black").beginFill("black").drawRect(0, gameStage.height * 0.025, gameStage.width, 3));
	gameStage.addChild(border);
	gameStage.addChild(playerSplit);


	warehouseMenu = new createjs.Container();
	warehouseMenu.x = 0
	warehouseMenu.y = 0
	warehouseMenu.width = gameStage.width* 0.11
	warehouseMenu.height = gameStage.height * 0.025
	warehouseMenu.object = new createjs.Shape(new createjs.Graphics().setStrokeStyle(1).beginStroke("black").beginLinearGradientFill(["#222", "#444", "#444", "#222"], [0, 0.25, 0.75, 1], 0, 0, 0, warehouseMenu.height).drawRect(0, 0, warehouseMenu.width, warehouseMenu.height))
	createTextObject(warehouseMenu, "text", "Warehouse", 0.5);
	warehouseMenu.addEventListener('click', function() {
		lastMenu.textObject.color = "white"
		cacheItem(lastMenu)
		warehouseMenu.textObject.color = "red"
		cacheItem(warehouseMenu)
		lastMenu = warehouseMenu
	});
	warehouseMenu.textObject.color = "red"
	warehouseMenu.addChild(warehouseMenu.object);
	warehouseMenu.addChild(warehouseMenu.textObject);
	cacheItem(warehouseMenu);
	gameStage.addChild(warehouseMenu)

	lastMenu = warehouseMenu

	humanResourcesMenu = new createjs.Container();
	humanResourcesMenu.x = gameStage.width* 0.11
	humanResourcesMenu.y = 0
	humanResourcesMenu.width = gameStage.width* 0.11
	humanResourcesMenu.height = gameStage.height * 0.025
	humanResourcesMenu.object = new createjs.Shape(new createjs.Graphics().setStrokeStyle(1).beginStroke("black").beginLinearGradientFill(["#222", "#444", "#444", "#222"], [0, 0.25, 0.75, 1], 0, 0, 0, humanResourcesMenu.height).drawRect(0, 0, humanResourcesMenu.width, humanResourcesMenu.height))
	createTextObject(humanResourcesMenu, "text", "HR", 0.5);
	humanResourcesMenu.addEventListener('click', function() {
		lastMenu.textObject.color = "white"
		cacheItem(lastMenu)
		humanResourcesMenu.textObject.color = "red"
		cacheItem(humanResourcesMenu)
		lastMenu = humanResourcesMenu
	});
	humanResourcesMenu.addChild(humanResourcesMenu.object);
	humanResourcesMenu.addChild(humanResourcesMenu.textObject);
	cacheItem(humanResourcesMenu);
	gameStage.addChild(humanResourcesMenu)

	salesMenu = new createjs.Container();
	salesMenu.x = gameStage.width* 0.22
	salesMenu.y = 0
	salesMenu.width = gameStage.width* 0.11
	salesMenu.height = gameStage.height * 0.025
	salesMenu.object = new createjs.Shape(new createjs.Graphics().setStrokeStyle(1).beginStroke("black").beginLinearGradientFill(["#222", "#444", "#444", "#222"], [0, 0.25, 0.75, 1], 0, 0, 0, salesMenu.height).drawRect(0, 0, salesMenu.width, salesMenu.height))
	createTextObject(salesMenu, "text", "Sales", 0.5);
	salesMenu.addEventListener('click', function() {
		lastMenu.textObject.color = "white"
		cacheItem(lastMenu)
		salesMenu.textObject.color = "red"
		cacheItem(salesMenu)
		lastMenu = salesMenu
	});
	salesMenu.addChild(salesMenu.object);
	salesMenu.addChild(salesMenu.textObject);
	cacheItem(salesMenu);
	gameStage.addChild(salesMenu)

	marketingMenu = new createjs.Container();
	marketingMenu.x = gameStage.width* 0.33
	marketingMenu.y = 0
	marketingMenu.width = gameStage.width* 0.11
	marketingMenu.height = gameStage.height * 0.025
	marketingMenu.object = new createjs.Shape(new createjs.Graphics().setStrokeStyle(1).beginStroke("black").beginLinearGradientFill(["#222", "#444", "#444", "#222"], [0, 0.25, 0.75, 1], 0, 0, 0, marketingMenu.height).drawRect(0, 0, marketingMenu.width, marketingMenu.height))
	createTextObject(marketingMenu, "text", "Marketing", 0.5);
	marketingMenu.addEventListener('click', function() {
		lastMenu.textObject.color = "white"
		cacheItem(lastMenu)
		marketingMenu.textObject.color = "red"
		cacheItem(marketingMenu)
		lastMenu = marketingMenu
	});
	marketingMenu.addChild(marketingMenu.object);
	marketingMenu.addChild(marketingMenu.textObject);
	cacheItem(marketingMenu);
	gameStage.addChild(marketingMenu)

	politicsMenu = new createjs.Container();
	politicsMenu.x = gameStage.width* 0.44
	politicsMenu.y = 0
	politicsMenu.width = gameStage.width* 0.11
	politicsMenu.height = gameStage.height * 0.025
	politicsMenu.object = new createjs.Shape(new createjs.Graphics().setStrokeStyle(1).beginStroke("black").beginLinearGradientFill(["#222", "#444", "#444", "#222"], [0, 0.25, 0.75, 1], 0, 0, 0, politicsMenu.height).drawRect(0, 0, politicsMenu.width, politicsMenu.height))
	createTextObject(politicsMenu, "text", "Politics", 0.5);
	politicsMenu.addEventListener('click', function() {
		lastMenu.textObject.color = "white"
		cacheItem(lastMenu)
		politicsMenu.textObject.color = "red"
		cacheItem(politicsMenu)
		lastMenu = politicsMenu
	});
	politicsMenu.addChild(politicsMenu.object);
	politicsMenu.addChild(politicsMenu.textObject);
	cacheItem(politicsMenu);
	gameStage.addChild(politicsMenu)

	corporateMenu = new createjs.Container();
	corporateMenu.x = gameStage.width* 0.55
	corporateMenu.y = 0
	corporateMenu.width = gameStage.width* 0.11
	corporateMenu.height = gameStage.height * 0.025
	corporateMenu.object = new createjs.Shape(new createjs.Graphics().setStrokeStyle(1).beginStroke("black").beginLinearGradientFill(["#222", "#444", "#444", "#222"], [0, 0.25, 0.75, 1], 0, 0, 0, corporateMenu.height).drawRect(0, 0, corporateMenu.width, corporateMenu.height))
	createTextObject(corporateMenu, "text", "Corporation", 0.5);
	corporateMenu.addEventListener('click', function() {
		lastMenu.textObject.color = "white"
		cacheItem(lastMenu)
		corporateMenu.textObject.color = "red"
		cacheItem(corporateMenu)
		lastMenu = corporateMenu
	});
	corporateMenu.addChild(corporateMenu.object);
	corporateMenu.addChild(corporateMenu.textObject);
	cacheItem(corporateMenu);
	gameStage.addChild(corporateMenu)

	expansionMenu = new createjs.Container();
	expansionMenu.x = gameStage.width* 0.66
	expansionMenu.y = 0
	expansionMenu.width = gameStage.width* 0.11
	expansionMenu.height = gameStage.height * 0.025
	expansionMenu.object = new createjs.Shape(new createjs.Graphics().setStrokeStyle(1).beginStroke("black").beginLinearGradientFill(["#222", "#444", "#444", "#222"], [0, 0.25, 0.75, 1], 0, 0, 0, expansionMenu.height).drawRect(0, 0, expansionMenu.width, expansionMenu.height))
	createTextObject(expansionMenu, "text", "Expansion", 0.5);
	expansionMenu.addEventListener('click', function() {
		lastMenu.textObject.color = "white"
		cacheItem(lastMenu)
		expansionMenu.textObject.color = "red"
		cacheItem(expansionMenu)
		lastMenu = expansionMenu
	});
	expansionMenu.addChild(expansionMenu.object);
	expansionMenu.addChild(expansionMenu.textObject);
	cacheItem(expansionMenu);
	gameStage.addChild(expansionMenu)

	researchMenu = new createjs.Container();
	researchMenu.x = gameStage.width* 0.77
	researchMenu.y = 0
	researchMenu.width = gameStage.width* 0.11
	researchMenu.height = gameStage.height * 0.025
	researchMenu.object = new createjs.Shape(new createjs.Graphics().setStrokeStyle(1).beginStroke("black").beginLinearGradientFill(["#222", "#444", "#444", "#222"], [0, 0.25, 0.75, 1], 0, 0, 0, researchMenu.height).drawRect(0, 0, researchMenu.width, researchMenu.height))
	createTextObject(researchMenu, "text", "Research", 0.5);
	researchMenu.addEventListener('click', function() {
		lastMenu.textObject.color = "white"
		cacheItem(lastMenu)
		researchMenu.textObject.color = "red"
		cacheItem(researchMenu)
		lastMenu = researchMenu
	});
	researchMenu.addChild(researchMenu.object);
	researchMenu.addChild(researchMenu.textObject);
	cacheItem(researchMenu);
	gameStage.addChild(researchMenu)

	chatMenu = new createjs.Container();
	chatMenu.x = gameStage.width* 0.88
	chatMenu.y = 0
	chatMenu.width = gameStage.width* 0.12
	chatMenu.height = gameStage.height * 0.025
	chatMenu.object = new createjs.Shape(new createjs.Graphics().setStrokeStyle(1).beginStroke("black").beginLinearGradientFill(["#222", "#444", "#444", "#222"], [0, 0.25, 0.75, 1], 0, 0, 0, chatMenu.height).drawRect(0, 0, chatMenu.width, chatMenu.height))
	createTextObject(chatMenu, "text", "Chat", 0.5);
	chatMenu.addEventListener('click', function() {
		lastMenu.textObject.color = "white"
		cacheItem(lastMenu)
		chatMenu.textObject.color = "red"
		cacheItem(chatMenu)
		lastMenu = chatMenu
	});
	chatMenu.addChild(chatMenu.object);
	chatMenu.addChild(chatMenu.textObject);
	cacheItem(chatMenu);
	gameStage.addChild(chatMenu)

	playerStage.addChild(gameStage);

	playerStage.update()
}


function init() {
	createStage()
	playerStage.update()

	createjs.Ticker.on("tick", gameLoop);
	createjs.Ticker.setFPS(32);
	// document.onkeydown = handleKeyDown
	// playerStage.mouseMoveOutside = true;
	// playerStage.addEventListener("stagemouseup", handleClick);
	// miniMapStage.addEventListener("click", miniMapClick);
	// playerStage.addEventListener("stagemousemove", handleMouse);
}

function gameLoop() {
	playerStage.update();
}