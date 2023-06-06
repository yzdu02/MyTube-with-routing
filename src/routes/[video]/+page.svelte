<style>
    .main{
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
    }
        .video-player{
            flex: 1 1 1000px;
        }
        .suggesion-list{
            flex: 0 1 400px;
        }
</style>


<script>
// @ts-nocheck
	import VideoSuggestion from '../../components/VideoSuggestion.svelte'
    import Videoplayer from '../../components/Videoplayer.svelte'
    export let data
</script>

<div class="main">
    <div class="video-player">
        <Videoplayer v={data.now}/>
    </div>
    
    <div class="suggesion-list">
        {#each data.rest as r}
        <VideoSuggestion v={r}/>
        {/each}
    </div>
</div>
