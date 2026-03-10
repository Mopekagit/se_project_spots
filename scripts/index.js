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

const imageInput = newPostModal.querySelector('#card-image-input');
const captionInput = newPostModal.querySelector('#card-description-input');

editProfileNameInput.value = profileNameEl.textContent;
editProfileNameDesciptionInput.value = profileDescriptionEl.textContent;

editProfileCloseBtn.addEventListener("click", function () {
    editProfileNameInput.value = profileNameEl.textContent;
    editProfileNameDesciptionInput.value = profileDescriptionEl.textContent;
    closeModal(editProfileModal);

})

newPostBtn.addEventListener("click", function() {
    openModal(newPostModal);

})

newPostCloseBtn.addEventListener("click", function() {
    closeModal(newPostModal);

})

function handleEditProfileSubmit(evt) {
    evt.preventDefault();
    profileNameEl.textContent = editProfileNameInput.value;
    profileDescriptionEl.textContent = editProfileNameDesciptionInput.value;
    closeModal(editProfileModal);
}


editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleAddCardSubmit(evt) {
    evt.preventDefault();
    console.log(imageInput.value, captionInput.value);
     closeModal(newPostModal);
    
}

console.log(newPostImageLink);
console.log(newPostCaption);

newPostForm.addEventListener('submit', handleAddCardSubmit);


