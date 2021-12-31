const pages = document.querySelectorAll('.page');
const prevButton = document.getElementById('previous');
const nextButton = document.getElementById('next');

pages.forEach(page => page.style.display = "none");

let currentPage = 0;

// Show Default Page and Button
showElement(pages[currentPage]);
if (currentPage == 0) {
  hideElement(prevButton);
}

// Previous and Next Buttons
function turnPreviousPage() {
  hideElement(pages[currentPage]);
  showElement(pages[currentPage - 1]);
  if (currentPage > 0) currentPage = currentPage - 1;
  if (currentPage == 0) {
    hideElement(prevButton);
    return;
  }
  if (currentPage < pages.length) showElement(nextButton);
}

function turnNextPage() {
  hideElement(pages[currentPage]);
  showElement(pages[currentPage + 1]);
  if (currentPage < pages.length) currentPage = currentPage + 1;
  if (currentPage > 0) showElement(prevButton);
  if (currentPage == pages.length - 1) {
    hideElement(nextButton);
    return;
  }
}

function showElement(element) {
 element.style.display = "block";
}

function hideElement(element) {
 element.style.display = "none";
}

prevButton.addEventListener('click', () => turnPreviousPage());
nextButton.addEventListener('click', () => turnNextPage());