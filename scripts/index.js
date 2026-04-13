const initialCards = [
    {
        name: "Daily Grind",
        link: "https://unsplash.com/photos/person-doing-kick-flip-trick-eK_aInAXydw"
    },

    {
        name: "Spring Things",
        link: "https://unsplash.com/photos/pink-flower-field-under-blue-sky-during-daytime-33B6ZhM0YaI"
    },

    {
        name: "Roughing It",
        link: "https://unsplash.com/photos/person-holding-mug-qkMQ5N2d9aY"
    },

    {
        name: "Adventure Time",
        link: "https://unsplash.com/photos/person-riding-airplane-photography-jv15x2Gs5F8"
    },

    {
        name: "Health Kick",
        link: "http://unsplash.com/photos/pizza-on-chopping-board-MqT0asuoIcU"
    },

    {
        name: "Feeling Creative",
        link: "https://unsplash.com/photos/a-wooden-table-topped-with-a-palette-of-paint-vpflEzQ8-HM"
    }
];



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
    console.log(newPostImageLinkInput.value);
    console.log(newPostCaptionInput.value);
    closeModal(newPostModal);
    newPostForm.reset();
}

newPostForm.addEventListener('submit', handleAddCardSubmit);

initialCards.forEach(function (item) {
    console.log(item.name);
    console.log(item.link);

});
