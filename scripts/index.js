const initialCards = [
    {
        name: "Daily Grind",
        link: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        name: "Spring Things",
        link: "https://images.unsplash.com/photo-1600418692921-18c91a64baa8?q=80&w=840&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        name: "Roughing It",
        link: "https://images.unsplash.com/photo-1539183204366-63a0589187ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        name: "Adventure Time",
        link: "https://images.unsplash.com/photo-1476900543704-4312b78632f8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        name: "Health Kick",
        link: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=962&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        name: "Feeling Creative",
        link: "https://plus.unsplash.com/premium_photo-1676668708126-39b12a0e9d96?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    
];



const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");


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

const previewModal = document.querySelector("#preview-modal");
const previewModalCloseBtn = previewModal.querySelector(".modal__close");
const previewImageEl = previewModal.querySelector(".modal__image");
const previewCaptionEl = previewModal.querySelector(".modal__caption");


const cardTemplate = document
.querySelector("#card-template")
.content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");



function getCardElement(data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardTitleEl = cardElement.querySelector(".card__title");
    const cardImageEl = cardElement.querySelector(".card__image");

    cardImageEl.src = data.link;
    cardImageEl.alt = data.name;
    cardTitleEl.textContent = data.name;

    const cardLikeBtnEl = cardElement.querySelector(".card__like-btn");
    cardLikeBtnEl.addEventListener("click", () => {
        cardLikeBtnEl.classList.toggle("card__like-btn_active");
    });

    const cardDeleteBtnEl = cardElement.querySelector(".card__delete-btn");
    cardDeleteBtnEl.addEventListener("click", () => {
        cardElement.remove();

    });
    
    cardImageEl.addEventListener("click", () => {
     previewImageEl.src = data.link;
     previewImageEl.alt = data.name;
     previewCaptionEl.textContent = data.name;
    openModal(previewModal);

    });

    const previewModalCloseBtn = previewModal.querySelector(".modal__close_type_preview");

    previewModalCloseBtn.addEventListener("click", function () {
        closeModal(previewModal);
    })
  

    

    return cardElement;
}

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
    
    const inputValues = {
        link: newPostImageLinkInput.value,
        name: newPostCaptionInput.value,
    };

    const cardElement = getCardElement(inputValues);
    cardsList.prepend(cardElement);

    closeModal(newPostModal);
    newPostForm.reset();
}

newPostForm.addEventListener('submit', handleAddCardSubmit);

initialCards.forEach(function (item) {
    const cardElement = getCardElement(item);
    cardsList.append(cardElement);
});


