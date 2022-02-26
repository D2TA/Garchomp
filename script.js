// Link Data Object 
var PortfolioLib = [];   
                    // ['ProductName','ProductLink','GithubLink']
PortfolioLib.push(
  ['SpeedType','https://main.d243o1qym99z64.amplifyapp.com/','https://github.com/D2TA/SpeedType']  
)

PortfolioLib.push(
  ['ARAMWeb','https://main.d2rukqrq01oxor.amplifyapp.com/','https://github.com/D2TA/ARAMWeb']
)

PortfolioLib.push(
  ['RandomColorSite','https://main.d2rukqrq01oxor.amplifyapp.com/','https://github.com/D2TA/RandomColorSite']
)




// Initalize Table Object
var tableObj = document.getElementById("ContentTableObj");

for (var key in PortfolioLib) {
  var tableObjrow = tableObj.insertRow(key);

  // Define Column
  var ProductName  = tableObjrow.insertCell(0);
  var ProductLink  = tableObjrow.insertCell(1);
  var GitHubLink   = tableObjrow.insertCell(2);  

  // Add some text to the new cells:
  ProductName.innerHTML = PortfolioLib[key][0];
  ProductLink.innerHTML = "<a href='" + PortfolioLib[key][1] + "'>" + PortfolioLib[key][0] + "</a>";
  GitHubLink.innerHTML  = "<a href='" + PortfolioLib[key][2] + "'>" + 'Github Link' + "</a>";  
}




