


  var selectedValue = nodeValues [1];

  var xCoordinate = 0;
  var yCoordinate = 0;
  var xCoordinateRIGHTEDGE = 1000;
  var yCoordinateRIGHTEDGE = 1000;
  var xOriginEdgeDistance = xCoordinate - xCoordinateRIGHTEDGE;
  var yOriginEdgeDistance = yCoordinate - yCoordinateRIGHTEDGE;
  var xMidpoint = xCoordinateRIGHTEDGE * .5;
  var yMidpoint = yCoordinateRIGHTEDGE * .5;
  var ySmallEdgeDistance = (yCoordinateRIGHTEDGE-(yCoordinateRIGHTEDGE*.4)) - (yCoordinate+(yCoordinateRIGHTEDGE*.4));
  var xSmallEdgeDistance = (xCoordinateRIGHTEDGE-(xCoordinateRIGHTEDGE*.4)) - (xCoordinate+(xCoordinateRIGHTEDGE*.4));


  var cy = cytoscape({
  container: document.getElementById('cy'),
    
    
  elements: [
  {
    data: {id: '0', name: 'a1', class: 'graph'},
    selectable: true,
    locked: true,
    position: {x: xCoordinate, y: yCoordinate},
    style: {label: 'node 1 not chosen'}
  },

  {
    data: {id: '1', class: 'graph'},
    selectable: true,
    locked: true,
    position: {x: xCoordinateRIGHTEDGE, y: yCoordinate},
    style: {label: 'node 2 not chosen'}
  },

  {
    data: {id: '2', class: 'graph'},
    selectable: true,
    locked: true,
    position: {x: xCoordinate, y: yCoordinateRIGHTEDGE},
    style: {label: 'node 3 not chosen'}
  },

  {
    data: {id: '3', class: 'graph'},
    selectable: true,
    locked: true,
    position: {x: xCoordinateRIGHTEDGE, y: yCoordinateRIGHTEDGE},
    style: {label: 'node 4 not chosen'}
  },

  {
    data: {id: '4', class: 'graph'},
    selectable: true,
    locked: true,
    position: {x: xCoordinate+(xCoordinateRIGHTEDGE*.4), y: yCoordinate+(yCoordinateRIGHTEDGE*.4)},
    style: {label: 'node 5 not chosen'}
  },

  {
    data: {id: '5', class: 'graph'},
    selectable: true,
    locked: true,
    position: {x: xCoordinateRIGHTEDGE-(xCoordinateRIGHTEDGE*.4), y: yCoordinate+(yCoordinateRIGHTEDGE*.4)},
    style: {label: 'node 6 not chosen'}
  },


  {
    data: {id: '6', class: 'graph'},
    selectable: true,
    locked: true,
    position: {x: xCoordinate+(xCoordinateRIGHTEDGE*.4), y: yCoordinateRIGHTEDGE-(yCoordinateRIGHTEDGE*.4) },
    style: {label: 'node 7 not chosen'}
  },

  {
    data: {id: '7', class: 'graph'},
    selectable: true,
    locked: true,
    position: {x: xCoordinateRIGHTEDGE-(xCoordinateRIGHTEDGE*.4), y: yCoordinateRIGHTEDGE-(yCoordinateRIGHTEDGE*.4)},
    style: {label: 'node 8 not chosen'}
  },

  {
    data: {id: '8', class: 'graph'},
    selectable: false,
    locked: true,
    position: {x: xMidpoint, y: ySmallEdgeDistance},
    style: {label: 'node 9 not chosen'}
  },

  {
    data: {id: '9', class: 'graph'},
    selectable: true,
    locked: true,
    position: {x: xCoordinateRIGHTEDGE-xSmallEdgeDistance, y: yMidpoint },
    style: {label: 'node 10 not chosen'}
  },

  {
    data: {id: '10', class: 'graph'},
    selectable: true,
    locked: true,
    position: {x: xMidpoint, y: yCoordinateRIGHTEDGE-ySmallEdgeDistance },
    style: {label: 'node 11 not chosen'}
  },

  {
    data: {id: '11', class: 'graph'},
    selectable: true,
    locked: true,
    position: {x: xSmallEdgeDistance, y: yMidpoint},
    style: {label: 'node 12 not chosen'}
  },

  //edges for first node
  {
    data: {id: 'e1', source: 0, target: 1}
  },

  {
    data: {id: 'e2', source: 0, target: 2}
  },


  //edges for second node
  

  {
    data: {id: 'e7', source: 1, target: 9}
  },

  {
    data: {id: 'e8', source: 1, target: 8}
  },


 
  {
    data: {id: 'e11', source: 2, target: 11}
  },
  {
    data: {id: 'e12', source: 2, target: 10}
  },


  

  {
    data: {id: 'e15', source: 3, target: 1}
  },
  {
    data: {id: 'e16', source: 3, target: 2}
  },


  
  {
    data: {id: 'e19', source: 4, target: 5}
  },
  {
    data: {id: 'e20', source: 4, target: 6}
  },

  
  {
    data: {id: 'e22', source: 5, target: 8}
  },
  
  {
    data: {id: 'e24', source: 5, target: 7}
  },


  {
    data: {id: 'e25', source: 6, target: 10}
  },
  {
    data: {id: 'e26', source: 6, target: 11}
  },


  {
    data: {id: 'e29', source: 7, target: 6}
  },
  
  {
    data: {id: 'e31', source: 7, target: 9}
  },
  


  {
    data: {id: 'e33', source: 8, target: 0}
  },
  
  {
    data: {id: 'e35', source: 8, target: 4}
  },
  


  {
    data: {id: 'e37', source: 9, target: 3}
  },
  
  {
    data: {id: 'e39', source: 9, target: 5}
  },
  


  
  {
    data: {id: 'e42', source: 10, target: 7}
  },
 
  {
    data: {id: 'e44', source: 10, target: 3}
  },


  {
    data: {id: 'e45', source: 11, target: 4}
  },
  
  {
    data: {id: 'e47', source: 11, target: 0}
  },
  
  ]

  });

