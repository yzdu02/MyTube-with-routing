<style>
    /* Basics */
    h1 {
        color: white;
        text-shadow: 2px 2px 1px red, 2px 2px 2px black;
    }

    /* navgation bar */
    nav {
        display:flex;
        align-items: center;
        justify-content: space-between;
        background-color: antiquewhite;
        width: 100%;
        border: 1em;
        padding: 0.4em;
        border-radius: 12px;
    }
        /* Logo */
        a.logo {
            display: flex;
            align-items: center;
            width: 200px;
            height: 50px;
            overflow: hidden;
            gap:.5em
        }
        a.logo img {
            width: 30%;
            height: 80%
        }
        /* Search (No Function) */
        #search-container {
            position: relative;
            width: 200px;
        }
        #search {
            width: 100%;
            padding: 0.5em;
            background-color: white;
            border-radius: 12px;
        }
        #search-container::before {
            content: '🔍';
            position: absolute;
            right: 5px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 1em;
            pointer-events: none;
        }
</style>


<script>
    import "../app.css"
</script>


<nav>
    <a class="logo" href="/">
        <h1 id="title">MyTube</h1>
        <img src='../Youtube_logo.png' alt='favicon.png'>
    </a>
    <div id="search-container">
        <input id="search" type="search" placeholder="I want to watch..." />
    </div>
</nav>

<slot />