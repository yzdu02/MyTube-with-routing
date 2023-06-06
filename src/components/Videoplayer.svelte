<style>
/* Video Player */
.player {
    margin: 10px;
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
}
    /* Video Portion */
    iframe{
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 12px;
    }
/* Information */
.info{
    display: flex;
    flex-direction: column;
    margin: 10px;
}
    .info h2{
        font-size: 36px;
        margin-top: 0px;
        margin-bottom:5px;
    }
    /* Uploader */
    .uploader {
        display: flex;
        margin:0;
        padding:0;
        gap: 1em;
        border-radius: 12px;
    }
        .uploader h3{
            font-size:20px;
            margin-top: 5px;
            margin-bottom: 5px;
            margin-left:3px
        }
    /* specs */
    .specs {
        background: antiquewhite;
        margin-top:10px;
        padding: 10px;
        border-radius: 12px;
    }
        /* subspecs */
        #subspecs{
            display: flex;
            gap:1em;
            padding: 0px;
        }
        .specs h4{
            font-size:18px;
            margin-top: 10px;
            margin-bottom: 0px;
        }
</style>


<script>
// @ts-nocheck
    export let v
</script>

<div class="player">
    <iframe width="560" height="315" title='video' src="https://www.youtube.com/embed/{v.id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="info">
    <div class='title'>
        <h2>{v.title}</h2>
    </div>

    <div class="uploader">
        <h3>{v.uploader}</h3>
        <h3>{v.subscribers} Subscribers</h3>
    </div>

    <div class="specs">
        <div id="subspecs">
            <h4>{v.view} View</h4>
            <h4>{v.uploadTime}</h4>
        </div>
        <p>{v.description}</p>
    </div>
</div>
