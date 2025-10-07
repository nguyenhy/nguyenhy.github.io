window.onload = () => {
    const $container = document.querySelector(".container");
    const $animate = document.querySelector("#animate");
    const $reset = document.querySelector("#reset");
    const $with_transition = document.querySelector("#with_transition");

    $animate.onclick = () => {
        if ($container.classList.contains("animate")) {
            $container.classList.remove("animate");
        } else {
            $container.classList.add("animate");
        }
    };

    $with_transition.oninput = () => {
        if ($with_transition.checked) {
            $container.classList.add("with_transition");
        } else {
            $container.classList.remove("with_transition");
        }
    };

    $reset.onclick = () => {
        $container.classList.remove("animate");
    };
};
