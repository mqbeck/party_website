// Check for saved preference on page load
if(localStorage.getItem('dark_mode') === 'enabled')
{
	setDark();
}

function includeHTML()
{
	//loop through a collection of all HTML elements:
	var allElements = document.getElementsByTagName("*");
	for (i = 0; i < allElements.length; i++)
	{
		var element = allElements[i];

		//search for elements with a certain attribute:
		var file = element.getAttribute("include-html");
		if (file)
		{
			//make an HTTP request using the attribute value as the file name:
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function()
			{
				if (this.readyState == 4)
				{
					if (this.status == 200) {element.innerHTML = this.responseText;}
					if (this.status == 404) {element.innerHTML = "Page not found.";}

					//remove the attribute, and call this function once more:
					element.removeAttribute("include-html");
					includeHTML();
				}
			}      
			xhttp.open("GET", file, true);
			xhttp.send();
			//exit the function:
			return;
		}
	}
}


// highlight the current state
let path = window.location.pathname;
let fileName = path.substring(path.lastIndexOf('/') + 1);

if (!fileName.includes("index"))
{
	let state = fileName.slice(0,2);
   
	// highlight the state
	document.getElementById(state).style.fill = "#90233d";
}

function setDark()
{
	const mainBackground = "#252f30"; // lighter/greener dark grey
	const gridBackground = "#11121c"; // dark blue grey
	const mainTextColor = "white";
	const headerTextColor = "#66d176"; // light purple grey
	const linkColor = "#21cbed"; // light blue
	
	// set all the header colors
	document.getElementById("partyName").style.color = headerTextColor;
	document.getElementById("partyIssues").style.color = headerTextColor;
	document.getElementById("process").style.color = headerTextColor;
	document.getElementById("pay").style.color = headerTextColor;
	document.getElementById("partyName").style.color = headerTextColor;
	
	// set the background and default text color
	document.body.style.background = mainBackground;
	document.body.style.color = mainTextColor;
	
	// set the main grid background color
	const main_grid = document.querySelectorAll('.grid-container > div');
	main_grid.forEach((element) => element.style.background = gridBackground);
	
	// set the office grid background
	const office_grids = document.querySelectorAll('.office_grid > div');
	office_grids.forEach((element) => element.style.background = gridBackground);
	const office_grid = document.querySelectorAll('.office_grid');
	office_grid.forEach((element) => element.style.background = gridBackground);
	
	// need to set the links
	const link = document.querySelectorAll('a');
	link.forEach((element) => element.style.color = linkColor);
	
	localStorage.setItem('dark_mode', 'enabled');
}

function setLight()
{
	// empty string resets to css declared value
	const mainBackground = "" //"#7a9e9f";
	const gridBackground = "";
	const mainTextColor = "";
	const headerTextColor = "";
	const linkColor = "";
	
	// set all the header colors
	document.getElementById("partyName").style.color = headerTextColor;
	document.getElementById("partyIssues").style.color = headerTextColor;
	document.getElementById("process").style.color = headerTextColor;
	document.getElementById("pay").style.color = headerTextColor;
	document.getElementById("partyName").style.color = headerTextColor;
	
	// set the background and default text color
	document.body.style.background = mainBackground;
	document.body.style.color = mainTextColor;
	
	// set the main grid background color
	const main_grid = document.querySelectorAll('.grid-container > div');
	main_grid.forEach((element) => element.style.background = gridBackground);
	
	// set the office grid background
	const office_grids = document.querySelectorAll('.office_grid > div');
	office_grids.forEach((element) => element.style.background = gridBackground);
	const office_grid = document.querySelectorAll('.office_grid');
	office_grid.forEach((element) => element.style.background = gridBackground);
		
	// need to set the links
	const link = document.querySelectorAll('a');
	link.forEach((element) => element.style.color = linkColor);
	
	localStorage.setItem('dark_mode', null);	
}