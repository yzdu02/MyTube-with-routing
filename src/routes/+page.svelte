<style>
    .list {
        background-color: antiquewhite;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        margin-top: 50px;
        margin-bottom: 50px;
        margin-left: auto;
        margin-right: auto;
        width:66%;
        border-radius: 12px;
    }
</style>


<script>
// @ts-nocheck

	import VideoSuggestion from '../components/VideoSuggestion.svelte'
    export let data
</script>

<div class="list">
    {#each data.video as v}
    <VideoSuggestion {v}/>
    {/each}
</div>