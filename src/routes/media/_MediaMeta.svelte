<script>
    import {goto} from '@sapper/app';
    import * as api from 'api.js';

    export let media;
    export let user;

    $: canModify = user && media.author.username === user.username;

    async function remove() {
        await api.del(`medias/${media.slug}`, user && user.token);
        goto('/');
    }
</script>

<div class="media-meta">
    <a href='/users/@{media.author.username}'>
        <img src={media.author.image} alt={media.author.username}/>
    </a>

    <div class="info">
        <a href='/users/@{media.author.username}' class="author"> {media.author.username}</a>
        <span class="date">
			{new Date(media.createdAt).toDateString()}
		</span>
    </div>

    {#if canModify}
        <span>
			<a href='/editor/media/{media.slug}' class="btn btn-outline-secondary btn-sm">
				<i class="ion-edit"/> Edit Media
			</a>

			<button class="btn btn-outline-danger btn-sm" on:click='{remove}'>
				<i class="ion-trash-a"/> Delete Media
			</button>
		</span>
    {/if}
</div>