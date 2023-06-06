<style>
a {
    display: flex;
    margin: 12px;
    gap: 12px;
}
    a img {
        max-width: 320px;
        max-height: 180px;
        border-radius: 12px;
    }

    .desc {
        color: black;
    }
        .desc h5 {
            font-family: ArialCaslon;
            font-size: 20px;
            margin-top: 2px;
            margin-bottom: 2px;
        }

        .desc h6 {
            font-family: Caslon;
            font-size: 16px;
            margin-top: 10px;
            margin-bottom: 10px;
        }
</style>

<script>
// @ts-nocheck
    export let v
</script>

<a href="/{v.id}">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src={v.image} alt="Image"/>
    <div class="desc">
        <h5>{v.title}</h5>
        <h6>{v.uploader}</h6>
    </div>
</a>