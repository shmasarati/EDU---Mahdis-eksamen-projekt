//https://www.youtube.com/watch?v=ev00Lp985mg lavet med youtube

document.addEventListener("DOMContentLoaded", function () {
    const allStars = document.querySelectorAll(".stars");
  
    allStars.forEach((starContainer) => {
      const stars = starContainer.querySelectorAll("span");
      const voteCounter = starContainer.parentElement.querySelector(".vote-counter");
      let votes = parseInt(voteCounter.getAttribute("data-vote-count"));
  
      stars.forEach((star, index) => {
        star.addEventListener("click", function () {
          stars.forEach((s, i) => {
            if (i <= index) {
              s.classList.add("active");
            } else {
              s.classList.remove("active");
            }
          });
  
          votes++;
          voteCounter.setAttribute("data-vote-count", votes);
          voteCounter.textContent = `Votes: ${votes}`;
        });
      });
    });
  });
  