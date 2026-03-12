const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileNameDescriptionInput = editProfileModal.querySelector("#profile-description-input");


const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const newPostImageLink = document.querySelector(".card__image");
const newPostCaption = document.querySelector(".card__title");

const newPostImageLinkInput = newPostModal.querySelector("#card-image-input");
const newPostCaptionInput = newPostModal.querySelector("#card-caption-input");

function openModal(modal) {
    modal.classList.add("modal_is-opened");

}

function closeModal(modal) {
    modal.classList.remove("modal_is-opened");

}

editProfileBtn.addEventListener("click", function() {
   editProfileNameInput.value = profileNameEl.textContent;
   editProfileNameDescriptionInput.value = profileDescriptionEl.textContent;
   openModal(editProfileModal);
}) 

editProfileCloseBtn.addEventListener("click", function () {
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
    profileDescriptionEl.textContent = editProfileNameDescriptionInput.value;
    closeModal(editProfileModal);
}


editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleAddCardSubmit(evt) {
    evt.preventDefault();
    console.log(newPostImageLink.value);
    console.log(newPostCaption.value);
    closeModal(newPostModal);
    newPostForm.reset();
}

newPostForm.addEventListener('submit', handleAddCardSubmit);



