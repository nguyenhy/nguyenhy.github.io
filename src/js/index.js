import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

window.addEventListener('load', function () {

    const $hpContainer = document.querySelector('#hp-cont');
    const $header = document.querySelector('header.hp-hdr')
    const $mainImage = document.querySelector('.hp-comp_fly-image img')
    const headerHeight = $header.clientHeight;

    _checkScrollPosition();


    /* event */
    document.addEventListener('scroll', function () {
        _checkScrollPosition()
    })

    const $allAnchor = document.querySelectorAll('a.hp-hdr-nav_a') || [];
    $allAnchor.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const href = this.getAttribute('href')
            const $section = document.querySelector(href);
            if (!$section) {
                return
            }
            const offsetTop = $section.offsetTop;
            document.documentElement.scrollTop = offsetTop - headerHeight - 10;
        })
    })


    const $allImage = document.querySelectorAll('img') || [];
    $allImage.forEach(function (item) {
        if (item) {
            item.addEventListener('error', function () {
                item.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                if ($hpContainer && $mainImage && $mainImage.isSameNode(item)) {
                    $hpContainer.classList.add('main-img-error')
                }
            })
        }
    })

    const $form = document.getElementById('hp_form-contact');
    if ($form) {
        $form.addEventListener('submit', function (event) {
            event.preventDefault();
        })
    }



    /* private */

    function _checkScrollPosition() {
        if (!$hpContainer) {
            return;
        }
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop) {
            $hpContainer.classList.remove('at-top')
        } else {
            $hpContainer.classList.add('at-top')
        }

    }
})