document.getElementById("gamesnav").classList.add("selected");


const likeButton = document.querySelector('#like');
const likeButtonImg = likeButton.firstChild;

let likeCount = 0;

likeButton.addEventListener('click', function() {
    if (likeButtonImg.getAttribute('src') == '/assets/images/icons/likeoutline.png') {
        likeButtonImg.setAttribute('src', '/assets/images/icons/like.png');
        likeCount += 1;
        UpdateLikeCount();
    } else {
        likeButtonImg.setAttribute('src', '/assets/images/icons/likeoutline.png');
        likeCount -= 1;
        UpdateLikeCount();
    }
});


likeButton.addEventListener("click", function() {
    likeButton.classList.add("button-click");
})

likeButton.addEventListener("webkitAnimationEnd", function() {
    likeButton.classList.remove("button-click");
})

function UpdateLikeCount() {
    likeButton.setAttribute('data-hover', likeCount);
}

function OpenHighscore() {
    window.open(`/leaderboardnew.php?gamename`, '_self')
}