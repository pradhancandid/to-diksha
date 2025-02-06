import { messages } from "./messges.js";

const day = {
  7: "Rose Day",
  8: "Propose Day",
  9: "Chocolate Day",
  10: "Teddy Day",
  11: "Promise Day",
  12: "Hug Day",
  13: "Kiss Day",
  14: "Valentine's Day",
};

const today = new Date().getDate();
const container = document.getElementById("cardContainer");

for (let i = 7; i <= 14; i++) {
  let card = document.createElement("div");
  card.classList.add("card");
  if (i > today) {
    card.classList.add("locked");
  }
  card.innerHTML = `<strong>${day[i]}</strong>`;

  let message = document.createElement("p");
  message.classList.add("message");
  message.innerText = messages[i - 7];
  message.style.display = "none";
  card.appendChild(message);

  card.addEventListener("click", function () {
    if (i <= today) {
      if (message.style.display === "" || message.style.display === "none") {
        message.style.display = "block";
        showAnimation(i); // Call animation function
      } else {
        message.style.display = "none";
      }
    }
  });

  container.appendChild(card);
}

// Function to show animated falling emojis
function showAnimation(day) {
  let emoji = "";

  switch (day) {
    case 1:
      emoji = "🌹";
      break; // Rose Day
    case 2:
      emoji = "💍";
      break; // Propose Day
    case 3:
      emoji = "🍫";
      break; // Chocolate Day
    case 4:
      emoji = "🧸";
      break; // Teddy Day
    case 5:
      emoji = "🤞";
      break; // Promise Day
    case 6:
      emoji = "🤗";
      break; // Hug Day
    case 7:
      emoji = "😘";
      break; // Kiss Day
  }

  for (let i = 0; i < 200; i++) {
    // Generate 30 emojis for better spacing
    let emojiElement = document.createElement("div");
    emojiElement.classList.add("emoji");
    emojiElement.innerHTML = emoji;

    // Random positioning
    let randomX = Math.random() * window.innerWidth; // Spread horizontally
    let randomY = Math.random() * -300; // Start from different heights above the screen
    let randomSize = Math.random() * 20 + 30; // Vary sizes for a realistic effect
    let randomDuration = Math.random() * 2 + 2; // Randomize falling speed (2s - 4s)

    emojiElement.style.left = `${randomX}px`;
    emojiElement.style.top = `${randomY}px`;
    emojiElement.style.fontSize = `${randomSize}px`;
    emojiElement.style.animationDuration = `${randomDuration}s`; // Set unique speed

    document.body.appendChild(emojiElement);

    // Remove emoji after animation
    setTimeout(() => {
      emojiElement.remove();
    }, randomDuration * 1000);
  }
}
