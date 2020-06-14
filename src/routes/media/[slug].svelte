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
    import marked from 'marked';

    import ArticleMeta from './_MediaMeta.svelte';
    import CommentContainer from './_CommentContainer.svelte';

    export let media;
    export let slug;

    const {session} = stores();

    let commentErrors, comments = []; // we'll lazy-load these in onMount
    $: markup = marked(media.body);

    onMount(() => {
        api.get(`medias/${slug}/comments`).then((res) => {
            comments = res.comments;
        });
    });
</script>

<svelte:head>
    <title>{media.title}</title>
</svelte:head>

<div class="media-page">

    <div class="banner">
        <div class="container">
            <h1>{media.title}</h1>
            <ArticleMeta {media} user={$session.user}/>
        </div>
    </div>

    <div class="container page">
        <div class="row media-content">
            <div class="col-xs-12">
                <div>{@html markup}</div>

                <ul class="tag-list">
                    {#each media.tagList as tag}
                        <li class="tag-default tag-pill tag-outline">
                            {tag}
                        </li>
                    {/each}
                </ul>
            </div>
        </div>

        <hr/>

        <div class="media-actions"></div>

        <div class="row">
            <CommentContainer {slug} {comments} user={$session.user} errors={commentErrors}/>
        </div>
    </div>
</div>