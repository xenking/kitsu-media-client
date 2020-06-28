<script context="module">
    import * as api from 'api.js';

    export async function preload({params}) {
        const {slug} = params;
        const {media} = await api.get(`medias/${params.slug}`, null);

        return {media, slug};
    }
</script>

<script>
    import {onMount} from 'svelte';
    import {stores} from '@sapper/app';

    import MediaMeta from './_MediaMeta.svelte';
    import CommentContainer from './_CommentContainer.svelte';

    export let media;
    export let slug;

    const {session} = stores();

    let commentErrors, comments = []; // we'll lazy-load these in onMount
    onMount(() => {
        api.get(`medias/${slug}/comments`).then((res) => {
            comments = res.comments;
        });
    });
</script>

<svelte:head>
    <title>{media.title} Kitsu media</title>
</svelte:head>

<div class="anime-page">
    <div class="anime-top">
        <MediaMeta {media} user={$session.user}/>
        <ul class="tag-list">
            {#each media.tagList as tag}
                <li class="tag-default tag-pill tag-outline">
                    {tag}
                </li>
            {/each}
        </ul>
    </div>
    <CommentContainer {slug} {comments} user={$session.user} errors={commentErrors}/>
</div>