<script>
    import User from './_User.svelte';
    import {stores} from '@sapper/app';
    import ListPagination from '../_components/Admin/ListPagination.svelte';
    import * as api from 'api.js';


    export let p;

    let query;
    let users;
    let usersCount;

    const {session, page} = stores();

    let admin = $session.user;
    $: {
        const page_size = 10;

        let params = `limit=${page_size}&offset=${(p - 1) * page_size}`;
        query = `admin/users?${params}`;
    }

    $: query && getData();

    // $: isUser = user && (profile.username === user.username);

    async function getData() {
        users = null;

        ({users, usersCount} = await api.get(query, admin && admin.token));
    }
</script>

{#if users}
    <table class="table">
        <thead>
        <tr>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
        </tr>
        </thead>
        {#each users as user, i (user.user.username)}
            {#if user.user.username !== admin.username}
                <User {user} {admin} on:deleted='{() => users = users.filter((_, index) => i !== index)}'/>
            {/if}
        {/each}
    </table>


    <ListPagination {usersCount} page={parseInt($page.params.user, 10)}/>

{:else}
    <div class="user-preview">Loading...</div>
{/if}