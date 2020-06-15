<script context="module">
    import * as api from '../../../node_modules/api';

    export async function preload({params}) {
        const {slug} = params;
        const {media} = await api.get(`medias/${slug}`, null);
        return {media, slug};
    }
</script>

<script>
    import Editor from '../../_components/MediaList/MediaEditor.svelte';

    export let slug;
    export let media;
</script>

<Editor {media} {slug}/>