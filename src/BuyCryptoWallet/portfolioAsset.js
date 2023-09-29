fetch("/src/header.html")
.then((response) => response.text())
.then((headerHtml) => {
  document.getElementById("header").innerHTML = headerHtml;
})
.catch((error) => console.error("Error loading header:", error));

var assets = [
  {
    id: 1,
    imgSrc: "/src/images/btc-logo.png",
    alt: "BTC",
    name: "Bitcoin",
    price: 19803.24,
    percentage: 0.2,
    USDbalance: 4000000.5,
    cryptoBalance: 0.000074567,
  },
  {
    id: 2,
    imgSrc: "/src/images/ethereum.png",
    alt: "ETH",
    name: "Ethereum",
    price: 19803.24,
    percentage: 0.2,
    USDbalance: 4000000.5,
    cryptoBalance: 0.000074567,
  },
  {
    id: 3,
    imgSrc: "/src/images/usd-coin.png",
    alt: "USDC",
    name: "USD Coin",
    price: 19803.24,
    percentage: 0.2,
    USDbalance: 4000000.5,
    cryptoBalance: 0.000074567,
  },
  {
    id: 4,
    imgSrc: "/src/images/tether.png",
    alt: "USDT",
    name: "Tether",
    price: 19803.24,
    percentage: 0.2,
    USDbalance: 4000000.5,
    cryptoBalance: 0.000074567,
  },
];

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

function showAll() {
  const allBtn = document.querySelector("#allBtn");
  const recievedBtn = document.querySelector("#recievedBtn");
  const sentBtn = document.querySelector("#sentBtn");

  allBtn.classList.add("active");
  recievedBtn.classList.remove("active");
  sentBtn.classList.remove("active");
  console.log('showAll')

  // crypto.classList.remove("hide");
  // portfolio.classList.remove("show");
  // portfolio.classList.remove("show");
}

function showRecieved() {
  const allBtn = document.querySelector("#allBtn");
  const recievedBtn = document.querySelector("#recievedBtn");
  const sentBtn = document.querySelector("#sentBtn");

  allBtn.classList.remove("active");
  recievedBtn.classList.add("active");
  sentBtn.classList.remove("active");
  console.log('showRecieved')

  // cryptoBtn.classList.remove("active");
  // portfolioBtn.classList.add("active");

  // crypto.classList.add("hide");
  // portfolio.classList.add("show");
}

function showSent() {
  const allBtn = document.querySelector("#allBtn");
  const recievedBtn = document.querySelector("#recievedBtn");
  const sentBtn = document.querySelector("#sentBtn");

  allBtn.classList.remove("active");
  recievedBtn.classList.remove("active");
  sentBtn.classList.add("active");
  console.log('showSent')

  // cryptoBtn.classList.remove("active");
  // portfolioBtn.classList.add("active");

  // crypto.classList.add("hide");
  // portfolio.classList.add("show");
}

var sent = 'sent';
var recieved = 'recieved';
var pending = 'pending';

var transactions = [
  {
    id: 1,
    type: sent,
    img: '../images/arrow-red.png',
    date: '11:43PM on Sept 12 2022',
    code: '0xf99068a66aE783dCe4f7a811b09fe1CF071E4414',
    cryptoAmount: '0.00085531',
    usdAmount: '500',
    status: 'success'
  },
  {
    id: 2,
    type: recieved,
    img: '../images/arrow-red.png',
    date: '11:43PM on Sept 12 2022',
    code: '0xf99068a66aE783dCe4f7a811b09fe1CF071E4414',
    cryptoAmount: '0.00085531',
    usdAmount: '500',
    status: 'success'
  },
  {
    id: 3,
    type: pending,
    img: '../images/arrow-red.png',
    date: '11:43PM on Sept 12 2022',
    code: '0xf99068a66aE783dCe4f7a811b09fe1CF071E4414',
    cryptoAmount: '0.00085531',
    usdAmount: '500',
    status: 'success'
  },
  {
    id: 4,
    type: sent,
    img: '../images/arrow-red.png',
    date: '11:43PM on Sept 12 2022',
    code: '0xf99068a66aE783dCe4f7a811b09fe1CF071E4414',
    cryptoAmount: '0.00085531',
    usdAmount: '500',
    status: 'success'
  },
];

function populateTransactionTable() {
  var transactionTable = document.querySelector("#transactionTable");

  for (var i = 0; i < transactions.length; i++) {
    var transaction = transactions[i];
    var transactionBody = transactionTable.insertRow(i);

    if (transaction.type = sent) {
      transaction.imgSrc = "../images/arrow-left.svg"
    }

    var transactionRow = `
      <tr class="bg-white">
        <th scope="row" class="flex items-center py-4 pl-4 font-normal">
          <div class="mr-3">
            <img src=${transaction.img} alt= />
          </div>
          <div>
            <div class="flex mb-2 md:mb-0">
              <p class="mr-[6px] font-medium">Sent</p>
              <p class="text-gray-500">BTC</p>
            </div>
            <div class="flex items-center">
              <p class="mr-1 text-xs">${transaction.date}</p>
            </div>
          </div>
        </th>
        <td class="hidden py-4 lg:table-cell">
          <p
            class="mb-1 text-gray-500 text-[10px] font-bold font-['Satoshi'] uppercase"
          >
            TO: <span>${transaction.code}</span>
          </p>
          <p>From: Private Key Wallet</p>
        </td>
        <td class="hidden text-right py-4 pr-4 lg:table-cell">
          <p class="text-xs font-medium mb-2 md:text-sm">
            <span id="cryptoAmount">BTC</span
            >${transaction.cryptoAmount}
          </p>
          <p class="text-[10px] text-gray-500 md:text-xs">
            USD ${transaction.usdAmount}
          </p>
        </td>
        <td class="py-4 pl-4">
          <p
            class="bg-emerald-200 text-[10px] w-fit px-1.5 rounded-2xl text-emerald-700 font-medium font-['Inter'] leading-[18px]"
          >
            ${transaction.status}
          </p>
        </td>
      </tr>
    `;

    transactionBody.innerHTML = transactionRow;

    // // Use a closure to capture the correct clickedId value
    // (function (clickedId) {
    //   // Add a click event listener to navigate to a dynamic route when a row is clicked
    //   cryptoBody.addEventListener("click", function () {
    //     // Navigate to the dynamic route based on the ID
    //     window.location.href = "depositAsset.html?id=" + clickedId;
    //   });

    //   portfolioBody.addEventListener("click", function () {
    //     // Navigate to the dynamic route based on the ID
    //     window.location.href = "portfolioAsset.html?id=" + clickedId;
    //   });
    // })(asset.id);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  populateTransactionTable();
});