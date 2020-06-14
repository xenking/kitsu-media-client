<script>
    import {goto, stores} from '@sapper/app';

    const {page, session} = stores();
    import {post} from 'utils.js';

    async function logout() {
        await post(`auth/logout`);
        $session.user = null;
        goto('/');
    }
</script>

<nav class="navbar-fixed-top">
    <div class="container">
        <a rel='prefetch' class="navbar-brand" href=".">Kitsu media</a>
        <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
                <a rel='prefetch' class="nav-link" class:active="{$page.path === '/'}" href="/">Articles</a>
            </li>
            <li class="nav-item">
                <a rel='prefetch' class="nav-link" class:active="{$page.path === '/medias'}" href="/medias">Medias</a>
            </li>
            {#if $session.user}
                <li class="nav-item">
                    <div class="dropdown show">
                        <a href="#" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" class="nav-link ">
                            {$session.user.username}
                        </a>
                        <div class="nav-dropdown dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" rel='prefetch' role="button" aria-pressed="true"
                               href='/users/@{$session.user.username} '>Profile</a>
                            <a class="dropdown-item" rel='prefetch' role="button" aria-pressed="true" href="/admin">Admin
                                Panel</a>
                            <button class="dropdown-item" on:click={logout}>Log out</button>
                        </div>
                    </div>
                </li>
            {:else}
                <li class="nav-item">
                    <a rel='prefetch' href="/login" class="nav-link" class:active="{$page.path === '/login'}">
                        Sign in
                    </a>
                </li>
            {/if}
        </ul>
    </div>
</nav>