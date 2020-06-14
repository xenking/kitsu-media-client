<script context="module">
    export function preload({params}, {user}) {
        if (user) {
            this.redirect(302, `/editor/article`);
        } else {
            this.redirect(302, `/`);
        }
    }
</script>
