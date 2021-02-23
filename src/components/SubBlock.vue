<template>
    <div class="wide__container">
        <h1 class="title">Design Challenge</h1>
        <h2 class="subtitle">Scheveningen</h2>
    </div>
</template>

<style scoped>
    .wide__container {
        width: 100%;
        height: 100vh;
        background-image: url('https://images.unsplash.com/photo-1496805713444-03e7b6eca934?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80');
        text-align: center;
        background-repeat:no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: -100px;
        z-index: 2;
        opacity: 100%;
        background-size: 1700px;
        background-position-y: -100px;
        background-blend-mode: lighten;
        /* background-color: b; */
    }

    .title {
        font-family: "Cabin";
        font-weight: bold;
        font-size: 140px;
        margin: 0;
        color: white;
    }
    .subtitle {
        font-family: "Cabin";
        font-weight: bold;
        font-size: 120px;
        margin: 0;
        color: white;
    }
</style>