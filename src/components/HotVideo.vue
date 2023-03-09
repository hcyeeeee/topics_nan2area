<template>
    <div class="video" id="hotvideo">
        <li class="videotitle m">精選影音</li>
        <div class="videotab d" id="video">
            <ul class="nav videonav" style=" white-space: nowrap;" id="pills-tab" role="tablist">
                <li class="videotitle d">精選影音</li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link active tablinks1" id="pills-video-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-video" type="button" role="tab" aria-controls="pills-video"
                        aria-selected="true">
                        LIVE直播
                    </button>

                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link tablinks1" id="pills-video1-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-video1" type="button" role="tab" aria-controls="pills-video1"
                        aria-selected="false">
                        全國第一勇</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link tablinks1" id="pills-video1-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-video2" type="button" role="tab" aria-controls="pills-video2"
                        aria-selected="false">
                        台灣最前線</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link tablinks1" id="pills-video1-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-video3" type="button" role="tab" aria-controls="pills-video3"
                        aria-selected="false">
                        台灣向前行</button>
                </li>
            </ul>
        </div>

        <div class="video">

            <div class="tab-content iframe-container" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-video" role="tabpanel" aria-labelledby="pills-video-tab">
                    <div class="fuck d">
                        <p><i class="fa-solid fa-bell"></i>&nbsp;《民視新聞網》LIVE直播不間斷，讓您即時掌握最新新聞動態！</p>
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ylYJSBUgaMA"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>

                </div>
                <!-- 全國第一勇 -->
                <div class="tab-pane  tab-content " id="pills-video1" role="tabpanel" aria-labelledby="pills-video1-tab">
                    <div class="fuck d">
                        <p><i class="fa-solid fa-bell"></i>&nbsp;讓《全國第一勇》的徐國勇，與來賓共同為您精闢分析每天時事！</p>
                        <a class="more_button d"
                            href="https://www.youtube.com/playlist?list=PLBXFGXTYyFgAmbYv9Bgq9cxcWcwW6qgJA"
                            target="_blank">點我看更多《全國第一勇》</a>
                    </div>

                    <a class="more_button m" href="https://www.youtube.com/playlist?list=PLBXFGXTYyFgAmbYv9Bgq9cxcWcwW6qgJA"
                        target="_blank">點我看更多《全國第一勇》</a>
                    <iframe width="560" height="315"
                        src="https://www.youtube.com/embed/videoseries?list=PLBXFGXTYyFgAmbYv9Bgq9cxcWcwW6qgJA"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
                <!-- 台灣最前線 -->
                <div class="tab-pane  tab-content " id="pills-video2" role="tabpanel" aria-labelledby="pills-video2-tab">
                    <div class="fuck d">
                        <p><i class="fa-solid fa-bell"></i>&nbsp;讓《台灣最前線》的許仲江，與來賓共同為您精闢分析每天時事！</p>
                        <a class="more_button d"
                            href="https://www.youtube.com/playlist?list=PLf2VRok0uRO0BrUIa70CS1_PoeAghdM3K"
                            target="_blank">點我看更多《台灣最前線》</a>
                    </div>
                    <a class="more_button m" href="https://www.youtube.com/playlist?list=PLf2VRok0uRO0BrUIa70CS1_PoeAghdM3K"
                        target="_blank">點我看更多《台灣最前線》</a>
                    <iframe width="560" height="315"
                        src="https://www.youtube.com/embed/videoseries?list=PLf2VRok0uRO0BrUIa70CS1_PoeAghdM3K"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
                <!-- 台灣向前行 -->
                <div class="tab-pane  tab-content " id="pills-video3" role="tabpanel" aria-labelledby="pills-video3-tab">
                    <div class="fuck d">
                        <p><i class="fa-solid fa-bell"></i>&nbsp;讓《台灣向前行》的張孟琦，與來賓共同為您精闢分析每天時事！</p>
                        <a class="more_button d"
                            href="https://www.youtube.com/playlist?list=PLf2VRok0uRO0px2iZrtznovVe10LfcfJO"
                            target="_blank">點我看更多《台灣向前行》</a>
                    </div>
                    <a class="more_button m" href="https://www.youtube.com/playlist?list=PLf2VRok0uRO0px2iZrtznovVe10LfcfJO"
                        target="_blank">點我看更多《台灣向前行》</a>
                    <iframe width="560" height="315"
                        src="https://www.youtube.com/embed/videoseries?list=PLf2VRok0uRO0px2iZrtznovVe10LfcfJO"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <div class="videotab m videotabm" id="video">
            <ul class="nav videonav" style=" white-space: nowrap;" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active tablinks1" id="pills-video-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-video" type="button" role="tab" aria-controls="pills-video"
                        aria-selected="true">
                        LIVE直播
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link tablinks1" id="pills-video1-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-video1" type="button" role="tab" aria-controls="pills-video1"
                        aria-selected="false">
                        全國第一勇</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link tablinks1" id="pills-video1-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-video2" type="button" role="tab" aria-controls="pills-video2"
                        aria-selected="false">
                        台灣最前線</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link tablinks1" id="pills-video1-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-video3" type="button" role="tab" aria-controls="pills-video3"
                        aria-selected="false">
                        台灣向前行</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>


<style scoped>
.videotabm {
    position: relative;
    top: -1.4rem;
    margin: auto .5rem;
}

.m {
    display: none;
}

.d {
    display: flex;
}



@media screen and (max-width: 500px) {
    .m {
        display: flex;
    }

    .d {
        display: none;
    }
}


.video {
    max-width: 1400px;
    margin: auto;
}

.nav {
    display: flex !important;
    justify-content: start !important;
}

.videotitle {
    color: rgb(255, 255, 255);
    padding: 0.5rem .8rem;
    font-size: 1rem;
    background: #7630D8;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
    border: 0px;
    margin: 0.5rem;
    border-radius: 2px;
    letter-spacing: .2rem;
    height: 40px;
}

.fuck {
    display: flex;
    flex-wrap: nowrap;
}

.fuck p {
    letter-spacing: .2rem;
    margin: 0.5rem 0rem 1rem 1rem;
}

@media screen and (max-width: 768px) {
    .fuck p {
        font-size: 1rem;
        letter-spacing: 0rem;
    }

    .fuck {
        display: flex;
        flex-wrap: wrap;
    }

}

@media screen and (max-width: 500px) {


    .fuck p {
        font-size: 1rem;
        letter-spacing: 0rem;
        margin-top: -6rem;
        text-align: left;
    }


    .fuck {
        margin: .5rem;
    }

    .nav {
        display: flex !important;
        justify-content: start !important;
        flex-wrap: nowrap;
        overflow-x: scroll;
    }

    .video {
        max-width: 1400px;
        margin: auto;
    }

}


.iframe-container iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 2rem;
    width: 100%;
}

@media screen and (max-width: 768px) {
    .iframe-container iframe {
        border: 0;
        height: 100%;
        left: 0;
        position: absolute;
        top: 3rem;
        width: 100%;
    }

    .more_button {
        justify-content: end;
        margin: -5rem 1rem 1rem auto;
        font-size: 1rem;
    }
}

@media screen and (max-width: 500px) {
    .iframe-container iframe {
        border: 0;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0rem;
        margin-top: -1rem;
    }

    .videotitle {
        width: fit-content;
        margin: 1rem;
        margin-bottom: 0rem;
        border-radius: 10px 10px 0px 0px;
        font-size: 19.2px
    }

}

.fa-bell {
    color: #E47600
}

.more_button {
    justify-content: end;
    margin: 0rem 1rem 1rem auto;
}

@media screen and (max-width: 500px) {

    .more_button {

        position: absolute;
        top: -36px;
        right: 0rem;
        font-size: 12px;
    }

    .fuck p {
        display: none;
    }


}
</style>