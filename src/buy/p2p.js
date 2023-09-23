fetch('/src/header.html')
.then(response => response.text())
.then(headerHtml => {
  document.getElementById('header').innerHTML = headerHtml;
})
.catch(error => console.error('Error loading header:', error));

// function toggleSelect () {
//   const selectContent = document.getElementById("selectContent");
//   selectContent.classList.toggle("show");
//   console.log('select btn clicked')
// }

// // Handle option selection
// selectContent.addEventListener("click", function (e) {
//   if (e.target.classList.contains("option")) {
//     const optionValue = e.target.getAttribute("data-value");
//     select.value = optionValue;
//     selectContent.classList.remove("show");
//   }
// });

// // Close the dropdown if the user clicks outside of it
// document.addEventListener("click", function (e) {
//   if (!e.target.matches(".custom-select")) {
//     selectContent.classList.remove("show");
//   }
// });

// selectContent.addEventListener("click", function () {
//   select.click(); // Trigger the select element when clicking the custom dropdown
// });

// // Handle option selection
// select.addEventListener("change", function () {
//   const selectedOption = select.options[select.selectedIndex];
//   const optionValue = selectedOption.value;
//   const optionText = selectedOption.text;
//   console.log(`Selected Option: ${optionValue} - ${optionText}`);
// });

var sellers = [
  {
    id: 1,
    imgSrc: "/src/images/avatar.png",
    name: "John Doe",
    trades: 12,
    ratings: 4.5,
    rate: 756,
    minLimit: `Min - NGN ${4000}`,
    maxLimit: `Max - NGN ${250000}`,
  },
  {
    id: 2,
    imgSrc: "/src/images/avatar.png",
    name: "John Doe",
    trades: 12,
    ratings: 4.5,
    rate: 756,
    minLimit: `Min - NGN ${4000}`,
    maxLimit: `Max - NGN ${250000}`,
  },
  {
    id: 3,
    imgSrc: "/src/images/avatar.png",
    name: "John Doe",
    trades: 12,
    ratings: 4.5,
    rate: 756,
    minLimit: `Min - NGN ${4000}`,
    maxLimit: `Max - NGN ${250000}`,
  },
  {
    id: 4,
    imgSrc: "/src/images/avatar.png",
    name: "John Doe",
    trades: 12,
    ratings: 4.5,
    rate: 756,
    minLimit: `Min - NGN ${4000}`,
    maxLimit: `Max - NGN ${250000}`,
  },
];

function populateTable () {
  var sellersTable = document.getElementById('sellersTable');

  for (var index = 0; index < sellers.length; index++) {
    const seller = sellers[index];
    var sellersBody = sellersTable.insertRow(index);

    console.log('array tabled')
    var sellersRow = `
      <tr class="bg-white">
        <th scope="row" class="flex items-center p-4 font-normal">
          <div class="mr-3">
            <img src=${seller.imgSrc} alt="Seller" />
          </div>
          <div>
            <div class="mb-2 md:mb-0">
              <p class="mr-[6px] font-bold">${seller.name}</p>
              <p class="flex items-center font-medium text-gray-500">
                Trade(s) 12
                <span class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    class="mx-1"
                  >
                    <path
                      d="M2.8835 13.1111L3.96683 8.42778L0.333496 5.27778L5.1335 4.86111L7.00016 0.444443L8.86683 4.86111L13.6668 5.27778L10.0335 8.42778L11.1168 13.1111L7.00016 10.6278L2.8835 13.1111Z"
                      fill="#FDB022"
                    />
                  </svg>
                  ${seller.ratings}
                </span>
              </p>
            </div>
          </div>
        </th>
        <td class="hidden md:table-cell p-4">
          ${seller.rate} = 1 USD
        </td>
        <td class="p-4">
          <p class="text-sm text-gray-500 mb-1">
            ${seller.minLimit}
          </p>
          <p class="text-sm text-gray-500">
            ${seller.maxLimit}
          </p>
        </td>
        <td class="hidden md:table-cell p-4">
          <button class="text-sm font-medium border bg-primary text-white rounded-3xl py-2 px-4 cursor-pointer hover:bg-[#101828e8]">
            Buy
          </button>
        </td>
      </tr>
    `;
    
    sellersBody.innerHTML = sellersRow;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  populateTable();
});