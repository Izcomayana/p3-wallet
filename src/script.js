function toggle() {
  var blur = document.querySelector("#blur");
  blur.classList.toggle("active");

  var modal = document.querySelector("#modal");
  modal.classList.toggle("active");
}

function closeCom() {
  const complete = document.querySelector("#complete");
  complete.classList.add("close");
}

function toggleBal() {
  const balance = document.querySelector("#balance");
  balance.classList.toggle("hide");

  const hideBalance = document.querySelector("#hideBalance");
  hideBalance.classList.toggle("show");

  const showIcn = document.querySelector("#showIcn");
  showIcn.classList.toggle("hide");

  const hideIcn = document.querySelector("#hideIcn");
  hideIcn.classList.toggle("show");
}

function showCrypto() {
  const cryptoBtn = document.querySelector("#cryptoBtn");
  const portfolioBtn = document.querySelector("#portfolioBtn");

  const crypto = document.querySelector("#crypto");
  const portfolio = document.querySelector("#portfolio");

  cryptoBtn.classList.add("active");
  portfolioBtn.classList.remove("active");

  crypto.classList.remove("hide");
  portfolio.classList.remove("show");
}

function showPortfolio() {
  const cryptoBtn = document.querySelector("#cryptoBtn");
  const portfolioBtn = document.querySelector("#portfolioBtn");

  const crypto = document.querySelector("#crypto");
  const portfolio = document.querySelector("#portfolio");

  cryptoBtn.classList.remove("active");
  portfolioBtn.classList.add("active");

  crypto.classList.add("hide");
  portfolio.classList.add("show");
}

var assets = [
  {
    id: 1,
    imgSrc: "images/btc-logo.png",
    alt: "BTC",
    name: "Bitcoin",
    price: 19803.24,
    percentage: 0.2,
    USDbalance: 4000000.5,
    cryptoBalance: 0.000074567,
  },
  {
    id: 2,
    imgSrc: "images/ethereum.png",
    alt: "ETH",
    name: "Ethereum",
    price: 19803.24,
    percentage: 0.2,
    USDbalance: 4000000.5,
    cryptoBalance: 0.000074567,
  },
  {
    id: 3,
    imgSrc: "images/usd-coin.png",
    alt: "USDC",
    name: "USD Coin",
    price: 19803.24,
    percentage: 0.2,
    USDbalance: 4000000.5,
    cryptoBalance: 0.000074567,
  },
  {
    id: 4,
    imgSrc: "images/tether.png",
    alt: "USDT",
    name: "Tether",
    price: 19803.24,
    percentage: 0.2,
    USDbalance: 4000000.5,
    cryptoBalance: 0.000074567,
  },
];

function populateTable() {
  var cryptoTable = document.getElementById("cryptoTable");
  var portfolioTable = document.getElementById("portfolioTable");

  for (var i = 0; i < assets.length; i++) {
    var asset = assets[i];
    var cryptoBody = cryptoTable.insertRow(i);
    var portfolioBody = portfolioTable.insertRow(i);

    // var idCell = row.insertCell(0);
    // idCell.innerHTML = asset.id;

    // var nameCell = row.insertCell(1);
    // nameCell.innerHTML = asset.name;

    // var ageCell = row.insertCell(2);
    // ageCell.innerHTML = asset.age;

    // var balanceCell = row.insertCell(3);
    // balanceCell.innerHTML = asset.accountBalance;

    var cryptoRow = `
      <tr class="bg-white">
        <th scope="row" class="flex items-center p-4 font-normal">
          <div class="mr-3">
            <img src=${asset.imgSrc} alt=${asset.alt} />
          </div>
          <div>
            <div class="flex">
              <p class="mr-[6px] font-medium">${asset.name}</p>
              <p class="text-gray-500">${asset.alt}</p>
            </div>
          </div>
        </th>
        <td class="text-right p-4">
          <p class="mb-1">$${asset.price}</p>
          <div class="flex justify-end">
            <p class="flex w-fit items-center bg-[#FEF3F2] text-[#DF1111] text-xs font-medium px-2 rounded-2xl">
              <svg class="w-3 h-3 text-[#DF1111] mr-1 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 1v12m0 0 4-4m-4 4L1 9"/>
              </svg>
              ${asset.percentage}%
            </p>
          </div>
        </td>
      </tr>
    `;

    cryptoBody.innerHTML = cryptoRow;

    var portfolioRow = `
      <tr class="bg-white">
        <th scope="row" class="flex items-center p-4 font-normal">
          <div class="mr-3">
            <img src=${asset.imgSrc} alt=${asset.alt} />
          </div>
          <div>
            <div class="flex mb-2 md:mb-0">
              <p class="mr-[6px] font-medium">${asset.name}</p>
              <p class="text-gray-500">${asset.alt}</p>
            </div>
            <div class="flex md:hidden">
              <p class="mb-1">$${asset.price}</p>
              <p
                class="flex items-center bg-[#FEF3F2] text-[#DF1111] text-xs font-medium w-fit px-2 rounded-2xl"
              >
                <svg
                  class="w-3 h-3 text-[#DF1111] mr-1 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.8"
                    d="M5 1v12m0 0 4-4m-4 4L1 9"
                  />
                </svg>
                ${asset.percentage}%
              </p>
            </div>
          </div>
        </th>
        <td class="hidden md:table-cell p-4">
          <p class="mb-1">$${asset.price}</p>
          <p
            class="flex items-center bg-[#FEF3F2] text-[#DF1111] text-xs font-medium w-fit px-2 rounded-2xl"
          >
            <svg
              class="w-3 h-3 text-[#DF1111] mr-1 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
                d="M5 1v12m0 0 4-4m-4 4L1 9"
              />
            </svg>
            ${asset.percentage}%
          </p>
        </td>
        <td class="p-4">
          <p class="text-sm font-medium mb-2">USD ${asset.USDbalance}</p>
          <p class="text-xs text-gray-500">${asset.alt} ${asset.cryptoBalance}</p>
        </td>
        <td class="hidden md:table-cell p-4">
          <svg
            class="w-[24px] h-[24px] text-gray-500 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 4"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="1.8"
              d="M2.49 2h.01m6 0h.01m5.99 0h.01"
            />
          </svg>
        </td>
      </tr>
    `;

    portfolioBody.innerHTML = portfolioRow;

    // Use a closure to capture the correct clickedId value
    (function (clickedId) {
      // Add a click event listener to navigate to a dynamic route when a row is clicked
      cryptoBody.addEventListener("click", function () {
        // Navigate to the dynamic route based on the ID
        window.location.href = "item.html?id=" + clickedId;
      });

      portfolioBody.addEventListener("click", function () {
        // Navigate to the dynamic route based on the ID
        window.location.href = "item.html?id=" + clickedId;
      });
    })(asset.id);
  }
}


// JavaScript code to load asset details based on the ID from the URL
document.addEventListener("DOMContentLoaded", function () {
  var urlParams = new URLSearchParams(window.location.search);
  var assetId = urlParams.get("id");

  console.log('assetId')
  console.log(assetId)

  var asset = getAssetDetailsById(assetId);

  if (asset) {
     var assetImg = `<img src=${asset.imgSrc} alt=${asset.alt} />`
    document.getElementById("assetImg").innerHTML = assetImg
    document.getElementById("assetName").textContent = asset.name;
    document.getElementById("assetBalance").textContent = "USD " + asset.USDbalance.toFixed(2);
    document.getElementById("assetPercent").textContent = asset.percentage + '%';
  }
});

// Function to fetch asset details by ID
function getAssetDetailsById(assetId) {
  for (var i = 0; i < assets.length; i++) {
    if (assets[i].id === parseInt(assetId)) {
        return assets[i]; // Return the matching item
    }
  }

  return null;
}

document.addEventListener("DOMContentLoaded", function () {
  populateTable();
});
