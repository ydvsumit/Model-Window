const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
/* 
for (let i = 0; i < showModal.length; i++) {
    // console.log(showModal[i].textContent);
    showModal[i].addEventListener('click', function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
}

closeModal.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

overlay.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

document.addEventListener('keydown', function (e) {
    // console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
})
 */

//DRY Principle:

const openModalFunc = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModalFunc = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < showModal.length; i++) {
  // console.log(showModal[i].textContent);
  showModal[i].addEventListener("click", openModalFunc);
}

closeModal.addEventListener("click", closeModalFunc);

overlay.addEventListener("click", closeModalFunc);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModalFunc();
  }
});
