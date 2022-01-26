function openInfoModal(infoText) {
    const MODAL =
        `
    <div id='info-modal' class='modal'>
        <div class='modal-content'>
            <span id='modal-close'>
                <svg width='3em' height='3em' viewBox='0 0 16 16' class='bi bi-x' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                    <path fill-rule='evenodd' d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'>
                </svg>
            </span>
            <p>${infoText}</p>
        </div>
    </div>
    `
    document.body.innerHTML += MODAL;

    const CLOSE_REF = document.getElementById('modal-close');
    const MODAL_REF = document.getElementById('info-modal');

    CLOSE_REF.onclick = () => {
        MODAL_REF.parentNode.removeChild(MODAL_REF);
    }
    window.onclick = (event) => {
        if (event.target == MODAL_REF) {
            MODAL_REF.parentNode.removeChild(MODAL_REF);
        }
    }
}

function openInputModal(inputText, inputDefault, done) {
    const MODAL =
        `
    <div id='info-modal' class='modal'>
        <div class='modal-content' style='height: 300px'>
            <span id='modal-close'>
                <svg width='3em' height='3em' viewBox='0 0 16 16' class='bi bi-x' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                    <path fill-rule='evenodd' d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'>
                </svg>
            </span>
            <p>${inputText}</p>
            <br>
            <textarea id='modal-input-box'>${inputDefault}</textarea>
            <button id='modal-submit-button'>Submit</button>
        </div>
    </div>
    `
    document.body.innerHTML += MODAL;

    const CLOSE_REF = document.getElementById('modal-close');
    const MODAL_REF = document.getElementById('info-modal');
    const SUBMIT_REF = document.getElementById('modal-submit-button');
    const INPIT_REF = document.getElementById('modal-input-box');

    CLOSE_REF.onclick = () => {
        MODAL_REF.parentNode.removeChild(MODAL_REF);
    }
    SUBMIT_REF.onclick = () => {
        done(MODAL_REF, INPIT_REF);
    };
    window.onclick = (event) => {
        if (event.target == MODAL_REF) {
            MODAL_REF.parentNode.removeChild(MODAL_REF);
        }
    }
}