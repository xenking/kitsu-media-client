<script>
    import {stores} from '@sapper/app';
    import MediaList from '../MediaList/index.svelte'

    export let tab = "all";
    export let tag = null;
    export let p;

    const {session} = stores();

    function globalmedia() {
        tab = "all";
        tag = null
    }

    function newpost() {
        tab = "newpost";
        tag = null;
    }
</script>

<div class="col-sm-9">
    <div class="feed-toggle">
        <ul class="nav nav-pills outline-active">
            <li class="nav-item">
                <a href="/medias" class='nav-link {tab === "all" ? "active" : "" }' on:click='{globalmedia}'>
                    All Media
                </a>
            </li>

            {#if tag}
                <li class="nav-item">
                    <a href="/medias" class='nav-link {tab === "tag" ? "active" : "" }' on:click='{() => tab = "tag"}'>
                        <i class="ion-pound"></i> {tag}
                    </a>
                </li>
            {/if}

            {#if $session.user}
                <li class="nav-item">
                    <a rel='prefetch' href="/editor/media" class='nav-link {tab === "newpost" ? "active" : "" }'
                       on:click='{newpost}'>
                        <i class="ion-compose"></i>&nbsp;New Media
                    </a>
                </li>
            {/if}

        </ul>
    </div>
    <div class="media-all">
        <MediaList {p} {tab} {tag}/>
    </div>
</div>