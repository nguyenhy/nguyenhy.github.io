window.addEventListener('load', function () {

    $hpContainer = document.querySelector('#hp-cont');

    document.addEventListener('scroll', function () {
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop) {
            $hpContainer.classList.remove('at-top')
        } else {
            $hpContainer.classList.add('at-top')
        }
    })
})