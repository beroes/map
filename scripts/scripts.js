    
document.addEventListener("DOMContentLoaded", function() {

    document.querySelectorAll('.list__item').forEach(function(elem) {
        elem.addEventListener('click', function() {
            document.querySelector('.list').classList.add('list--off-canvas');
            document.querySelector('.navbar').classList.add('navbar--on');
        });
    });

    document.querySelector('.back-button').addEventListener('click', function() {
        document.querySelector('.list').classList.remove('list--off-canvas');  
        document.querySelector('.navbar').classList.remove('navbar--on');
    });

    document.querySelector('.info-trigger').addEventListener('click', function() {
        document.querySelector('.overlay').classList.add('overlay--active');
    });
    
    document.querySelector('.overlay').addEventListener('click', function() {
        this.classList.remove('overlay--active');
    })
    
    document.querySelector('.info-window .content').addEventListener('click', function(event) {
        event.stopPropagation();
    })
});
