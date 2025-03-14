const memeContainer = document.getElementById('meme-container');
const topTextInput = document.getElementById('top-text');
const bottomTextInput = document.getElementById('bottom-text');
const generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', () => {
    const topText = topTextInput.value;
    const bottomText = bottomTextInput.value;

    if (topText || bottomText) {
        memeContainer.innerHTML = `
            <div class="meme">
                <span class="top-text">${topText}</span>
                <img src="https://via.placeholder.com/500x300" alt="Meme Image" />
                <span class="bottom-text">${bottomText}</span>
            </div>
        `;
    } else {
        memeContainer.innerHTML = '<p>Please enter text for the meme.</p>';
    }
});