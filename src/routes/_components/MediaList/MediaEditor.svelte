<script>
    import {goto, stores} from '@sapper/app';
    import ListErrors from '../ListErrors.svelte';
    import * as api from 'api';

    export let media;
    export let slug;

    let inProgress = false;
    let errors;
    let airingDate;

    const {session} = stores();

    function addTag(input) {
        media.tagList = [...media.tagList, input.value];
        input.value = '';
    }

    function remove(index) {
        media.tagList = [...media.tagList.slice(0, index), ...media.tagList.slice(index + 1)];
    }

    async function publish() {
        media.airingDate = new Date(Date.parse(airingDate)).toISOString();

        inProgress = true;

        const response = await (slug
                ? api.put(`medias/${slug}`, {media}, $session.user && $session.user.token)
                : api.post('medias', {media}, $session.user && $session.user.token));

        if (response.media) {
            goto(`/media/${response.media.slug}`);
        }

        inProgress = false;
    }

    function enter(node, callback) {
        function onkeydown(event) {
            if (event.which === 13) callback(node);
        }

        node.addEventListener('keydown', onkeydown);

        return {
            destroy() {
                node.removeEventListener('keydown', onkeydown);
            }
        };
    }
</script>

<div class="editor-page">
    <div class="container page">
        <div class="row">
            <div class="col-md-10 offset-md-1 col-xs-12">
                <ListErrors {errors}/>

                <form>
                    <fieldset>
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" type="text" placeholder="Media Name"
                                   bind:value={media.title}>
                        </fieldset>

                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" type="text" placeholder="Studio"
                                   bind:value={media.studio}>
                        </fieldset>

                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" type="number" max="1024" min="0"
                                   placeholder="Number of episodes"
                                   bind:value={media.episodes}>
                        </fieldset>

                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" type="date" placeholder="Aired in"
                                   bind:value={airingDate}>
                        </fieldset>

                        <fieldset class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="typeSelected">Type</label>
                                </div>
                                <select class="custom-select" id="typeSelected" bind:value={media.type}>
                                    <option value="TV">TV</option>
                                    <option value="Movie">Movie</option>
                                    <option value="OVA">OVA</option>
                                    <option value="ONA">ONA</option>
                                </select>
                            </div>
                        </fieldset>

                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" type="text" placeholder="Poster url"
                                   bind:value={media.poster}>
                        </fieldset>

                        <fieldset class="form-group">
                            <input class="form-control" type="text" placeholder="Media description"
                                   bind:value={media.description}>
                        </fieldset>

                        <fieldset class="form-group">
                            <input class="form-control" type="text" placeholder="Enter tags" use:enter={addTag}>

                            <div class="tag-list">
                                {#each media.tagList as tag, i}
                                    <span class="tag-default tag-pill">
										<i class="ion-close-round" on:click='{() => remove(i)}'/>
                                        {tag}
									</span>
                                {/each}
                            </div>
                        </fieldset>

                        <button class="btn btn-lg pull-xs-right btn-primary" type="button" disabled={inProgress}
                                on:click={publish}>
                            Add new media
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>