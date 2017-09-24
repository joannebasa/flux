$($ => {

	let playerForm = $("#playerForm");
	let playerField = $("#inputAddPlayer");
	let playerList = $("#playerList");
	let playerPairButton = $("#playerPairButton");
	let pairedPlayers = $("#pairedPlayers");
	let removePlayer = $("#removePlayer");

	// Add player function && add player to list
	playerForm.on("submit", (e) => {
    e.preventDefault(); // prevents default form behaviour

    // get name from field
    let playerName = playerField.val();

		// build list element
		if (playerName === " " || playerName == "") { //does not add to list if field empty/ 1 accidental spacebar press

    } else {
			let playerNameItem = $('<li/>', { text: playerName });

	    //clear field between adds
	    playerField.val("");

			// add to list
	    playerList.append(playerNameItem);
		}
  });

	//Deletes last player from list
  removePlayer.on("click", () => {
		$("#playerList li:last").remove();
	});

	//Pair players function
	playerPairButton.on("click", () => {
		pairedPlayers.empty();
		let people = [];
		//pushing items into array and displaying items
		$("#playerList li").each(function() { people.push($(this).text()) });

		// this assumes an even number of players
		if (people.length % 2 !== 0 || people.length == 0) {
			$("#morePlayers").empty();
			$("#morePlayers").append("<h3>You must have an even number of players.<br>You currently have " + people.length + " on the list.<br><strong>Add</strong> another <u>AND/OR</u> <strong>undo</strong> last player then <strong>pair</strong> again.</h3>");

		} else {
			pairedPlayers.append("<h3>Players will compete as follows: </h3>")
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
				let matches = $('<li/>', { text: games });
				pairedPlayers.append(matches);
			}
		}
	});

	//tooltips
  $('[data-toggle="tooltip"]').tooltip();
});
