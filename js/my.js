    //assume there is json that exists, structured as data.nodes.property
    
    //what they are passing
    var package = {
	isDelivered : function () {
	    return this.isDelivered;
	}
	//not sure if this is needed 
	//isOutForDelivery : function () {
	//    return this.isOutForDelivery;
	//}
    };

    //the various satellites
    var nodes = _.toArray(data.nodes);

    //depending on how the json is structured, it might make sense to apply
    //the satellite template to all nodes

    //what is a satellite?
    var satellite = {
	location : function () {
	    return this.location;
	},
	time : function () {
	    return this.time;
	},
	currentLocation : function ( ) {
	    return (this.location * this.time);
	},
	isDestination : undefined, 
	hasPacket : undefined
    };
    
    //lets make the start and end be satellite thingies 
    var origin = {}, destination = {};
    _.extend(origin, satellite);
    _.extend(destination, satellite);
    origin.hasPacket = true;
    destination.isDestination = true;

    var findNodesNearBy = function (focus, others) {
	var neighbors = [];

	_.each(others, function (other) {
	    //some math that tells me your a neighbor
	    if (mathStuff) {
		neighbors.push(other);
	    } else {
		return neighbors;
	    }
	});

	if (neighbors.length > 0) {
	    var passPacket = function (neighbor) {
		neighbor.hasPacket = true;
	    };
	    _.map(neighbors, passPacket(neighbor));
	}
	return neighbors;
    };

    var beginVisualization = function (origin , nodes) {
	var nearByNodes = findNodesNearBy(origin, nodes);
	
	if (_.findWhere(nearByNodes, isDestination) == undefined) {
	    _.map(nearByNodes, findNodesNearBy(node, nodes));
	} else {
	    alert('Packet has been delivered');
	    //end vis
	}
    }

    beginVisualization(origin, nodes);
