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

<div class="row">
        <div class="anime-play">
            <a rel="prefetch">
                <div class="anime-img">
                    <img src={media.poster} class="anime-img" alt={media.title}>
                </div>
            </a>
<!--            <div class="dropdown show">-->
<!--                <a href="/" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" class="dropdown-header">-->
<!--                    Add to list-->
<!--                </a>-->
<!--                <div class="nav-dropdown dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenuLink">-->
<!--                    <a class="dropdown-item" rel='prefetch' role="button" aria-pressed="true">Dropped</a>-->
<!--                    <a class="dropdown-item" rel='prefetch' role="button" aria-pressed="true">Planned</a>-->
<!--                    <a class="dropdown-item" rel='prefetch' role="button" aria-pressed="true">On hold</a>-->
<!--                    <a class="dropdown-item" rel='prefetch' role="button" aria-pressed="true">Watched</a>-->
<!--                    <a class="dropdown-item" rel='prefetch' role="button" aria-pressed="true">Watching</a>-->
<!--                </div>-->
<!--            </div>-->
        </div>
        <div class="anime-info">
            <div class="anime-name">
                {media.title}
            </div>
            <div class="anime-type">
                {media.type}
            </div>
            <div class="anime-desc">
                {media.description}
            </div>
        </div>
</div>
<div class="anime-edit">
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

