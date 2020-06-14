<script>
    import {stores} from '@sapper/app';
    import MediaPreview from './MediaPreview.svelte';
    import ListPagination from './ListPagination.svelte';
    import * as api from 'api.js';

    export let tab, username = false;
    export let favorites = false;
    export let tag;
    export let p;

    const {session, page} = stores();

    let query;
    let media;
    let mediaCount;

    {
        const endpoint = tab === 'media' ? 'media/feed' : 'media';
        const page_size = tab === 'feed' ? 5 : 10;

        let params = `limit=${page_size}&offset=${(p - 1) * page_size}`;
        if (tab === 'tag') params += `&tag=${tag}`;
        if (tab === 'profile') params += `&${favorites ? 'favorited' : 'author'}=${encodeURIComponent(username)}`;

        query = `${endpoint}?${params}`;
    }

    query && getData();

    async function getData() {
        media = null;

        // TODO do we need some error handling here?
        ({media, mediaCount} = await api.get(query, $session.user && $session.user.token));
    }
</script>

{#if media}
    {#if media.length === 0}
        <div class="article-preview">
            No media are here... yet.
        </div>
    {:else}
        <MediaPreview/>
    {/if}
{:else}
    <div class="media-preview">Loading...</div>
{/if}