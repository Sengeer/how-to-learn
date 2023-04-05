let commentField = document.querySelector('.feedback__comment-field');

let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__name-field');
let commentInput = formElement.querySelector('.form__comment-field');

function handleFormSubmit (evt) {
  evt.preventDefault();

  let nameText = nameInput.value;
  let commentText = commentInput.value;

  commentField.innerHTML += `
    <li>
      <h4 class="feedback__comment-name">
        ${nameText}
    </h4>
      <p class="feedback__comment">
        ${commentText}
      </p>
    </li>
  `;
}

formElement.addEventListener('submit', handleFormSubmit);
