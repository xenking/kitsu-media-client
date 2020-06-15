<script>
    import * as api from 'api.js';

    export let media;
    export let user;

    async function toggleFavorite() {
        // optimistic UI
        if (media.favorited) {
            media.favoritesCount -= 1;
            media.favorited = false;
        } else {
            media.favoritesCount += 1;
            media.favorited = true;
        }

        ({media} = await (media.favorited
                ? api.post(`medias/${media.slug}/favorite`, null, user && user.token)
                : api.del(`medias/${media.slug}/favorite`, user && user.token)));
    }
</script>

<div class="media-preview">
    <div>
        Added by <a href='/users/@{media.author.username}/articles'>{media.author.username}</a>
    </div>
    <a href='/media/{media.slug}'>
        {media.title}
    </a>
    <div class="media-img">
        <img src={media.poster} class="media-img" alt={media.title}/>

    </div>

    <div class="media-info">
        <div class="media-studio">
            {media.studio}
        </div>
        <div class="media-date">
            {new Date(media.createdAt).toDateString()}
        </div>

    </div>
    <ul class="tag-list">
        {#each media.tagList as tag}
            <li class="tag-default tag-pill tag-outline">
                {tag}
            </li>
        {/each}
    </ul>
<!--    {#if user}-->
<!--        <div class="media-favorite">-->
<!--            <button class='btn btn-sm {media.favorited ? "btn-primary" : "btn-outline-primary"}'-->
<!--                    on:click={toggleFavorite}>-->
<!--                <i class="ion-heart"></i> {media.favoritesCount}-->
<!--            </button>-->
<!--        </div>-->
<!--    {/if}-->
</div>
