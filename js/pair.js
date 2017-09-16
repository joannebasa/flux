
// execution
$($ => {
	let playerField = $("#inputAddPlayer");
	let playerAddButton = $("#playerAddButton");
	let playerList = $("#playerList");
	let playerPairButton = $("#playerPairButton");
	let pairedPlayers = $(".pairedPlayers");
	// need to keep the array outside the event handlers
	let people = [];

	// add player to list
	playerAddButton.on("click", () => {

    // get name from field
    let playerName = playerField.val();

    // build list element
    let playerNameItem = $('<li />', { text: playerName });

    // add to list
    playerList.append(playerNameItem);

    //clear field between adds
    playerField.val('');

  	});


	// get items

	playerPairButton.on("click", () => {
		//pushing items into array and displaying items in console
		$("#playerList li").each(function() { people.push($(this).text()) });

		// this assumes an even number of players

		if (people.length % 2 !== 0) {
		   $("#morePlayers").append("You must have an even number of players. You currently have " + people.length + " names.");

		} else {
		  $("#morePlayers").remove(); //clears message once condition passes
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
		    pairedPlayers.append(result.join(" <br /> "));
				// add "vs"
		}
	});

});
