<script>
    import {stores} from '@sapper/app';
    import MediasPreview from './MediasPreview.svelte';
    import ListPagination from './ListPagination.svelte';
    import * as api from 'api.js';

    export let tab, username = false;
    export let favorites = false;
    export let tag;
    export let p;

    const {session, page} = stores();

    let query;
    let medias;
    let mediasCount;

    $: {
        const endpoint = tab === 'medias' ? 'medias/feed' : 'medias';

        const page_size = tab === 'medias' ? 5 : 10;

        let params = `limit=${page_size}&offset=${(p - 1) * page_size}`;
        if (tab === 'tag') params += `&tag=${tag}`;
        if (tab === 'profile') params += `&${favorites ? 'favorited' : 'author'}=${encodeURIComponent(username)}`;

        query = `${endpoint}?${params}`;
    }

    $: query && getData();

    async function getData() {
        medias = null;

        // TODO do we need some error handling here?
        ({medias, mediasCount} = await api.get(query, $session.user && $session.user.token));
    }
</script>

{#if medias}
    {#if medias.length === 0}
        <div class="media-preview">
            No media are here... yet.
        </div>
    {:else}
        <div class="row">
            {#each medias as media (media.slug)}
                <MediasPreview {media} user={$session.user}/>
            {/each}
        </div>
        <ListPagination {mediasCount} page={parseInt($page.params.user, 10)}/>
    {/if}
{:else}
    <div class="media-preview">Loading...</div>
{/if}