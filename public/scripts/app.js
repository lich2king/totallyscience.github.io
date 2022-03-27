// DONE
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const appName = urlParams.get('app');

window.addEventListener('load', () => {
    fetch(`/appsjson`).then((response) => {
        if (response.ok) return response.json();
    }).then((apps) => {
        const appData = apps[appName];
        const appFrame = document.getElementById('app_frame');

        if (appData == null) window.location.href = '../applications';

        appFrame.src = appData.iframe_url;

        setTimeout(() => {
            if (appName == 'Firefox') return;
            
            if (appFrame.getAttribute('__uv-attr-src') == null) {
                alert('Error, failed to load. Apps do not work on some domains.');
                location.href = '/applications';
            }
        }, 1000);
    });
});