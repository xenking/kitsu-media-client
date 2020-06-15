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
                <a rel='prefetch' class="nav-link" class:active="{$page.path === '/'}" href="/">
                    <i class="ion-ios-paper-outline"/>&nbsp;News</a>
            </li>
            <li class="nav-item">
                <a rel='prefetch' class="nav-link" class:active="{$page.path === '/medias'}" href="/medias">
                    <i class="ion-ios-eye-outline"/>&nbsp;Medias</a>
            </li>
            <!--            <li class="nav-item">-->
            <!--                <a rel='prefetch' class="nav-link" class:active="{$page.path === '/search'}" href="/search">-->
            <!--                    <i class="ion-search"/>&nbsp;Search</a>-->
            <!--            </li>-->
            {#if $session.user}
                <li class="nav-item">
                    <div class="dropdown show">
                        <a href="#" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" class="nav-link ">
                            <i class="ion-android-person"/>&nbsp;{$session.user.username}
                        </a>
                        <div class="nav-dropdown dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" rel='prefetch' role="button" aria-pressed="true"
                               href='/users/@{$session.user.username} '><i class="ion-gear-b"/>&nbsp;Profile</a>
                            <a class="dropdown-item" rel='prefetch' role="button" aria-pressed="true" href="/admin">
                                <i class="ion-monitor"/>&nbsp;Admin Panel</a>
                            <button class="dropdown-item" on:click={logout}><i class="ion-android-exit"/>&nbsp;Log out</button>
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