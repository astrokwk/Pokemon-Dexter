



$(document).ready(function() {

var url = "https://pokeapi.co/api/v2/pokemon/";

var pokemon = document.getElementById('pokemon');
var button = document.getElementById('button');
var inputVal = document.getElementById('input').value;
var input = inputVal.toLowerCase();

var pokeURL = url + input;

/*
button.addEventListener('click', function(){
	console.log('chicken');
	
	fetch(pokeURL)
	.then(function(r => r.json()){
		console.log(r.status);
		console.log(r.json());
	})
	
	
	fetch(pokeURL)
	.then(function(r) {
	console.log(r.status);
	return r.json();
	})
	.then(function(j){
	console.log(j);
	
	
	.then(function(res) { 
		return res.json();
	})
.then(function(json){
		console.log(json);
	});
	
	
	
			 
		
	

	
	

	

			var img = document.createElement('img');
			img.setAttribute('src', j.sprites.front_default );
			
			var pokemon = document.getElementById('pokemon');

			pokemon.appendChild(img);
	
})
});
*/

	
//--Animation of input box when clicked
	$('.searchBox').click(function(){
	
		$('#input').animate({width: 'show', right: '100'});

	});
	
	
	
	
/*	$(`#input`).keyup(function (e) {
		var key = e.which;
		if (e.keyCode === 13) {*/
			




//--Event happen when search is clicked
/*button.addEventListener*/

/*$(document).on*/
button.addEventListener('click', function pokeSubmit(){
		var paramVal = document.getElementById("input").value;
    var param = paramVal.toLowerCase();
    /*var pokeURL = "https://pokeapi.co/api/v2/pokemon-form/" + param*/;
	var uRLl = "https://pokeapi.co/api/v2/pokemon-form/";
	var pokeURL = "https://pokeapi.co/api/v2/pokemon/" + param;
		var entries = "https://pokeapi.co/api/v2/pokemon-species/" + param;
		var pokemon = document.getElementById('pokemon');
	var po = document.getElementById('po');
	var mo = document.getElementById('mo');
	
	
	/*		var evoo = document.createElement('div');
		evoo.setAttribute('id', 'eva');*/
	
	
	
	
					var weight = document.createElement('div');
				var height = document.createElement('div');
				var type = document.createElement('div');
				var habitat = document.createElement('div');
	
	
	
	//Status
	var success = false;
	
	
	
	const t0 = performance.now();


/*	$('#pokemon').html('');*/
	
	    $.getJSON(pokeURL, function(data){
				
			
			//Status succeed
			success = true;
			
        console.log(data);
        console.log(JSON.stringify(data, null, "  "));
				
				$(`#numName`).html(`#` + data.id + `. `+ data.name);
			
			/*console.log(data.abilities);*/
				
				for (var mey in data.forms) {
					 var formURL = data.forms[mey].url;
					
													var img = document.createElement('img');
										img.setAttribute('src', data.sprites.front_default);
					
									$.getJSON(formURL, function(e){

/*								var img = document.createElement('img');
										img.setAttribute('src', data.sprites.front_default);*/
										
										if (data.sprites.front_default == null) {
											img.setAttribute('src', e.sprites.front_default);
										}
										
/*											img.setAttribute('src', e.sprites.front_default);*/
/*										if (data.forms.length == 2 && data.sprites.front_default != null) {
											img.setAttribute('src', data.sprites.front_default);
										console.log(img); 
										} else {
			img.setAttribute('src', e.sprites.front_default);
										}*/
			
/*			var pokemon = document.getElementById('pokemon');*/

			po.appendChild(img);
					
				})
				}
				
				
				
				var entry = data.species.url;
				
				
				
				
				    $.getJSON(entry, function(r){
			
			success = true;
			
        console.log(r);
        console.log(JSON.stringify(r, null, "  "));
			
/*			console.log(data.abilities);*/
			
			
			var pokemonEntries = document.createElement('p');
			pokemonEntries.setAttribute('id', 'description' );
				
				
				
				//looping through an array inside a Json object
				for (var key in r.flavor_text_entries) {
					if (r.flavor_text_entries[key].language.name == "en" && r.flavor_text_entries[key].version.name == "moon") {
						/*console.log(r.flavor_text_entries[key].flavor_text);*/
						mo.innerHTML = r.flavor_text_entries[key].flavor_text;
						break;
					} else if (r.flavor_text_entries[key].language.name == "en" && r.flavor_text_entries[key].version.name == "x") {
						mo.innerHTML = r.flavor_text_entries[key].flavor_text;
					}
					
				}
							
				
				//Abilites			
							
							

							
							
				

				
			
/*				pokemonEntries.innerHTML = r.flavor_text_entries[key].flavor_text;*/
			
			
/*			document.getElementById('pokemon');*/

			mo.appendChild(pokemonEntries);
							
				
			var evol1 = document.createElement('div');
							var evol1P = document.createElement('img');
							
			var evol2 = document.createElement('img');
							var evol2P = document.createElement('div');
							
							var evol3P = document.createElement('div');
			var evol3 = document.createElement('img');
				
							$(`#eva`).empty();
							
					$.getJSON(r.evolution_chain.url, function(d){
						console.log(d);
						console.log(JSON.stringify(d, null, "  "));
						
						console.log(d.chain.evolves_to);
						console.log(d.chain.species.name);
						
						
						
										$.getJSON(uRLl + d.chain.species.name, function(m){
											console.log(m);
											
											
											evol1P.setAttribute('class', "evol1");
											evol1P.setAttribute('src', m.sprites.front_default);
												evol1.setAttribute('style', 'order: 1;');
											/*$(`#eva`).empty();*/
											/*$(`#eva`).append(evol1);*/
											
											$(`#eva`).append(evol1);
											$(evol1).append(evol1P);
											/*evol1.appendChild(evol1P);*/
											/*$(evol1).empty().append(evol1P);*/
									/*		evol1.appendChild(evol1P);*/
											/*$(evol1).replaceWith(evol1P);*/
										})
							
						
						
						
						
							var chiii = d.chain.evolves_to;
						
							if (chiii.length < 1) {
								console.log("No evolution at all");
							} else {
								
								for (var meat in d.chain.evolves_to){
									var meek = d.chain.evolves_to[meat];
									
										if (meek.length < 1) {
										console.log("No more evolution");
									} else {
										console.log('More evolution');
										console.log(d.chain.evolves_to[meat].species.name);
										
										
										
										
										$.getJSON(uRLl + d.chain.evolves_to[meat].species.name, function(n){
											console.log(n);
											
											
											evol2.setAttribute('class', 'evol2');
											evol2.setAttribute('src', n.sprites.front_default);
											/*	evol1.setAttribute('style', 'order: 1;');*/
												evol2P.setAttribute('style', 'order: 2;');
/*											evol1P.setAttribute('style', 'margin-left: auto;');
											evol2.setAttribute('style', 'margin-left: auto;');*/
											$(`#eva`).append(evol2P);
											$(evol2P).append(evol2);
											
										})
										
										
										
/*										evol1.setAttribute('src', uRLl + d.chain.evolves_to[meat].species.name);
										*/
										
										
											for(var peter in d.chain.evolves_to[meat].evolves_to) {

											var chuuu = d.chain.evolves_to[meat].evolves_to[peter];
												
											if (chuuu.length < 1) {
												console.log('no evolution');
											} else {
											console.log(d.chain.evolves_to[meat].evolves_to[peter].species.name);
												
												
												
												
											$.getJSON(uRLl + d.chain.evolves_to[meat].evolves_to[peter].species.name, function(o){
											console.log(o);
											
								/*				evol3P.setAttribute('style', 'margin-left: auto;');*/
/*										evol1.setAttribute('style', 'display: inline-block;');
												evol2.setAttribute('style', 'display: inline-block;');*/
										 evol3.setAttribute('class', 'evol3');
												/*evol3P.setAttribute('style', 'margin-left: auto;');*/
											evol3.setAttribute('src', o.sprites.front_default);
												
												
	/*											evol1.setAttribute('style', 'order: 1;');
												evol2.setAttribute('style', 'order: 2;');*/
												evol3P.setAttribute('style', 'order: 3;');
												
											$(`#eva`).append(evol3P);
												$(evol3P).append(evol3);
											
										})
											}
							}
		

	
										}
									}

								}
							});
							
							

							//Habitat
/*			console.log(r.habitat.name);		
							
			var info5 = document.createElement('p');
			
			info5.innerHTML = r.habitat.name;
			
							$('#3').append(info5);*/
							

   /* });*/
				
				
	/*$('<hr>').insertAfter('#pokemon');*/		
				
/*				var ability = document.createElement('div');
				
				$(ability).html(`<span class="bio">Abilites: </span> <p id="abili"></p>`);*/
							
		/*					var text;
							for (var i = 0;  text=", "; i < data.abilities.length; i++) {
	
								
								document.getElementById('abili').innerHTML += data.abilities[i].ability.name + ', ';
										
									console.log(data.abilities.length-1);							
							}*/
							
							
							
							var bebe = [];
							for (var grum in data.abilities) {
								/*if(data.abilities[grum] < data.abilities.length) results.push(data.abilities[grum].ability.name);*/
								bebe.push(data.abilities[grum].ability.name);
							}
							
							console.log(bebe);
							
							document.getElementById('abili').innerHTML = bebe.join(", ");
							
							
							
					/*		var abuelo = $('#abili').contents();
							
 abuelo[abuelo.length - 1].nodeValue = "";*/
				
/*									for (var abilities in data.abilities)	{
													
						console.log(data.abilities[abilities].ability.name);
										for (var i = 0; i < 1; i++) {
											$(`#abili`).html(data.abilities[i].ability.name);
											document.getElementById('abili').innerHTML += data.abilities[i].ability.name + ', ';
										
											console.log(data.abilities[i].ability.name);
				
										
										}
						$(`#abili`).html(data.abilities[abilities].ability.name);
					}	*/
			});
				
				
				
				
				
				
/*				
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
		$(type).html(`<span class="bio">Type: </span> <p id="typee"></p`);
		$(habitat).html(`<span class="bio">Habitat: </span> <p id="habitatt"></p`);*/

				
//Calculating Height				
				
						console.log(data.height);		
		var heightNumber = data.height/10;		
				
			console.log(heightNumber * 3.28 * 12);	
				
				
		var inches = heightNumber * 3.28 * 12;
    var feet = Math.floor(inches / 12);
    inches %= 12;
		var inchesRound = Math.round(inches);
		var feetRound = feet + 1;
				

				
				
				
				
/*			var info2 = document.createElement('p');

				info2.setAttribute('id', 'info2');*/
				
			
				
		if (inchesRound === 12){
			/*info2.innerHTML = feetRound + `'` +  `0"`;*/
			$('#heightt').html(feetRound + `'` +  `0"`);
		}		else {



    /*info2.innerHTML = feet + `'` + inchesRound + `"`;	*/
			$('#heightt').html(feet + `'` + inchesRound + `"`);
			
		}
				
				
				
				/*$('#0').append(info2);*/
				
				
				
				

		/*		console.log(info);*/
				
				
	//Calculating Weight	
				
				
	var weightNumber = data.weight/10;
				
	var pounds = weightNumber * 2.205;
	var realpounds = Number(pounds.toFixed(1)).toFixed(1);			
				
				
	/*var info3 = document.createElement('p');	*/
	
/*	document.getElementById("weightt").innerHTML = realpounds + `lbs`;*/
	$(`#weightt`).html(realpounds + `lbs`);
				
	/*$('#2').append(info3);*/
	
				
function weightPkmn() {
	
}
				

//Type of Pokemon
				
		var info4 = document.createElement('p');	
		var typee = document.getElementById(`typee`);
				
				
		for(var pey in data.types) {
			if (data.types.length == 2 ) {
				/*typee.innerHTML = data.types[1].type.name + ` / ` + data.types[0].type.name;*/
				$(`#typee`).html(data.types[1].type.name + ` / ` + data.types[0].type.name);
/*				console.log(data.types[1].type.name);*/
			} else {
			/*	typee.innerHTML = data.types[0].type.name;*/
				$(`#typee`).html(data.types[0].type.name);
			}
			
			if(data.types[pey].slot == 1) {
				
			
				/*var typeColor = data.types[pey].type.name;*/
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
						
				console.log (data.types[pey].type.name);
			}
			
			
		}		
				
				
			/*	$('#1').append(info4);*/
				
				
	
				
				
				
				
//Habitat				
				
		 $.getJSON(entry, function(resp){		
		 				
							
			var info5 = document.createElement('p');
			 var habitatt = document.getElementById('habitatt');
			 
			
		/*	info5.innerHTML = resp.habitat.name;*/
			 if(resp.habitat != null) {
				/* habitatt.innerHTML = resp.habitat.name;*/
				 $(`#habitatt`).html(resp.habitat.name);
				 console.log(resp.habitat.name);	
			 } else {
/*				 habitatt.innerHTML = 'unknown';*/
				  $(`#habitatt`).html('unknown');
			 }
			
		/*					$('#3').append(info5);*/
		 
		 });
				
				
				
	//Info categories
		
			
				
				
				
				
				
				
				
				
				
				
/*				var formURL = data.forms;
				
				console.log(formURL);*/
				
/*				$.getJSON(formURL, function(e){
					
								var img = document.createElement('img');
			img.setAttribute('src', e.sprites.front_default );
			
			
			var pokemon = document.getElementById('pokemon');

			pokemon.appendChild(img);
					
				})*/
			
			
/*			var img = document.createElement('img');
			img.setAttribute('src', e.sprites.front_default );
			
			
			var pokemon = document.getElementById('pokemon');

			pokemon.appendChild(img);*/
				


    });
	
	
	
	
	
			
	
	
	
	
	
	
	
	

/*    $.getJSON(pokeURL, function(data){
			
			success = true;
			
        console.log(data);
        console.log(JSON.stringify(data, null, "  "));
			
			console.log(data.abilities);
			
			
			var img = document.createElement('img');
			img.setAttribute('src', data.sprites.front_default );
			
			
			var pokemon = document.getElementById('pokemon');

			pokemon.appendChild(img);

    });*/
	
	
	
	
	
	
	
	
	
	
	
	
/*	    $.getJSON(entries, function(r){
			
			success = true;
			
        console.log(r);
        console.log(JSON.stringify(r, null, "  "));*/
			
/*			console.log(data.abilities);*/
			
			
/*			var pokemonEntries = document.createElement('p');
			pokemonEntries.setAttribute('id', 'description' );
				
				
				
				//looping through an array inside a Json object
				for (var key in r.flavor_text_entries) {
					if (r.flavor_text_entries[key].language.name == "en" && r.flavor_text_entries[key].version.name == "moon") {
						/*console.log(r.flavor_text_entries[key].flavor_text);*/
/*						pokemonEntries.innerHTML = r.flavor_text_entries[key].flavor_text;
						break;
					} else if (r.flavor_text_entries[key].language.name == "en" && r.flavor_text_entries[key].version.name == "omega-ruby") {
						pokemonEntries.innerHTML = r.flavor_text_entries[key].flavor_text;
					}
				}*/
				
				
				
				
			
/*				pokemonEntries.innerHTML = r.flavor_text_entries[key].flavor_text;*/
			
			
/*			document.getElementById('pokemon');*/

/*			pokemon.appendChild(pokemonEntries);

    });
	*/
	
	
	
	
	
	
	
	
	console.log('chicken');
	
	// Set a 5-second (or however long you want) timeout to check for errors
setTimeout(function() {
    if (!success)
    {
        // Handle error accordingly
        alert("Yup, 404"); // string was "Houston, we have a problem."
    }
}, 10000);
	
	$(`#input`).val('');
	
	
/*			while(mo.firstChild){
    mo.removeChild(mo.firstChild);
}*/
	

	
				while(po.firstChild){
    po.removeChild(po.firstChild);
}
	

	

	
	//prevent page refresh

/*	return false;*/
	
/*while(pokemon.firstChild){
    pokemon.removeChild(pokemon.firstChild);
}*/
/*	$(`#pokemon`).html("");		*/
/*
					if (paramVal != '')
		{
			console.log('Cookie');
		} else {
				$(`#pokemon`).remove();
			}
*/
	
	const t1 = performance.now();
	console.log("This code took " + (t1 - t0) + " milliseconds.");
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
		
		/*$(`.screen`).append(evolution);*/
		$(evolution).insertAfter(`.info-container`);
		
		var evoo = document.createElement('div');
		evoo.setAttribute('id', 'eva');
		$(evoo).insertAfter(evolution);
		
		/*$('#0').append(info2);*/
	}, {once : true});
	



//Originally use to go through all the array in the JSON
/*				Object.keys(data).forEach(key => {
					console.log(key);
					console.log(data[key]);
				});*/
				
			
			
	/*		e.preventDefault();*/
			
			//Enter key when pressed activate the click event
		$(`#input`).keyup(function (e) {
			
	/*	var key = e.which;*/
		if (e.keyCode === 13) {
			$(`#button`).click();
			console.log('monkey');
					e.preventDefault();
					}
		});

	
	
	} );
/*
} );
})*/

