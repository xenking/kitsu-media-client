<script>
    import {goto} from '@sapper/app';
    import Hoverable from '../../_components/Hoverable.svelte'
    import * as api from 'api.js';

    export let profile;
    export let user;

    isUser = user && (profile.username === user.username);

    async function toggleFollowing() {
        if (!user) return goto('/login');

        // optimistic UI
        profile.following = !profile.following;

        ({profile} = await (profile.following
                ? api.post(`users/${profile.username}/follow`, null, user && user.token)
                : api.del(`users/${profile.username}/follow`, user && user.token)));
    }
</script>

<svelte:head>
    <title>{profile.username} • Kitsu media</title>
</svelte:head>


<div class="user-info">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-10 offset-md-1">
                <div class="userinfo">
                    <img src={profile.image} class="user-img" alt={profile.username}/>
                    <div>
                        <h4>{profile.username}</h4>
                        {#if isUser}
                            <a href="/settings" class="btn btn-sm btn-outline-secondary action-btn">
                                <i class="ion-gear-a"></i> Edit Profile Settings
                            </a>
                        {:else}
                            <button
                                    class='btn btn-sm action-btn {profile.following ? "btn-secondary" : "btn-outline-secondary"}'
                                    on:click='{toggleFollowing}'
                            >
                                {#if profile.following}
                                    <Hoverable let:hovering={active}>
											<span class:active>
												{#if active}
                                                    <i class="ion-minus-round"></i> Unfollow {profile.username}
                                                {:else}
                                                    <i class="ion-checkmark-round"></i> Followed {profile.username}
                                                {/if}
											</span>
                                    </Hoverable>
                                {:else}
                                    <i class="ion-plus-round"></i> Follow {profile.username}
                                {/if}

                            </button>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

