function logout() {
    fetch('/logout').then((response) => response.text()).then((res) => {
        if (res == 'success') {
            location.reload();
        }
    });
}