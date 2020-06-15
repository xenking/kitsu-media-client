<script>
    import {createEventDispatcher} from 'svelte';
    import * as api from '../../node_modules/api';

    export let admin;
    export let user;

    const dispatch = createEventDispatcher();

    async function remove() {
        await api.del(`admin/user/${user.user.username}`, admin && admin.token);
        dispatch("deleted");
    }
</script>


<tbody>
<tr>
    <td>{user.user.username}</td>
    <td>{user.user.email}</td>
    <td><i class="ion-close-round" on:click='{remove}'></i></td>
</tr>
</tbody>
