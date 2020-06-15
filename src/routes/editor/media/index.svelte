<script>
    import Editor from '../../_components/MediaList/MediaEditor.svelte';

    let media = {title: '', description: '', poster: '', studio: '', episodes: 0, type: "TV", airingDate:'', tagList: []};
</script>

<Editor {media}/>