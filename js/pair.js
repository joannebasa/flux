$($ => {
	let playerForm = $("#playerForm");
	let playerField = $("#inputAddPlayer");
	let playerList = $("#playerList");
	let playerPairButton = $("#playerPairButton");
	let pairedPlayers = $("#pairedPlayers");


	// add player to list
	playerForm.on("submit", (e) => {
    e.preventDefault(); // prevent default form behaviour

    // get name from field
    let playerName = playerField.val();

		// build list element
		if (playerName == "") { //does not add to list if field empty

    } else {
			let playerNameItem = $('<li />', { text: playerName });

	    // add to list
	    playerList.append(playerNameItem);
			}
	    //clear field between adds
	    playerField.val("");

  });

	//pair players
	playerPairButton.on("click", () => {
		let people = [];
		//pushing items into array and displaying items in console
		$("#playerList li").each(function() { people.push($(this).text()) });

		// this assumes an even number of players
		if (people.length % 2 !== 0) {
		   $("#morePlayers").append("You must have an even number of players. You currently have " + people.length + " to play.");

		} else {
		  $("#morePlayers").remove(); //clears message once condition passes

			//randomises players
		  let splitNames = (i, people) => {
		  let a = people.slice(0, i);
		  let b = people.slice(i, people.length);
		  return [a, b];
			};

			let shuffle = people => {
			  return people.slice(0).sort(() => {
			    return 0.5 - Math.random();
			  });
			};

			let paired = people => {
			  return people[0].map((players, i) => {
			    return people.map((players) => {
			      return players[i];
			    });
			  });
			}

	    let result = paired(splitNames(people.length / 2, shuffle(people)));

			//split them into different lines
			pairedPlayers.html(result.join("<br>"));

			// add "vs" to every match ?map

		}
	});

});
