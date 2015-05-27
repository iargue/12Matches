function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = parseInt((duration / 1000) % 60),
        minutes = parseInt((duration / (1000 * 60)) % 60),
        hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
}

function padString(string, padding) {
    var newText = string;
    if (string.length < padding)
        for (var i = 0; i < padding - string.length; i++)
            i % 2 === 0 ? newText = " " + newText : newText += " ";
    return newText;
}

function timeToMs(str) {
    var p = str.split(':'),
        s = 0,
        m = 1;

    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }

    return s * 1000;
}

function getRandom10(min, max) {
    return getRandomInt(min / 10, max / 10) * 10;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Clone(x) {
    for (p in x)
        this[p] = (typeof(x[p]) == 'object') ? new Clone(x[p]) : x[p];
}

function displayText(text, color) {
    var y = playerStage.canvas.height - 50;
    var blackList = []
    for (var particle in particleList) {
        blackList.push(particleList[particle].stageObject.y)
    }
    while (true) { //Be cafefull with this one luke
        if (blackList.indexOf(y) != -1) {
            y -= 20;
        } else {
            var textObject = new createjs.Text(text, "12px " + textFont, color);
            textObject.x = playerStage.canvas.width / 2;
            textObject.y = y;
            playerStage.addChild(textObject);
            particleList.push(new textParticle(textObject, 2000));
            break;
        }
        if (y < playerStage.canvas.height / 2 + playerStage.canvas.height / 4) {
            break
        }
    }
}


function isInTriangle(px, py, ax, ay, bx, by, cx, cy) {

    // This is not readable at all, but this uses the  Barycentric coordinate method to test for collision with a triangle.
    //px,py are the point you want to test
    //ax,ay, bx,by, cx,cy are the 3 points that make the triangle.

    var v0 = [cx - ax, cy - ay];
    var v1 = [bx - ax, by - ay];
    var v2 = [px - ax, py - ay];

    var dot00 = (v0[0] * v0[0]) + (v0[1] * v0[1]);
    var dot01 = (v0[0] * v1[0]) + (v0[1] * v1[1]);
    var dot02 = (v0[0] * v2[0]) + (v0[1] * v2[1]);
    var dot11 = (v1[0] * v1[0]) + (v1[1] * v1[1]);
    var dot12 = (v1[0] * v2[0]) + (v1[1] * v2[1]);

    var invDenom = 1 / (dot00 * dot11 - dot01 * dot01);

    var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
    var v = (dot00 * dot12 - dot01 * dot02) * invDenom;

    return ((u >= 0) && (v >= 0) && (u + v < 1));
}

function cacheItem(item) { //Will Cache any item with width or height that is defined
    //console.log(item);
    if (typeof item.width === "undefined" || item.height === "undefined") {
        console.log("Unable to cache " + item)
    } else if (item.cacheCanvas) {
        if (item.cacheCanvas.width !== item.width || item.cacheCanvas.height !== item.height) {
            item.uncache()
            item.cache(0, 0, item.width, item.height)
        } else {
            item.updateCache()
        }
    } else {
        item.cache(0, 0, item.width, item.height)
    }
}

function createTextObject(container, type, text, width, padding, color) {
    var newText = text;
    // Create string always 9 or more characters long
    if (!padding && padding !== 0) padding = 9
    if (text.length < padding) {
        for (var i = 0; i < padding - text.length; i++)
            i % 2 === 0 ? newText = " " + newText : newText += " "
    }
    switch (type) {
        case "label":
            container.labelObject = new createjs.Text(newText, textSize + "px " + textFont, color);
            container.labelObject.scaleX = (container.width * width) / container.labelObject.getMeasuredWidth();
            container.labelObject.scaleY = (container.height * 0.45) / container.labelObject.getMeasuredHeight();
            container.labelObject.x = (container.width * 0.5) - (container.labelObject.getTransformedBounds().width * 0.5);
            container.labelObject.y = container.labelObject.getTransformedBounds().height * 0.025;
            container.addChild(container.labelObject);
            break
        case "content":
            container.contentObject = new createjs.Text(newText, textSize + "px " + textFont, "#FFF")
            container.contentObject.scaleX = (container.width * width) / container.labelObject.getMeasuredWidth();
            container.contentObject.scaleY = (container.height * 0.45) / container.contentObject.getMeasuredHeight();
            container.contentObject.x = (container.width * 0.5) - (container.contentObject.getTransformedBounds().width * 0.5);
            container.contentObject.y = container.height - (container.contentObject.getTransformedBounds().height * 1.025);
            container.addChild(container.contentObject);
            break
        default:
            container.textObject = new createjs.Text(newText, textSize + "px " + textFont, '#FFF');
            container.textObject.scaleX = (container.width * width) / container.textObject.getMeasuredWidth();
            container.textObject.scaleY = (container.height * 0.5) / container.textObject.getMeasuredHeight();
            container.textObject.x = (container.width * 0.5) - (container.textObject.getTransformedBounds().width * 0.5);
            container.textObject.y = container.textObject.getTransformedBounds().height * 0.5;
            container.addChild(container.textObject);
            break
    }
}

// @container - createjs container
// @side - 'left', 'right'
function createSelectorBox(container, side) {

}

function timeIt(callBack, arguments, name) {
    console.time(name)
    callBack.call(arguments)
    console.timeEnd(name)
}