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
                const proxyPath = 'http://localhost:5500';
                
                // proxy website
                appFrame.src = proxyPath + '/index.html#' + btoa(appData.iframe_url);
            }
        }, 1000);
    });
});