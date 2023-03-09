<template>
    <div>

        <div class="cand_section">

            <div class="cand_left">
                <div id="cand" class="cand">
                    <button class="cand_btn" onclick="openCand(event, 'tab2')" id="defaultOpen">
                        <p class="mobile">蔡培慧</p>
                        <p class="computer">民進黨 蔡培慧</p>
                    </button>
                    <button class="cand_btn" onclick="openCand(event, 'tab3')">
                        <p class="mobile">林明溱</p>
                        <p class="computer">國民黨 林明溱</p>

                    </button>
                    <button class="cand_btn" onclick="openCand(event, 'tab1')">
                        <p class="mobile">魯昱君</p>
                        <p class="computer">國家公義運動黨 魯昱君</p>
                    </button>
                    <button class="cand_btn" onclick="openCand(event, 'tab4')">
                        <p class="mobile">陳聰鑑</p>
                        <p class="computer">無黨籍 陳聰鑑</p>
                    </button>
                </div>

                <div id="tab2" class="tabcontent">
                    <div class="cand_layout">
                        <div class="cand_pic">
                            <img class="cand_pic" src="https://www.ftvnews.com.tw/topics/nan2area/img/蔡培慧.png" alt="">
                            <img class="partypic" src="https://www.ftvnews.com.tw/topics/nan2area/img/民進黨.jpg" alt="">
                        </div>

                        <div class="cand_content">
                            <div class="cand_title">
                                <h2 class="cand_name">
                                    <i class="fa-regular fa-circle-1"></i>
                                    蔡培慧
                                </h2>
                            </div>
                            <ul class="nav tabb tab_style" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                        aria-selected="true">
                                        學歷
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-profile" type="button" role="tab"
                                        aria-controls="pills-profile" aria-selected="false">經歷</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-contact" type="button" role="tab"
                                        aria-controls="pills-contact" aria-selected="false">政見</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                                    aria-labelledby="pills-home-tab">
                                    <ul>
                                        <li> 國立臺灣大學生物產業傳播暨發展研究所學系研究所博士</li>
                                        <li>世新大學社會發展研究所碩士</li>
                                    </ul>
                                </div>
                                <div class="tab-pane content fade" id="pills-profile" role="tabpanel"
                                    aria-labelledby="pills-profile-tab">
                                    <ul>
                                        <li>第九屆不分區立法委員</li>
                                        <li>行政院中部聯合服務中心執行長</li>
                                        <li>立法院教育及文化委員會召集委員</li>
                                        <li>公督盟、口袋國會評鑑優秀立委</li>
                                    </ul>
                                </div>
                                <div class="tab-pane content fade" id="pills-contact" role="tabpanel"
                                    aria-labelledby="pills-contact-tab">
                                    <div class="ccc">
                                        <ul>
                                            <li>
                                                顧產業，拚經濟：
                                                <br> 招商引資、創造就業機會，解決缺工問題。
                                            </li>

                                            <li>顧民生，拚建設：
                                                <br>爭取興建國民運動場館、共融公園營造親水環境。
                                            </li>

                                            <li>顧老幼，拚社福：
                                                <br>推動公共托育、多元服務日照中心、小黃公車化。
                                            </li>

                                            <li>顧觀光，拚交通：
                                                <br>推動濁水溪觀光大道、智慧觀光連結景點、「新南投輕軌線」可行性評估。
                                            </li>

                                            <li>顧農村，拚升級：
                                                <br>解決農業缺工問題、加強灌溉設施基礎建設、成立農產專區，提升農作物產值。
                                            </li>
                                            <li>顧青年，拚生活：
                                                <br>爭取設立專戶，補助青年創業、購屋、房貸利息，媒合建立「青年就業支持系統」
                                            </li>

                                            <li>顧學生，拚教育：
                                                <br>推動南投環線技職列車，串聯高中職到大學教育接軌產業。
                                            </li>
                                        </ul>
                                        <a href="https://bulletin.cec.gov.tw/01%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1/02%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1/109%E5%B9%B4%E7%AC%AC10%E5%B1%86/06%E8%A3%9C%E9%81%B8/%E5%8D%97%E6%8A%95%E7%B8%A3%E7%AC%AC%E4%BA%8C%E9%81%B8%E8%88%89%E5%8D%80%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1.pdf"
                                            target="_blank"><i class="fad fa-lg fa-file-download"></i>&nbsp;完整政見看這裡</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab3" class="tabcontent" style="display: none">
                    <div class="cand_layout">
                        <div class="cand_pic">
                            <img class="cand_pic" src="https://www.ftvnews.com.tw/topics/nan2area/img/林明溱.png" alt="">
                            <img class="partypic" src="https://www.ftvnews.com.tw/topics/nan2area/img/中國國民黨.jpg" alt="">
                        </div>
                        <div class="cand_content">
                            <div class="cand_title">
                                <h2 class="cand_name">
                                    <i class="fa-regular fa-circle-2"></i>
                                    林明溱<br>
                                </h2>
                            </div>
                            <ul class="nav tabb tab_style" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-home-tab1" data-bs-toggle="pill"
                                        data-bs-target="#pills-home1" type="button" role="tab" aria-controls="pills-home1"
                                        aria-selected="true">學歷</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab1" data-bs-toggle="pill"
                                        data-bs-target="#pills-profile1" type="button" role="tab"
                                        aria-controls="pills-profile1" aria-selected="false">經歷</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-contact-tab1" data-bs-toggle="pill"
                                        data-bs-target="#pills-contact1" type="button" role="tab"
                                        aria-controls="pills-contact1" aria-selected="false">政見</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent1">
                                <div class="tab-pane fade show active" id="pills-home1" role="tabpanel1"
                                    aria-labelledby="pills-home-tab1">
                                    <ul>
                                        <li>朝陽科技大學-休閒事業管理系碩士班</li>
                                        <li>中華工業專科學校</li>
                                    </ul>
                                </div>
                                <div class="tab-pane content fade" id="pills-profile1" role="tabpanel"
                                    aria-labelledby="pills-profile-tab1">
                                    <ul>
                                        <li>南投縣集集鎮鎮長（第12-13屆）</li>
                                        <li>南投縣議員（第15屆）</li>
                                        <li>南投縣政府觀光局局長</li>
                                        <li>立法委員（第7-8屆）</li>
                                        <li>南投縣縣長（第17-18屆）</li>
                                    </ul>
                                </div>
                                <div class="tab-pane content fade" id="pills-contact1" role="tabpanel1"
                                    aria-labelledby="pills-contact-tab1">
                                    <div class="ccc">
                                        <ul>
                                            <li>南投市
                                                <br>爭取中央整治貓羅溪之可行性評估。
                                                <br>爭取福崗路一段延伸至工業路經費。
                                                <br>爭取開發工業路東側為新興工業區。
                                            </li>

                                            <li>竹山鎮：
                                                <br>151甲線延伸至東埔蚋溪堤坊道路改善。
                                                <br>爭取木屐寮建構親水生態園區。
                                            </li>

                                            <li>鹿谷鄉：
                                                <br>活化鳳凰谷鳥園再造生態園區。
                                                <br> 爭取55縣拓寬愛鄉路至石馬公園路段。
                                            </li>

                                            <li>名間鄉：
                                                <br>投139丙線延伸至名松路，舒緩車流。
                                                <br>投150甲線延伸到台三線可行性評估。
                                                <br>受天宮至松嶺之星建置步道區。
                                            </li>

                                            <li>集集鎮：
                                                <br>集集國中附近設置多功能遊憩場。
                                                <br>清水溪設置橡皮壩蓄水池營造水環境景觀。
                                            </li>

                                            <li>水里鄉：
                                                <br>拓寬台16線民和路段。
                                                <br>開發台電大灣閒置土地結合車埕為觀光路線
                                                <br>推動水里溪各種水上運動賽事
                                            </li>

                                            <li>信義鄉：
                                                <br>配合縣府解決本鄉垃圾汙染環境問題。
                                                <br>開闢信義橋至梅子夢工廠之外環道路
                                            </li>
                                        </ul>
                                        <a href="https://bulletin.cec.gov.tw/01%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1/02%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1/109%E5%B9%B4%E7%AC%AC10%E5%B1%86/06%E8%A3%9C%E9%81%B8/%E5%8D%97%E6%8A%95%E7%B8%A3%E7%AC%AC%E4%BA%8C%E9%81%B8%E8%88%89%E5%8D%80%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1.pdf"
                                            target="_blank"><i class="fad fa-lg fa-file-download"></i>&nbsp;完整政見看這裡</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab1" class="tabcontent" style="display: none;">
                    <div class="cand_layout">
                        <div class="cand_pic">
                            <img class="cand_pic" src="https://www.ftvnews.com.tw/topics/nan2area/img/魯昱君.png" alt="">
                            <img class="partypic" src="https://www.ftvnews.com.tw/topics/nan2area/img/國家公義運動黨.png" alt="">
                        </div>
                        <div class="cand_content">
                            <div class="cand_title">
                                <h2 class="cand_name"> &nbsp;&nbsp;
                                    <i class="fa-regular fa-circle-3"></i>
                                    魯昱君
                                </h2>
                            </div>
                            <ul class="nav  tabb tab_style" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-home-tab2" data-bs-toggle="pill"
                                        data-bs-target="#pills-home2" type="button" role="tab" aria-controls="pills-home2"
                                        aria-selected="true">學歷</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab2" data-bs-toggle="pill"
                                        data-bs-target="#pills-profile2" type="button" role="tab"
                                        aria-controls="pills-profile2" aria-selected="false">經歷</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-contact-tab2" data-bs-toggle="pill"
                                        data-bs-target="#pills-contact2" type="button" role="tab"
                                        aria-controls="pills-contact2" aria-selected="false">政見</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent2">
                                <div class="tab-pane fade show active" id="pills-home2" role="tabpanel"
                                    aria-labelledby="pills-home-tab2">
                                    <ul>
                                        <li>國防大學政戰學院影劇系畢業</li>
                                    </ul>
                                </div>
                                <div class="tab-pane content fade" id="pills-profile2" role="tabpanel"
                                    aria-labelledby="pills-profile-tab2">
                                    <ul>
                                        <li>陸軍兵整中心及陸軍官校心輔官</li>
                                        <li>學校擔任軍訓教官</li>
                                        <li>草屯商工生輔組長</li>
                                    </ul>
                                </div>
                                <div class="tab-pane content fade" id="pills-contact2" role="tabpanel"
                                    aria-labelledby="pills-contact-tab2">
                                    <div class="ccc">
                                        <ul>
                                            <li>爭取中央經費，推動南投建設&nbsp;</li>
                                            <li>整合國家資源，提升偏鄉教育&nbsp;</li>
                                            <li>優化醫療系統，加強婦幼關懷&nbsp;</li>
                                            <li>推動文創產業，鼓勵青年返鄉&nbsp;</li>
                                            <li>健全體育環境，帶動城市觀光&nbsp;</li>

                                        </ul>
                                        <a href="https://bulletin.cec.gov.tw/01%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1/02%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1/109%E5%B9%B4%E7%AC%AC10%E5%B1%86/06%E8%A3%9C%E9%81%B8/%E5%8D%97%E6%8A%95%E7%B8%A3%E7%AC%AC%E4%BA%8C%E9%81%B8%E8%88%89%E5%8D%80%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1.pdf"
                                            target="_blank"><i class="fad fa-lg fa-file-download"></i>&nbsp;完整政見看這裡</a>
                                        <!-- 1.爭取中央經費，推動南投建設
                                        <br>2.整合國家資源，提升偏鄉教育
                                        <br>3.優化醫療系統，加強婦幼關懷
                                        <br>4.推動文創產業，鼓勵青年返鄉
                                        <br>5.健全體育環境，帶動城市觀光 -->


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab4" class="tabcontent" style="display: none;">

                    <div class="cand_layout">
                        <div class="cand_pic">
                            <img class="cand_pic" src="https://www.ftvnews.com.tw/topics/nan2area/img/陳聰鑑.png" alt="">
                            <img class="partypic" src="https://www.ftvnews.com.tw/topics/nan2area/img/無黨籍.png" alt="">
                        </div>
                        <div class="cand_content">
                            <div class="cand_title">
                                <h2 class="cand_name">
                                    <i class="fa-regular fa-circle-4"></i>
                                    陳聰鑑
                                </h2>
                            </div>
                            <ul class="nav" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-home-tab3" data-bs-toggle="pill"
                                        data-bs-target="#pills-home3" type="button" role="tab" aria-controls="pills-home3"
                                        aria-selected="true">學歷</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab3" data-bs-toggle="pill"
                                        data-bs-target="#pills-profile3" type="button" role="tab"
                                        aria-controls="pills-profile3" aria-selected="false">經歷</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-contact-tab3" data-bs-toggle="pill"
                                        data-bs-target="#pills-contact3" type="button" role="tab"
                                        aria-controls="pills-contact3" aria-selected="false">政見</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent3">
                                <div class="tab-pane fade show active" id="pills-home3" role="tabpanel"
                                    aria-labelledby="pills-home-tab3">
                                    <ul>
                                        <li>南開科技大學附設專科進修學校二年制資訊管理科畢業</li>
                                    </ul>
                                </div>
                                <div class="tab-pane content fade" id="pills-profile3" role="tabpanel"
                                    aria-labelledby="pills-profile-tab3">
                                    <ul>
                                        <li>名間鄉第16屆鄉長</li>
                                    </ul>
                                </div>
                                <div class="tab-pane content fade" id="pills-contact3" role="tabpanel"
                                    aria-labelledby="pills-contact-tab3">
                                    <div class="ccc">
                                        <ul>
                                            <li>成立警察後援基金會，處理司法案件與賠償。</li>
                                            <li>增加消防人員，整合消防制度。</li>
                                            <li>肥料補助規範更新，便民為原則。</li>
                                            <li>爭取中央補助營養午餐。</li>
                                            <li>推動死刑執行。</li>
                                            <li>爭取開放巴拉刈（農藥）。</li>
                                            <li>農地簡易道路相關法規更新，配套便於民。</li>
                                            <li>爭取修法襲胸嚴格判刑。</li>

                                        </ul>
                                        <a href="https://bulletin.cec.gov.tw/01%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1/02%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1/109%E5%B9%B4%E7%AC%AC10%E5%B1%86/06%E8%A3%9C%E9%81%B8/%E5%8D%97%E6%8A%95%E7%B8%A3%E7%AC%AC%E4%BA%8C%E9%81%B8%E8%88%89%E5%8D%80%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1.pdf"
                                            target="_blank"><i class="fad fa-lg fa-file-download"></i>&nbsp;完整政見看這裡</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cand_right">
                <p class="cand_right_title">
                    <i class="fa-light fa-message-dots" style="margin:.5rem .5rem 0 0rem"></i>
                    南投立委補選新聞
                </p>
                <div v-for="(item, index) in news" :key="index">
                    <a class="cand_news" :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID" target="_blank">
                        <img :src="item.Image" class="cand_news_img" alt="新聞照片">
                        <div class="cand_news_inner">
                            <p class="cand_news_title"> {{ item.Title }}</p>
                            <p class="cand_news_time"> {{ item.CreateDate }}</p>
                        </div>
                    </a>
                </div>
                <a class="more_button" href="https://www.ftvnews.com.tw/tag/南投立委補選" target="_blank">點我看更多</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            news: [],
        }
    },
    methods: {
        get_news() {
            // eslint-disable-next-line no-undef
            this.axios
                .get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=南投立委補選&Page=1&sp=4")
                .then((response) => {
                    console.log('ssss', response)
                    let data = response.data.ITEM
                    data.forEach((item) => { this.news.push(item) })
                })
                .catch((error) => {
                    console.log("error" + error);
                });

        },
    },
    mounted() {
        this.get_news();
    }
}
</script>
<style scoped>
ul {
    text-align: s;
}

.ccc {
    overflow-y: scroll;
    height: 218px;
    padding: 1rem 1rem;
}

@media screen and (max-width: 1200px) {
    .ccc {
        overflow-y: scroll;
        height: 143px;
        padding: 1rem 1rem;
    }
}

@media screen and (max-width: 900px) {
    .ccc {
        overflow-y: fit-content;
        height: 100%;
        padding: 1rem 1rem;
    }
}


@media screen and (max-width: 500px) {
    .ccc {
        overflow-y: fit-content;
        height: 100%;
        padding: 1rem 1rem;
    }
}

li {
    text-align: start;
}

.cand_section {
    max-width: 1400px;
    margin: auto;
    display: grid;
    grid-template-columns: 4fr 3fr;
}


@media screen and (max-width: 1000px) {
    .cand_section {
        grid-template-columns: 2fr 2fr;
    }


}

@media screen and (max-width: 800px) {
    .cand_section {
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cand_news_time {
        display: none;
    }
}

.cand_left {
    background: rgb(255, 255, 255);
    margin: .5rem 1rem;
    border-radius: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
}

.cand_news {
    display: flex;
    background: rgb(255, 255, 255);
    margin: .5rem 1rem;
    border-radius: 10px;
    height: 100px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
}

/* 
@media screen and (max-width:768px) {
    .cand_left {
        margin: 0 1.5rem;
    }
} */


.cand_news_title {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

@media screen and (max-width: 500px) {

    .cand_left {
        width: 350px
    }

    .cand_news_time {
        display: none;
    }

    .cand_title {
        margin-top: 1rem;
    }

    .cand_news {
        width: 350px;
    }

    .cand_news_title {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
}

.cand_news:hover {
    transition: .5s all;
    opacity: .8;
}

.cand_news_img {
    width: 128px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px 0px 0px 10px;
}

.cand_news_inner {
    padding: .7rem;
    text-align: left;
    width: 100%;

}

.cand_news_time {
    font-size: .8rem;
    text-align: right;
}

.cand_news_title {}

.cand_right_title {
    display: flex;
    margin: .5rem 1rem;
    font-size: 1.2rem;
    justify-content: start;
    color: #ff8400;
    letter-spacing: .2rem;
    text-shadow: #ff8400(103, 103, 103, 0.5) 0px 2px 5px;
}

.fa-message-dots {
    color: #ff8400;
}

/* 左邊 */
.cand_btn {
    background: #F4F4F4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 100px;
    border: 0px;
    margin: 2rem .4rem;
}

.cand_btn:hover {
    background: #ff8400;
    color: white
}


.cand {
    justify-content: center;
    display: flex;
    gap: .5rem;
}

.cand p {
    padding: .5rem 1rem;
    margin: 0;
}

.cand p:hover {
    transition: all .2s;
    color: white
}

.cand p:active {
    transition: all .2s;
    color: white
}

@media screen and (max-width: 900px) {
    .cand_right {
        margin: 1rem;
    }

    .cand_btn {
        background: #F4F4F4;
        /* 15 blur */
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 100px;
        border: 0px;
        display: flex;
        justify-content: space-around;
        margin: 1rem .2rem;

    }
}

@media screen and (max-width: 768px) {
    .cand {
        margin: 0.5rem;
    }

    .cand p {
        padding: 0.3rem 1rem;
        margin: 0rem;
    }

    .cand_btn {
        background: #F4F4F4;
        /* 15 blur */
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 100px;
        border: 0px;
        display: flex;
        justify-content: space-around;
        margin: .5rem auto;
    }
}

@media screen and (max-width: 500px) {

    .cand {
        justify-content: start;
        display: flex;
        overflow-x: scroll;
    }

    .cand p {
        padding: 0.3rem .9rem;
        margin: 0rem;
    }







}


.cand_layout {
    display: flex;
    grid-template-columns: 1fr 2fr;
    margin: 1rem auto;
    flex-wrap: wrap;
    width: fit-content;
    justify-content: center;
}







.partypic {
    display: block;
    position: relative;
    top: -5rem;
    border-radius: 100px;
    left: 8rem;
    width: 60px;
    margin: 1rem;


}

.cand_content {
    margin: 2rem;
    width: 350px;
    height: 200px;
}



@media screen and (max-width: 768px) {


    .cand_content {
        margin: 0rem;
        width: 380px;
        height: fit-content;
    }



}

@media screen and (max-width: 900px) {

    .cand_layout {
        display: flex;
        flex-wrap: wrap;
        grid-template-columns: 1fr 2fr;
        margin: auto;
        width: fit-content;
        padding: 0.5rem;
        margin: 1rem;
    }

    .partypic {
        display: block;
        position: relative;
        top: -3.5rem;
        border-radius: 100px;
        left: 6.5rem;
        width: 50px;
    }

}


.cand_pic {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 100px;
    margin: auto;
}


@media screen and (max-width: 900px) {

    .cand_pic {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 100px;
        margin: auto;
    }
}

@media screen and (max-width: 500px) {

    .cand_pic {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 100px;
        margin: auto;
    }

    .cand_layout {
        width: 341px;
        display: flex;
        justify-content: center;
        margin: auto;
    }

    .partypic {
        display: block;
        position: relative;
        top: -4.5rem;
        border-radius: 100px;
        left: 6rem;
        width: 50px;
    }

}

.nav-link {
    display: flex !important;
    justify-content: center
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

.tab-content {
    font-size: 16px;
    display: flex;
    justify-content: center;
}
</style>
