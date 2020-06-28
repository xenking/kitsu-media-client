<script context="module">
    export function preload({params}, {user}) {
        if (user) {
            this.redirect(302, `/users/@${user.username}/articles`);
        } else {
            this.redirect(302, `/`);
        }
    }
</script>
