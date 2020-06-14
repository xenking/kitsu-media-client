<script>
    import {stores} from '@sapper/app';
    import MediaList from '../MediaList/index.svelte'

    let media = true;
    export let tab = 'all';
    export let tag = null;
    export let p;

    const {session} = stores();

    function globalmedia() {
        tab = "all";
        tag = null
    }

</script>

<div class="col-md-9">
    <div class="feed-toggle">
        <ul class="nav nav-pills outline-active">
            <li>
                <a href="." class='nav-link {media === "all" ? "active" : "" }' on:click='{globalmedia}'>
                    Global Media
                </a>
            </li>

            {#if tag}
                <li class="nav-item">
                    <a href="." class='nav-link {tab === "tag" ? "active" : "" }' on:click='{() => tab = "tag"}'>
                        <i class="ion-pound"></i> {tag}
                    </a>
                </li>
            {/if}

        </ul>
    </div>

    <MediaList {p} {tab} {tag}/>

</div>