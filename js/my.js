//var game = function (time, package,  source, destination) {
//logic
//}

var space = {
    var clock,
	origin = Number,
	destination = Number,
	newNode;

    var package = {};
    var node = {};
    
    //is dead or alive

    origin.distance = 0;
    destination.distance = undefined;

    //beginning
    //origin = currentNode; 

    var isNearMe = function (currentNode, newNode) {
	var pi = 22 / 7; 
	var distanceBetweenNodes = newNode.distance - currentNode.distance;
	var passPacket = function (nextNode, presentNode) {
	    presentNode.hasPackage = false;
	    nextNode.hasPackage = true;
	};
	var vicinitiy = (2 * (pi * distanceBetweenNodes));
	
	if (currentNode.distance < vicinity) {
	    if (newNode.isDestination) {
		clock = 0;
	    }
	    passPacket(newNode, currentNode);
	}
    }

    if (package.isDelivered) {
	clock === 0;
    } else {
	package.isOutForDelivery;
	isNearMe(nodes);
	
    }
}
