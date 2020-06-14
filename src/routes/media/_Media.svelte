<script>
    import {stores} from '@sapper/app';
    import MediaList from '../_components/MediaList/index.svelte'

    let media = true;
    // export let tab = 'all';
    // export let tag = null;
    // export let p;
    //
    // const { session } = stores();
    //
    // function yourFeed() {
    //     tab = "my";
    //     tag = null;
    // }
    //
    // function globalfeed() {
    //     tab = "all";
    //     tag = null;
    // }
    //
    // function globalmedia() {
    //     tab = "all";
    //     tag = null
    // }

</script>

<div class="col-md-9">
    <!--    <div class="feed-toggle">-->
    <!--        <ul class="nav nav-pills outline-active">-->
    <!--            {#if $session.user}-->
    <!--                <li class="nav-item">-->
    <!--                    <a href="." class='nav-link {tab === "my" ? "active" : "" }' on:click='{yourFeed}'>-->
    <!--                        My media-->
    <!--                    </a>-->
    <!--                </li>-->
    <!--            {:else}-->

    <!--                <li class="nav-item">-->
    <!--                    <a href="/login" class='nav-link'>-->
    <!--                        My media-->
    <!--                    </a>-->
    <!--                </li>-->
    <!--            {/if}-->
    <!--            <li>-->
    <!--                <a href="." class='nav-link {media === "all" ? "active" : "" }' on:click='{globalmedia}'>-->
    <!--                    Global Media-->
    <!--                </a>-->
    <!--            </li>-->

    <!--            {#if tag}-->
    <!--                <li class="nav-item">-->
    <!--                    <a href="." class='nav-link {tab === "tag" ? "active" : "" }' on:click='{() => tab = "tag"}'>-->
    <!--                        <i class="ion-pound"></i> {tag}-->
    <!--                    </a>-->
    <!--                </li>-->
    <!--            {/if}-->

    <!--        </ul>-->
    <!--    </div>-->

    <!--    <MediaList {p} {tab} {tag}/>-->
    <div class="row">
        {#if media}
            {#if media.length === 0}
                <div class="media-preview">
                    No media are here... yet.
                </div>
            {:else}
                <div class="media-preview">
                    <div>
                        <div>
                            <span>Added by</span>
                            <a class="media-author" href='/users/@VikDay'>
                                VikDay
                            </a>
                        </div>

                    </div>

                    <a href="/media/test">Steins Gate</a>
                    <a rel="prefetch" href="/media/test">
                        <div class="media-img ">

                        </div>
                    </a>

                    <div class="media-info">
                        <div class="media-studio">
                            Mad House
                        </div>
                        <span class="media-date">
                            2008
                        </span>
                    </div>
                </div>

                <div class="media-preview">
                    <div>
                        <div>
                            <span>Added by</span>
                            <a class="media-author" href='/users/@VikDay'>
                                VikDay
                            </a>
                        </div>

                    </div>

                    <span>Madoca Magica</span>
                    <a rel="prefetch">
                        <div class="media-img ">

                        </div>
                    </a>
                    <div class="media-info">
                        <div class="media-studio">
                            Shift
                        </div>
                        <span class="media-date">
                    2008
                </span>
                    </div>
                </div>
            {/if}
        {:else}
            <div class="media-preview">Loading...</div>
        {/if}
    </div>


</div>