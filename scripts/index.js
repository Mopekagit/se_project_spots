const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileNameDesciptionInput = editProfileModal.querySelector("#profile-description-input");


const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const newPostImageLink = document.querySelector(".card__image");
const newPostCaption = document.querySelector(".card__title");

editProfileBtn.addEventListener("click", function() {
    editProfileModal.classList.add("modal_is-opened");
}) 

editProfileCloseBtn.addEventListener("click", function () {
    editProfileNameInput.value = profileNameEl.textContent;
    editProfileNameDesciptionInput.value = profileDescriptionEl.textContent;
    editProfileModal.classList.remove("modal_is-opened");

})

newPostBtn.addEventListener("click", function() {
    newPostModal.classList.add("modal_is-opened");

})

newPostCloseBtn.addEventListener("click", function() {
    newPostModal.classList.remove("modal_is-opened");

})

function handleEditProfileSubmit(evt) {
    evt.preventDefault();
    profileNameEl.textContent = editProfileNameInput.value;
    profileDescriptionEl.textContent = editProfileNameDesciptionInput.value;
    editProfileModal.classList.remove("modal_is-opened");
}


editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleAddCardSubmit(evt) {
    evt.preventDefault();
    newPostModal.classList.remove("modal_is-opened");
    
}

console.log(newPostImageLink);
console.log(newPostCaption);

newPostForm.addEventListener('submit', handleAddCardSubmit);



