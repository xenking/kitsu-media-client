<script context="module">
    import * as api from '../../../../node_modules/api';

    export async function preload({params}, {user}) {
        const username = params.user.slice(1);

        const {profile} = await api.get(`users/${username}`, user && user.token);
        return {profile};
    }
</script>

<script>
    import {stores} from '@sapper/app';
    import ArticleList from '../../../_components/ArticleList/index.svelte';
    import User from '../_User.svelte';

    export let profile;
    export let view;

    const {session} = stores();

    let user = $session.user;
    let isFavorite = true;
    isUser = user && (profile.username === user.username);

</script>

<svelte:head>
    <title>{profile.username} • Kitsu media</title>
</svelte:head>
<div class="profile-page">
    <User {profile} user={$session.user}/>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-10 offset-md-1">
                <div class="articles-toggle">
                    <ul class="nav nav-pills outline-active">
                        <li class="nav-item">
                            <a href='/users/@{profile.username}/articles' class="nav-link">
                                {isUser ? 'My': profile.username } articles</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active"
                               href='/users/@{profile.username}/articles/favorites'>Favorited articles</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link "
                               href='/users/@{profile.username}/medias'> {isUser ? 'My': profile.username } medias</a>
                        </li>
                    </ul>
                </div>
                <ArticleList tab='profile' username='{profile.username}' favorites={isFavorite}/>
            </div>
        </div>
    </div>
</div>