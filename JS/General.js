function showAndDisapperar(idelement)
{
	if (document.getElementById(idelement).style.display == "none")
	{
		document.getElementById(idelement).style.display = "block";
	}

	else {
		document.getElementById(idelement).style.display = "none";
	}
}

function animateHeader() {
	var text = "O naszej stronie"

    var i = 0;
	var typingInterval = setInterval(function(){
        if(i < text.length){
            document.querySelector(".General-header").innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    },300);
}

function writeText(){
	var text = "Strona pomoże ci zdać Matematykę w klasie 3 Technikum na ocenę Bardzo Dobrą! Na Stronie można znaleźć wszystkie tematy, które obejmują całą 3 klase Technikum.Tematy znajdują się w lewym panelu strony. Kliknij na dział który cię interesuje, a pokarze ci się lista tematów obejmujących ten dział. Klikając na wybrany temat, strona automatycznie przeniesie cię do podstrony, w której to znajdziesz wszystkie definicje, wzory, przykłady oraz ćwiczenia do tematu, w który kliknąłeś/aś. Podczas wykonywania ćwiczeń/zadań, strona liczy ilość błędów jakie popełniasz oraz ilość twoich poprawnych odpowiedzi. Dodatkowo po rozwiązaniu dziesięciu prostych zadań strona wylicza jaką ocenę dostaniesz z tego tematu. Jeżeli ocena która ci wyjdzie nie będzie cię zadowalać, spróbuj jeszcze raz wykonać zestaw zadań a na pewno twój wynik się poprawi na lepszy :). Strona jest tak zaprojektowana by zachęcać uczniów do Praktykowania matematyki znacznie częściej niż robili to dotychczas. Stoi za tym wygląd strony, oraz system nagród za dobre wyniki w nauce, bez żadnego stresu, bez kar. Co ma ze sobą wspólnego szkoła a ta strona? Tylko to, że ma się na niej dostęp do tych samych tematów co są przerabiane w szkole. Jest to zupełnie inny sytem nauki niż w Polskich szkołach. ta strona jest odwrotnością polskiej szkoły.";

    var i = 0;
	var typingInterval = setInterval(function(){
        if(i < text.length){
            document.querySelector(".General-paragraph").innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    },15);
}
	
window.onload = function run() {
	showAndDisapperar('section-wykres');
	showAndDisapperar('section-wyrazenia');
	showAndDisapperar('section-trygonometria');
	showAndDisapperar('section-plalimetria');
	showAndDisapperar('section-logarytmy');
	animateHeader();
	writeText();
};