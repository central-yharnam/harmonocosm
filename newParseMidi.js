var notesInSong = [];
var finalNotes = [];

        /*if(demo == 1)
        {
            console.log("demo tripped");
            var files = 'the_metro.mid';
            if (files.length > 0){
                    var file = files[0];
                    document.querySelector("#FileDrop #Text").textContent = file.name;
                    parseFile(file);

            }
        } */

		if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
			document.querySelector("#FileDrop #Text").textContent = "Reading files not supported by this browser";
		}
        else {

			var fileDrop = document.querySelector("#FileDrop")

			fileDrop.addEventListener("dragenter", function(){
				fileDrop.classList.add("Hover");
			})

			fileDrop.addEventListener("dragleave", function(){
				fileDrop.classList.remove("Hover");
			});

			fileDrop.addEventListener("drop", function(){
				fileDrop.classList.remove("Hover");
			});

			;

			document.querySelector("#FileDrop input").addEventListener("change", function(e){
				//get the files
				var files = e.target.files;
				if (files.length > 0){
					var file = files[0];
					document.querySelector("#FileDrop #Text").textContent = file.name;
					parseFile(file);

				}
			});
		}

		

		function compare( a, b ) 
		{
			//console.log (a.startTime + " testing ");
  			if ( a.startTime < b.startTime )
  			{
    			return -1;
  			}

  			if ( a.startTime > b.startTime )
  			{
    			return 1;
  			}

  			return 0;
		}


		function midiNote(note, begin, duration) {
            this.currentNote = note;
            this.startTime = begin;
            this.dur = duration;

        };


        /*every note has a beginning and a duration, a chord is a set of notes that have the same beginning, these are placed
          in the same array and animated at the same time*/

        function parseNotes (notes)
        {
            finalNotes = [];
        	var chordsInSong = [];
        	var chordIndex = 0;

        	console.log("parse notes function called ");
        	console.log (notes.length);

        	for (var i = 0; i < notes.length; i++)
        	{
        		console.log("whats going on here?");
        		console.log(notes.length + " i is " + i);
        		var firstNote = notes[i]; // first note in the set
        		var time = firstNote.startTime;

        		var nextNote, nexTime;

        		if ( (i+1) < notes.length )
        		{	
                     console.log("VALUE BEFORE THIS SHIT BREAKS " + i);
        			 nextNote = notes[i+1];
        			 nexTime = nextNote.startTime;
                     console.log(i);
        		}
        		else { nexTime = -1;}

        		var curChord = [];
        		curChord[0] = firstNote;

        		var next = 1;

        		while (time == nexTime )
        		{
        			curChord[next] = nextNote;
        			next++;
        			i++;
 					if ( (i+1) < notes.length )
        			{
        				nextNote = notes[i+1];
        				nexTime = nextNote.startTime;
        			}
        			else {nexTime = -1;}
        		}

        		chordsInSong.push(curChord);

        	}

        	return chordsInSong;
        }

		function parseFile(file){
			//read the file
			var reader = new FileReader();
			
			reader.onload = function (e){
				var currentSong = []; //array to hold the notes of the current song


				var partsData = MidiConvert.parse(e.target.result);
				//document.querySelector("#ResultsText").value = JSON.stringify(partsData, undefined, 2);

				
						//console.log(partsData['tracks'][1]['notes'][0]['name']);
						var firstTrack = partsData['tracks'][1];

						var numberOfTracks = partsData['tracks'].length;

						console.log(partsData['tracks'].length + " number of tracks");

						var numNotes = 0;

						for (var j = 0; j < numberOfTracks; j++)
						{
							var currentTrack = partsData['tracks'][j];
							for (var i = 0; i < currentTrack.length; i++)
							{
								var note, begin, duration;
								note = (partsData['tracks'][j]['notes'][i]['name']);
								begin = (partsData['tracks'][j]['notes'][i]['time']);
								duration = (partsData['tracks'][j]['notes'][i]['duration']);


								notesInSong[numNotes] = new midiNote(note, begin, duration);
								numNotes++;
							}

						}	

				
			//console.log(notesInSong[0].currentNote + " CURRENT NOTE");
			notesInSong.sort(compare);

			var chorded = parseNotes(notesInSong);

			console.log(chorded.length + " length ");

			for (var i = 0; i < chorded.length; i++)
			{
				for (var j = 0; j < chorded[i].length; j++)
				{
					console.log ( i + " th chord notes: ");
					console.log(chorded[i][j]);
					//finalNotes.push(chorded);
				}

			}
			
			finalNotes = chorded;

			};


			reader.readAsBinaryString(file);

		}

		

//takes array of chords and animates them
var arNotes = ["A# / B♭", "C# / D♭", "D# / E♭", "F# / G♭", "G# / A♭"];
var sharps = ["A#","C#","D#","F#","G#"];

var mapOfSharps = new Map();

for (var g = 0; g < arNotes.length; g++)
{
    mapOfSharps.set(sharps[g], arNotes[g]);

}

var anim = function (chord)
    {

    	console.log("anim called");
    	console.log(chord.length);

        for (var i = 0; i < chord.length; i++)
        {


            var currentNote = chord[i].currentNote;
            var nLength = currentNote.length; 

            console.log(currentNote + " current note length: " + nLength);
            //console.log(currentChord.length )
            //console.log(currentChord[0]);

            if  (nLength == 3)
                {
                    
                    var note = currentNote.substring(0,2); //only taking the chars not the number: taking the C# from C#4
                    var getLabel = mapOfSharps.get(note);
                    var getId = mapOfNotes.get(getLabel);

                    console.log(note + " current note" + getId + " current ID");

                    //console.log("WHATS HAPPENING");

                    cy.$id(getId).animate(  {style:  { backgroundColor: 'green' }  }, {duration: 1}    );
                } 

            else if (nLength == 2)
                {
                    var note = currentNote[0]; //only taking the chars not the number: taking the C# from C#4
                   
                    var getId = mapOfNotes.get(note);

                    console.log(note + " current note");

                    //console.log("WHATS HAPPENING aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

                    cy.$id(getId).animate(  {style: { backgroundColor: 'green' } }, {duration: 1}    );

                }
             
        
        }

    }

    var deAnim = function (chord)
    {
    	console.log("deanim called");
    	console.log(chord.length);

        for (var i = 0; i < chord.length; i++)
        {


            var currentNote = chord[i].currentNote;

            console.log(currentNote + " current chord length: " + currentNote.length);
            //console.log(currentChord.length )
            //console.log(currentChord[0]);

            if (currentNote.length == 3)
                {
                    
                    var note = currentNote.substring(0,2); //only taking the chars not the number: taking the C# from C#4
                    var getLabel = mapOfSharps.get(note);
                    var getId = mapOfNotes.get(getLabel);

                    console.log(note + " current note");


                    cy.$id(getId).animate(  {style: { backgroundColor: '#d5da42' } }, {duration: 1}    );
                } 

                else if (currentNote.length == 2)
                {
                    var note = currentNote[0]; //only taking the chars not the number: taking the C# from C#4
                   
                    var getId = mapOfNotes.get(note);

                    console.log(note + " current note");

                    cy.$id(getId).animate(  {style: { backgroundColor: '#d5da42' } }, {duration: 1}    );

                }
        }

    }



var test = function (node, delay, times) 
    {

        console.log("animation active");
        anim(node[iter]);

        if (it > 0)
        {
            deAnim(node[iter-1]);
            console.log("de animation loop active")
        }

        iter++;
        if( iter < howManyTimes )
        {
            var duration = node[iter-1][0].dur ; 
            
            setTimeout( test(node, duration, times), (delay*1000) );

        }
    }


    



function animMidi(node)
{

    var iter = 0, howManyTimes = node.length;
    console.log("fuck");
    test(node, 0, howManyTimes);
    

}


