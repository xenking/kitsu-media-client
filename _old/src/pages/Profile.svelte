<script>
    import ProfileMenu from '../components/ProfileMenu.svelte';
    import ProfileTop from '../components/ProfileTop.svelte';
    import ProfileMain from '../components/ProfileMain.svelte';
</script>

<div class="flex-col w-full z-0 text-lg">
    <div class="w-full md:h-12 h-24">
    </div>
    <ProfileTop/>
    <ProfileMenu/>
    <ProfileMain/>
    <div class="w-full md:h-12 h-20">
    </div>
</div>