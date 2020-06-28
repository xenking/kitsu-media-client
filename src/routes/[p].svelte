<script context="module">
    export function preload({params}) {
        return {
            p: +params.p
        };
    }
</script>

<script>
    import Articles from './_components/Articles.svelte';

    export let p;
</script>

<Articles {p}/>