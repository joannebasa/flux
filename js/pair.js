$($ => {
	let playerForm = $("#playerForm");
	let playerField = $("#inputAddPlayer");
	let playerList = $("#playerList");
	let playerPairButton = $("#playerPairButton");
	let pairedPlayers = $("#pairedPlayers");

	// add player to list
	playerForm.on("submit", (e) => {
    e.preventDefault(); // prevents default form behaviour

    // get name from field
    let playerName = playerField.val();

		// build list element
		if (playerName == "") { //does not add to list if field empty

    } else {
			let playerNameItem = $('<li />', { text: playerName });

	    //clear field between adds
	    playerField.val("");

			// add to list
	    playerList.append(playerNameItem);
			}

  });

	//pair players
	playerPairButton.on("click", () => {
		pairedPlayers.empty();
		let people = [];
		//pushing items into array and displaying items in console
		$("#playerList li").each(function() { people.push($(this).text()) });

		// this assumes an even number of players
		if (people.length % 2 !== 0) {
			$("#morePlayers").empty();
			$("#morePlayers").append("You must have an even number of players. You currently have " + people.length + " to play.");

		} else {

			$("#morePlayers").empty(); //clears message once condition passes

			let shuffle = people => {
				return people.slice(0).sort(() => {
					return 0.5 - Math.random();
				});
			};

			let result = (people.length / 2, shuffle(people));

			// pairs them in another array
			let paired = [];

     	for (var i=0; i<result.length; i=i+2) {
    		paired.push(result.slice(i, i+2));
			}

			// add "vs" to every match
			for (var i=0; i<paired.length; i=i+1) {
				let games = paired[i][0] + " vs " + paired[i][1];
				let matches = $('<li />', { text: games });
				pairedPlayers.append(matches);
			}

		}

	});


});
