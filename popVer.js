  

  var elementArray = cy.elements('node[class = "graph"]');
  var indexCorrespondingToChosenValue = new Array(12);
  var arrayOfAdjacency = new Array(12);

  $('select').on('change', function() 
  {    
    $(`span.selected:eq(${$('select').index(this)})`).text(this.options[this.options.selectedIndex].value)

    nodeValues [this.options.selectedIndex] = this.options[this.options.selectedIndex].value;
    console.log(this.options[this.options.selectedIndex].value);
    var frig = this.options[0].value;
    var menuNode = frig.replace( /^\D+/g, ''); //value of the node on the righthand menu
    //var menuNode = document.getElementsByClassName('qnum')[0].innerHTML; (should work like frig but it doesnt, have to resort to this inelegant method for the meantime)
    var nodeIndex = menuNode - 1;
    if (nodeIndex > -1)
    {
      nodeValues[nodeIndex] = this.options[this.options.selectedIndex].value; 
    //put the value chosen into the corresponding index
    (console.log(nodeIndex + " nodeIndex"));
    console.log(menuNode + " menuNode");
    var chosenValue = nodeValues[nodeIndex];
    cy.$(elementArray[nodeIndex]).style({label: chosenValue + " (node " + menuNode + ")" });
    cy.$(elementArray[nodeIndex]).data({name: this.options.selectedIndex });
    mapOfNotes.set(chosenValue, nodeIndex);
    //console.log(elementArray[nodeIndex].data('name') + " name");

    //this new array holds the pointer to get the values on the labels of the other connected nodes to make it easier to validate and avoid tritone clusters using a circular array

    var currentNode = this.options.selectedIndex;
    indexCorrespondingToChosenValue[nodeIndex] = currentNode;

    console.log(currentNode + " index of value chosen for node " + menuNode);

    //no option for bi-directional nodes; had to compromise, each node has 2 outgoers and 2 incomers, they must all be fit into the same array variable. elementArray[nodeIndex].outgoers is an object, must transform into an array of objects to concatenate properly

    var outGoingNodes = elementArray[nodeIndex].outgoers('node[class = "graph"]');

    var incomingNodes = elementArray[nodeIndex].incomers('node[class = "graph"]');

    var nodesConnectedToCurrent = [];

    for(var i = 0; i < outGoingNodes.length; i++)
    {
      nodesConnectedToCurrent.push(outGoingNodes[i]);

    }

    for(var i = 0; i < incomingNodes.length; i++)
    {
      nodesConnectedToCurrent.push(incomingNodes[i]);

    }

    //nodesConnectedToCurrent.concat(incomingNodes);

    /*for(var i = 0; i < incomingNodes.length; i++)
    {
      console.log(incomingNodes[i].id() + " fafa");
      nodesConnectedToCurrent.push(incomingNodes[i]);
    }*/
   
    arrayOfAdjacency[menuNode] = nodesConnectedToCurrent;
    }

    

  });

  