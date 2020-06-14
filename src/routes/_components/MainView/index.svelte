<script>
    import {stores} from '@sapper/app';
    import ArticleList from '../ArticleList/index.svelte';

    export let tab = 'all';
    export let tag = null;
    export let p;

    const {session} = stores();

    function yourFeed() {
        tab = "feed";
        tag = null;
    }

    function globalfeed() {
        tab = "all";
        tag = null;
    }

    function newpost() {
        tab = "newpost";
        tag = null;
    }

</script>

<div class="col-md-9">
    <div class="feed-toggle">
        <ul class="nav nav-pills outline-active">

            {#if $session.user}
                <li class="nav-item">
                    <a href="." class='nav-link {tab === "feed" ? "active" : "" }' on:click='{yourFeed}'>
                        Your Feed
                    </a>
                </li>
            {:else}

                <li class="nav-item">
                    <a href="/login" class='nav-link'>
                        Your Feed
                    </a>
                </li>
            {/if}

            <li class="nav-item">
                <a href="." class='nav-link {tab === "all" ? "active" : "" }' on:click='{globalfeed}'>
                    Global Feed
                </a>
            </li>

            {#if tag}
                <li class="nav-item">
                    <a href="." class='nav-link {tab === "tag" ? "active" : "" }' on:click='{() => tab = "tag"}'>
                        <i class="ion-pound"></i> {tag}
                    </a>
                </li>
            {/if}

            {#if $session.user}
                <li class="nav-item">
                    <a rel='prefetch' href="/editor" class='nav-link {tab === "newpost" ? "active" : "" }'
                       on:click='{newpost}'>
                        <i class="ion-compose"></i>&nbsp;New Post
                    </a>
                </li>
            {/if}

        </ul>
    </div>

    <ArticleList {p} {tab} {tag}/>

</div>