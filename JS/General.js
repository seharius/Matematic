
function repalce(disappear, show)
{
	document.getElementById(disappear).style.display = "none";
	document.getElementById(show).style.display = "block";
}

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

window.onload = function run() {
	showAndDisapperar('section-wykres');
	showAndDisapperar('section-wyrazenia');
	showAndDisapperar('section-trygonometria');
	showAndDisapperar('section-plalimetria');
	showAndDisapperar('section-logarytmy');
};