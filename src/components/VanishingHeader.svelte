<script>
    export let duration = "300ms";
    export let offset = 0;
    export let tolerance = 0;

    let headerClass = "admin-panel";
    let y = 0;
    let lastY = 0;

    function deriveClass(y, dy) {
        if (y < offset) {
            return "show";
        }

        if (Math.abs(dy) <= tolerance) {
            return headerClass;
        }

        if (dy < 0) {
            return "show";
        }

        return "hide";
    }

    function updateClass(y) {
        const dy = lastY - y;
        lastY = y;
        return deriveClass(y, dy);
    }

    function setTransitionDuration(node) {
        node.style.transitionDuration = duration;
    }

    headerClass = updateClass(y);
</script>

<svelte:window bind:scrollY={y}/>

<div use:setTransitionDuration class={headerClass}>
    <style>
        .show {
            display: flex;
        }

        .hide {
            display: none;
        }
    </style>

    <slot/>
</div>