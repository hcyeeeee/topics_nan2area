<template>
    <div class="all" id="hotnews">

        <div class="hot_news">
            <p class="hot_title">最新政治新聞</p>
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="(item, index) in news" :key="index">
                    <a :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID" target="_blank">
                        <img :src="item.Image" class="cand_news_img" alt="新聞照片">
                        <p class="swipertitle"><i class="fa-duotone fa-play"></i>&nbsp;&nbsp;{{ item.Title }}</p>
                    </a>
                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
            <div class="news_right">
                <div v-for="(item, index) in news" :key="index">
                    <a class="hot_news_layout" :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID" target="_blank">
                        <div class="hot_news_inner">
                            <p class="hot_news_title"> <i class="fa-duotone fa-play"></i>&nbsp;&nbsp;{{ item.Title }}</p>
                        </div>
                    </a>
                </div>
                <a class="more_button" href="https://www.ftvnews.com.tw/tag/政治" target="_blank">點我看更多</a>

            </div>
        </div>
    </div>
</template>


<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name: 'App',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            news: [],
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 30,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },
    methods: {
        get_hotnews() {
            // eslint-disable-next-line no-undef
            this.axios
                .get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=政治&Page=1&sp=8")
                .then((response) => {
                    let data = response.data.ITEM
                    data.forEach((item) => { this.news.push(item) })
                })
                .catch((error) => {
                    console.log("error" + error);
                });

        },
    },
    mounted() {
        this.get_hotnews();
    }
}
</script>


<style>
.all {
    margin-top: 3rem;
}

.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: -.5rem 4px;
    color: #007a !important;
    background: rgba(255, 146, 5, 0.667) !important;
}

.swiper-button-next:after,
.swiper-container-rtl .swiper-button-prev:after {
    content: 'next';
    color: white;
}

.swiper-button-prev:after,
.swiper-container-rtl .swiper-button-next:after {
    content: 'prev';
    color: white;
}

.swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
    margin: 1rem;
}


container-horizontal>.swiper-pagination-bullets {
    bottom: 5rem;
    left: 0;
    width: 100%;
}

@media screen and (max-width: 768px) {
    .swiper-container {

        margin: 1rem 2rem;
    }
}

@media screen and (max-width: 500px) {
    .swiper-container {
        width: 350px;
        margin: 1rem auto;
    }

    .all {
        margin-top: 0rem;
    }

}


.swipertitle {
    padding: 0rem 1rem;
    display: -webkit-box;
    position: relative;
    top: 1rem;
    border-radius: 0 0 10px 10px;
    margin: auto;
    width: 100%;
    color: white;
    font-size: 20px;
    font-weight: 900
}

@media screen and (max-width: 1100px) {
    .swipertitle {
        font-size: 18px;
    }

    .swipertitle {

        top: -0rem;

    }

    .swiper img {
        width: 100%;
        object-fit: cover;
        margin-bottom: -4rem;
        max-height: 430px;
        height: 430px;

    }
}


.swipertitle {
    text-align: start;
    background: rgba(0, 0, 0, 0.3);
    padding: 0.3rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    position: relative;
    /* bottom: 0rem; */
    margin-bottom: 3rem;
    top: 1rem;

}

.swipertitle p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;


}

@media screen and (max-width: 768px) {

    .swipertitle {
        text-align: start;
        background: #00000082;
        padding: 0.5rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        position: relative;
        /* bottom: 0rem; */
        margin-bottom: 3rem;
        top: 0rem;
    }

    .swipertitle p {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;


    }

}





.swiper img {
    width: 100%;
    object-fit: cover;
    margin-bottom: -4rem;
    max-height: 430px;
    height: 100%;

}

.fa-play {
    color: #ff8400;
}

.hot_news {
    max-width: 1400px;
    display: grid;
    margin: auto;
    grid-template-columns: 3fr 2fr;
    position: relative;
}



.hot_title {
    position: absolute;
    z-index: 99999;
    top: -28px;
    left: 16px;
}


@media screen and (max-width: 768px) {
    .hot_title {
        position: absolute;
        z-index: 99999;
        top: -27px;
        left: 32px;
    }
}

@media screen and (max-width: 500px) {
    .hot_title {
        position: relative;
        z-index: 99999;
        top: 1px;
        left: -92px;
    }
}





@media screen and (max-width: 1000px) {
    .hot_news {
        max-width: 1400px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}



.hot_news_inner {
    background: white;
    border-radius: 10px;
    padding: .5rem 1rem;
    margin: 1rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
    text-align: left;
}






.fa-play:hover {
    color: #7630d8;
}

.hot_news_inner:hover {
    border-radius: 10px;
    padding: .5rem 1rem;
    margin: 1rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
    text-align: left;
}

.hot_news_inner p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0rem;
}


.hot_news_inner p:hover {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0rem;
    opacity: .7;
    transition: .3s all;
}

@media screen and (max-width: 768px) {
    .hot_news_inner {
        margin: 1rem auto;
        max-width: 500px;
    }

    .hot_news_inner:hover {
        max-width: 500px;
    }

}


@media screen and (max-width: 500px) {
    .hot_news_inner {
        margin: .8rem auto;
        width: 350px;

    }

    .hot_news_inner:hover {
        width: 350px;
    }

}




@media screen and (max-width: 900px) {
    .news_right {
        margin-top: -1rem;
    }
}


@media screen and (max-width: 500px) {
    .news_right {
        margin-top: -1rem;
    }
}


.news_left {
    margin: 0.5rem 1rem;
}

.hot_title {
    font-size: 1.2rem;
    margin: 0rem auto;
    background: #ff8400;
    width: fit-content;
    color: white;
    padding: .5rem 1rem;
    border-radius: 10px 10px 0px 0px;
    letter-spacing: .2rem;
    margin-bottom: -1rem;
}






.more_button {
    padding: .3rem .5rem;
    border: 1.5px solid #ff8400;
    border-radius: 10px;
    letter-spacing: .1rem;
    margin: 1rem auto;
    display: flex;
    color: #ff8400;
    width: fit-content;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
}

.more_button:hover {
    background: #ff8400;
    color: rgb(255, 255, 255);
    transition: all .2s;
    border: 1px solid #ff8400;

}

.more_button a {
    background: #ff8400;
    color: #f5f5f5 !important;
    transition: all .2s;
    border: 1px solid #ff8400;

}
</style> 