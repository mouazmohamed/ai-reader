function lire()
{
	// Récupérer le texte de l'élément textarea
	var texte = document.getElementById('texte').value;

	// Créer un objet de synthèse vocale
	var syntheseVocale = window.speechSynthesis;
	var message = new SpeechSynthesisUtterance(texte);

	// Sélectionner la voix
	message.voiceURI = 'native'
	message.lang = 'fr-FR';

	//
	let indexVoice = select.value;
	message.voice = voices[indexVoice];

	// Lire le message
	syntheseVocale.speak(message);
}

function stop()
{
	// Récupérer le texte de l'élément textarea
	var texte = document.getElementById('texte').value;

	// Créer un objet de synthèse vocale
	var syntheseVocale = window.speechSynthesis;
	var message = new SpeechSynthesisUtterance(texte);

	// Sélectionner la voix
	message.voiceURI = 'native'
	message.lang = 'fr-FR';

	// Arrêter le message
	syntheseVocale.cancel(message);
}

let voices;
let select = document.getElementById('select');

// Récupérer les voix à partir du tableau voices
speechSynthesis.onvoiceschanged = function()
{
	voices = window.speechSynthesis.getVoices();
	voices.forEach(function(item, i)
	// item -> Les voix du tableau qu'on va parcourir
	// i -> Index du tableau
	{
	// <option> </option> -> Choix dans le select
	let opt = document.createElement('option');

	// <option value="i"> </option>
	opt.value = i; // Valeur qui est l'index du tableau

	// <option value="i">item.name</option> -> Afficher publiquement le nom de la voix qu'on va utiliser
	opt.innerText = item.name; // Récupérer les noms des voix

	// Ajouter le nom des voix dans le select
	select.appendChild(opt);
	});
}