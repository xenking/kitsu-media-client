<script>
    import {goto} from '@sapper/app';
    import * as api from 'api.js';

    export let article;
    export let user;

    $: canModify = user && article.author.username === user.username;

    async function remove() {
        await api.del(`articles/${article.slug}`, user && user.token);
        goto('/');
    }
</script>

<div class="article-meta">
    <a href='/users/@{article.author.username}/articles'>
        <img src={article.author.image} alt={article.author.username}/>
    </a>

    <div class="info">
        <a href='/users/@{article.author.username}/articles' class="author"> {article.author.username}</a>
        <span class="date">
			{new Date(article.createdAt).toDateString()}
		</span>
    </div>

    {#if canModify}
        <span>
			<a href='/editor/article/{article.slug}' class="btn btn-outline-secondary btn-sm">
				<i class="ion-edit"/> Edit Article
			</a>

			<button class="btn btn-outline-danger btn-sm" on:click='{remove}'>
				<i class="ion-trash-a"/> Delete Article
			</button>
		</span>
    {/if}
</div>