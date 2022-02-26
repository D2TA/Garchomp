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
  ['RandomColorSite','https://main.d2nhm8o6g9oxrs.amplifyapp.com/','https://github.com/D2TA/RandomColorSite']
)

PortfolioLib.push(
  ['StockBuyingSellingWeb','https://main.d2194jtrwcriim.amplifyapp.com/','https://github.com/D2TA/StockBuyingSellingWeb']
)

PortfolioLib.push(
  ['Financial Literacy Project','https://main.d2x70lkghbuufx.amplifyapp.com/','https://github.com/D2TA/FinancialLiteracyProject']
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

function InformationAlert(value) {
  if (value == 'email') {
    info = 'david.phong.ta@gmail.com'
  } else {
    info = '2066593769'
  }
  return alert(info)
}