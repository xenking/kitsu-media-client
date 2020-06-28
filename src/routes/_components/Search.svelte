<script>
    import {stores} from '@sapper/app';

    export let tab = "all";
    export let tag = null;
    export let p = 1;

    const {session} = stores();

    function alltorrets() {
        tab = "all";
        tag = null
    }

    function tokyotorrents() {
        tab = "TokyoToshi";
        tag = null
    }

    function rutorrents() {
        tab = "RuTracker";
        tag = null
    }

</script>

<svelte:head>
    <title>Kitsu media</title>
</svelte:head>

<div class="home-page">

    <div class="banner">
        <div class="container">
            <h1 class="logo-font">Kitsu media</h1>
            <p>Place where you can maintain a list of media and also watch it </p>
        </div>
    </div>

    <div class="container page">
        <div class="row">
            <div class="col-sm-9">
                <div class="feed-toggle">
                    <ul class="nav nav-pills outline-active">
                        <li class="nav-item">
                            <a href="/search" class='nav-link {tab === "all" ? "active" : "" }' on:click='{alltorrets}'>
                                All torrents
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/search" class='nav-link {tab === "TokyoToshi" ? "active" : "" }' on:click='{tokyotorrents}'>
                                TokyoToshi
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/search" class='nav-link {tab === "RuTracker" ? "active" : "" }' on:click='{rutorrents}'>
                                Rutracker
                            </a>
                        </li>

                    </ul>
                </div>
                <div class="media-all">
                </div>
            </div>
        </div>
    </div>
</div>