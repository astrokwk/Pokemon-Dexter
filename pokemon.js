$(document).ready(function() {
	var button = document.getElementById('button');
	
//--Animation of input box when clicked
	$('.searchBox').click(function(){
		$('#input').animate({width: 'show', right: '100'});
	});
	

	button.addEventListener('click', function pokeSubmit(){
		var paramVal = document.getElementById("input").value;
    var param = paramVal.toLowerCase();
		var uRLl = "https://pokeapi.co/api/v2/pokemon-form/";
		var pokeURL = "https://pokeapi.co/api/v2/pokemon/" + param;
		var po = document.getElementById('po');
		var mo = document.getElementById('mo');
	
	
		//Status
		var success = false;
	
		const t0 = performance.now();

	
	  $.getJSON(pokeURL, function(data){
			
			//Status succeed
			success = true;
			
      // console.log(data);
      // console.log(JSON.stringify(data, null, "  "));
				
			$(`#numName`).html(`#` + data.id + `. `+ data.name);
				
			for (var mey in data.forms) {
				
				var formURL = data.forms[mey].url;
				var img = document.createElement('img');
				img.setAttribute('src', data.sprites.front_default);
					
				$.getJSON(formURL, function(e){
															
					if (data.sprites.front_default == null) {
						img.setAttribute('src', e.sprites.front_default);
						}
					po.appendChild(img);
					});
				}
										
			var entry = data.species.url;
									
			$.getJSON(entry, function(r){
				success = true;
			
        // console.log(r);
        // console.log(JSON.stringify(r, null, "  "));
				var pokemonEntries = document.createElement('p');
				pokemonEntries.setAttribute('id', 'description' );
						
				//looping through an array inside a Json object
				for (var key in r.flavor_text_entries) {
					if (r.flavor_text_entries[key].language.name == "en" && r.flavor_text_entries[key].version.name == "moon") {
						mo.innerHTML = r.flavor_text_entries[key].flavor_text;
						break;
					} else if (r.flavor_text_entries[key].language.name == "en" && r.flavor_text_entries[key].version.name == "x") {
						mo.innerHTML = r.flavor_text_entries[key].flavor_text;
					}
				}
								
				//Abilites			
				
				mo.appendChild(pokemonEntries);
							
				var evol1 = document.createElement('div');
				var evol1P = document.createElement('img');
							
				var evol2 = document.createElement('img');
				var evol2P = document.createElement('div');
							
				var evol3P = document.createElement('div');
				var evol3 = document.createElement('img');
				
				$(`#eva`).empty();
							
				$.getJSON(r.evolution_chain.url, function(d){
					// console.log(d);
					// console.log(JSON.stringify(d, null, "  "));
					// console.log(d.chain.evolves_to);
					// console.log(d.chain.species.name);
					$.getJSON(uRLl + d.chain.species.name, function(m){
						// console.log(m);		
						evol1P.setAttribute('class', "evol1");
						evol1P.setAttribute('src', m.sprites.front_default);
						evol1.setAttribute('style', 'order: 1;');
									
						$(`#eva`).append(evol1);
						$(evol1).append(evol1P);
						});
							
				var chiii = d.chain.evolves_to;
						
				if (chiii.length < 1) {
					console.log("No evolution at all");
					} else {		
						for (var meat in d.chain.evolves_to){
							var meek = d.chain.evolves_to[meat];
		
							if (meek.length < 1) {
								console.log("No more evolution");
									} else {
										// console.log('More evolution');
										// console.log(d.chain.evolves_to[meat].species.name);	
									$.getJSON(uRLl + d.chain.evolves_to[meat].species.name, function(n){
										// console.log(n);	
										evol2.setAttribute('class', 'evol2');
										evol2.setAttribute('src', n.sprites.front_default);

										evol2P.setAttribute('style', 'order: 2;');

										$(`#eva`).append(evol2P);
										$(evol2P).append(evol2);
										});
										
									for(var peter in d.chain.evolves_to[meat].evolves_to) {
										
										var chuuu = d.chain.evolves_to[meat].evolves_to[peter];
												
										if (chuuu.length < 1) {
											console.log('no evolution');
											} else {
												// console.log(d.chain.evolves_to[meat].evolves_to[peter].species.name);
												$.getJSON(uRLl + d.chain.evolves_to[meat].evolves_to[peter].species.name, function(o){
												// console.log(o);
										 		evol3.setAttribute('class', 'evol3');
												evol3.setAttribute('src', o.sprites.front_default);
												evol3P.setAttribute('style', 'order: 3;');
												
												$(`#eva`).append(evol3P);
												$(evol3P).append(evol3);
										});
										}
									}
								}
							}
						}
					});
							
										
				var bebe = [];
				for (var grum in data.abilities) {
					/*if(data.abilities[grum] < data.abilities.length) results.push(data.abilities[grum].ability.name);*/
					bebe.push(data.abilities[grum].ability.name);
						}
					// console.log(bebe);		
					document.getElementById('abili').innerHTML = bebe.join(", ");
							
			});
				
				
//Calculating Height				
				
		// console.log(data.height);		
		var heightNumber = data.height/10;			
		// console.log(heightNumber * 3.28 * 12);			
		var inches = heightNumber * 3.28 * 12;
    var feet = Math.floor(inches / 12);
    inches %= 12;
		var inchesRound = Math.round(inches);
		var feetRound = feet + 1;
								
		if (inchesRound === 12){
			$('#heightt').html(feetRound + `'` +  `0"`);
		}	else {
			$('#heightt').html(feet + `'` + inchesRound + `"`);
		}
				
		
	//Calculating Weight		
		var weightNumber = data.weight/10;	
		var pounds = weightNumber * 2.205;
		var realpounds = Number(pounds.toFixed(1)).toFixed(1);			
				
		$(`#weightt`).html(realpounds + `lbs`);

//Type of Pokemon
				
		var info4 = document.createElement('p');	
		var typee = document.getElementById(`typee`);
						
		for(var pey in data.types) {
			if (data.types.length == 2 ) {
				$(`#typee`).html(data.types[1].type.name + ` / ` + data.types[0].type.name);
			} else {
				$(`#typee`).html(data.types[0].type.name);
			}
			
			if(data.types[pey].slot == 1) {
				switch (data.types[pey].type.name) {
					case "fire":
						$('nav').css('background', 'linear-gradient(to bottom, #fe8c00, #f83600)');
						$(`.bio`).css(`color`, `#f83600`);
						$('#evolution').css('background-color', `#f83600`);
						break;
					case "water":
						$('nav').css('background', 'linear-gradient(to bottom,  #00c6ff, #0072ff)');
						$(`.bio`).css(`color`, `#0072ff`);
						$('#evolution').css('background-color', `#0072ff`);
						break;
					case "bug":
						$('nav').css('background', 'linear-gradient(to bottom, #add100, #7b920a)');
						$(`.bio`).css(`color`, `#7b920a`);
						$('#evolution').css('background-color', `#7b920a`);
						break;
					case "electric":
						$('nav').css('background', 'linear-gradient(to bottom,  #fff600, #f2ce04)');
						$(`.bio`).css(`color`, `#f2ce04`);
						$('#evolution').css('background-color', `#f2ce04`);
						break;
					case "grass":
						$('nav').css('background', 'linear-gradient(to bottom,   #a8e063, #56ab2f)');
						$(`.bio`).css(`color`, `#56ab2f`);
						$('#evolution').css('background-color', `#56ab2f`);
						break;
					case "fairy":
						$('nav').css('background', 'linear-gradient(to bottom,  #ffc3a0, #ffafbd)');
						$(`.bio`).css(`color`, `#ffafbd`);
						$('#evolution').css('background-color', `#ffafbd`);
						break;
					case "normal":
						$('nav').css('background', 'linear-gradient(to bottom,  #dae2f8, #d6a4a4)');
						$(`.bio`).css(`color`, `#d6a4a4`);
						$('#evolution').css('background-color', `#d6a4a4`);
						break;
					case "ground":
						$('nav').css('background', 'linear-gradient(to bottom,  #c16000, #703800)');
						$(`.bio`).css(`color`, `#703800`);
						$('#evolution').css('background-color', `#703800`);
						break;
					case "ghost":
						$('nav').css('background', 'linear-gradient(to bottom,   #8ca6db, #b993d6)');
						$(`.bio`).css(`color`, `#b993d6`);
						$('#evolution').css('background-color', `#b993d6`);
						break;
					case "flying":
						$('nav').css('background', 'linear-gradient(to bottom,   #b6fbff, #83a4d4)');
						$(`.bio`).css(`color`, `#83a4d4`);
						$('#evolution').css('background-color', `#83a4d4`);
						break;
					case "ice":
						$('nav').css('background', 'linear-gradient(to bottom,  #b2fefa, #0ed2f7)');
						$(`.bio`).css(`color`, `#0ed2f7`);
						$('#evolution').css('background-color', `#0ed2f7`);
						break;
					case "rock":
						$('nav').css('background', 'linear-gradient(to bottom,  #b79891, #94716b)');
						$(`.bio`).css(`color`, `#94716b`);
						$('#evolution').css('background-color', `#94716b`);
						break;
					case "psychic":
						$('nav').css('background', 'linear-gradient(to bottom,  #c33764, #1d2671)');
						$(`.bio`).css(`color`, `#1d2671`);
						$('#evolution').css('background-color', `#1d2671`);
						break;
					case "poison":
						$('nav').css('background', 'linear-gradient(to bottom,  #a044ff, #6a3093)');
						$(`.bio`).css(`color`, `#6a3093`);
						$('#evolution').css('background-color', `#6a3093`);
						break;
					case "dark":
						$('nav').css('background', 'linear-gradient(to bottom,   #414345, #232526)');
						$(`.bio`).css(`color`, `#232526`);
						$('#evolution').css('background-color', `#232526`);
						break;
					case "fighting":
						$('nav').css('background', 'linear-gradient(to bottom,  #948e99, #2e1437)');
						$(`.bio`).css(`color`, `#2e1437`);
						$('#evolution').css('background-color', `#2e1437`);
						break;
					case "dragon":
						$('nav').css('background', 'linear-gradient(to bottom,  #44a08d, #093637)');
						$(`.bio`).css(`color`, `#093637`);
						$('#evolution').css('background-color', `#093637`);
						break;
					case "steel":
						$('nav').css('background', 'linear-gradient(to bottom,  #d7dde8, #757f9a)');
						$(`.bio`).css(`color`, `#757f9a`);
						$('#evolution').css('background-color', `#757f9a`);
						break;
				}	
				// console.log (data.types[pey].type.name);
			}
		}		

				
//Habitat				
				
		$.getJSON(entry, function(resp){		
			
			var info5 = document.createElement('p');
			var habitatt = document.getElementById('habitatt');

			if (resp.habitat != null) {
				$(`#habitatt`).html(resp.habitat.name);
				console.log(resp.habitat.name);
				} else {
					$(`#habitatt`).html('unknown');
				}
		 });
    });
	
	
	// console.log('chicken');
	
	// Set a 5-second (or however long you want) timeout to check for errors
	setTimeout(function() {
    if (!success){
      // Handle error accordingly
      alert("Yup, 404"); // string was "Houston, we have a problem."
		}
	}, 30000);
	
	$(`#input`).val('');
	
	while(po.firstChild){
    po.removeChild(po.firstChild);
}
	
	//prevent page refresh
	// const t1 = performance.now();
	// console.log("This code took " + (t1 - t0) + " milliseconds.");
	});
	
	
	button.addEventListener('click', function() {

		var ability = document.createElement('div');
		ability.setAttribute('class', 'abb');
		$(ability).insertAfter('#pokemon');
		$(ability).html(`<span class="bio" style="margin-left: 0px;">Abilites: </span> <p id="abili"></p>`);
		
		$('<hr>').insertAfter(ability);
						
		var meme = document.createElement('div');
		meme.setAttribute('class', 'info-container');
		$('.screen').append(meme);
				
		var weight = document.createElement('div');
		var height = document.createElement('div');
		var type = document.createElement('div');
		var habitat = document.createElement('div');

		var infoList = [height, type, weight, habitat];
				
		for (var i = 0; i < infoList.length; i++) {

			infoList[i].setAttribute('class', 'info-box');
			infoList[i].setAttribute('id', i);
						
			$(meme).append(infoList[i]);
			}
				
		$(weight).html('<span class="bio">Weight: </span> <p id="weightt"></p>');
		$(height).html(`<span class="bio">Height: </span> <p id="heightt"></p>`);
		$(type).html(`<span class="bio">Type: </span> <p id="typee"></p>`);
		$(habitat).html(`<span class="bio">Habitat: </span> <p id="habitatt"></p>`);
		
		var evolution = document.createElement('div');
		$(evolution).html('Evolution');
		evolution.setAttribute('id', 'evolution');

		$(evolution).insertAfter(`.info-container`);
		
		var evoo = document.createElement('div');
		evoo.setAttribute('id', 'eva');
		$(evoo).insertAfter(evolution);
		
	}, {once : true});
	

	//Enter key when pressed activate the click event
	$(`#input`).keyup(function (e) {
		if (e.keyCode === 13) {
			$(`#button`).click();
			e.preventDefault();
		}
	});
	
});


