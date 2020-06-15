<script context="module">
    import * as api from 'api';

    export async function preload({params}) {
        const {slug} = params;
        const {article} = await api.get(`articles/${slug}`, null);
        return {article, slug};
    }
</script>

<script>
    import Editor from '../../_components/ArticleList/ArticleEditor.svelte';

    export let slug;
    export let article;
</script>

<Editor {article} {slug}/>