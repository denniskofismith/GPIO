const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const availablebar = document.getElementById("available");
const occupiedbar = document.getElementById("occupied");
const card = document.querySelector(".card");

// Handle tab switching
about.addEventListener("click", function (e)
{
  const id = e.target.dataset.id;
  if (id)
  {
    btns.forEach(function (btn)
    {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    articles.forEach(function (article)
    {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// Function to check the occupancy status and move the card
function checkOccupancy(status)
{
  if (status === "available")
  {
    availablebar.appendChild(card); // Move to Available tab
  } else
  {
    occupiedbar.appendChild(card); // Move to Occupied tab
  }
}

// Example: You can call the function with the status (This should come from your backend)
let classStatus = "occupied"; // Replace with dynamic status from backend
checkOccupancy(classStatus);

















































// const about = document.querySelector(".about");
// const btns = document.querySelectorAll(".tab-btn");
// const articles = document.querySelectorAll(".content");
// const occupiedbar = document.getElementById("available");
// const availablebar = document.getElementById("occupied")
// const card = document.getElementById("card")
// about.addEventListener("click", function (e)
// {
//   const id = e.target.dataset.id;
//   if (id)
//   {
//     // remove selected from other buttons
//     btns.forEach(function (btn)
//     {
//       btn.classList.remove("active");
//     });
//     e.target.classList.add("active");
//     // hide other articles
//     articles.forEach(function (article)
//     {
//       article.classList.remove("active");
//     });
//     const element = document.getElementById(id);
//     element.classList.add("active");
//   }
// });

// function checkOccupancy(occu)
// {
//   if (occu == "available")
//   {
//     return true
//   }
//   else
//   {
//     return false
//   }
// }

// if (checkOccupancy())
// {
//   availablebar.appendChild(card)
// }
// else
// {
//   occupiedbar.appendChild(card)
// }