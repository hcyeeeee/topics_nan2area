<template>
  <div>
    <div class="section" v-if="citys !== null" id="open">
      <p class="hot_title">開票結果</p>
      <transition-group name="big" tag="div" class="layout_up">
        <!-- eslint-disable-next-line -->
        <div class="layout_card_height " v-for="(item, index) in citys[selected].tickets" :key="item.candName"
          v-bind:style="{ opacity: item.show }">
          <div>
            <div class="layout_card">
              <h4 class="no">{{ item.candNo }}</h4>
              <div class="profile">
                <img class="person_img" :src="require('@/assets/' + item.candName + '.png')" alt="party" />
                <img class="party_img mobile" :src="require('@/assets/' + item.party + '.jpg')" alt="party" />
                <img class="party_img desktop" :src="require('@/assets/' + item.party + '.jpg')" alt="party" />
              </div>
              <div class="canname">
                <div class="Name">{{ item.candName }}</div>
                <div class="party_up  mobile">{{ item.partym }}</div>
                <div class="party_up  desktop">{{ item.party }}</div>
              </div>
              <div class="ticketZone">
                <div class="ticket_up">{{ item.ticket.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '萬') }}票<img class="win"
                    v-if="index == 0" src="../assets/elected.png" alt=""></div>
                <progress class="progressclass" max="120000" :value="item.ticket" />
              </div>
            </div>
            <hr v-if="index < 3">
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script >
export default {
  data: function () {
    const progress = {
      B16: { citizen: 198412, forecast: 90000 },
    };
    return {
      title: "開票結果",
      taipei: [],
      citys: null,
      selected: "B16",
      counter: null,
      show: true, //全體顯示/隐藏控制
      first: true,
      progress,
      nn: [],
    };
  },
  methods: {
    getData_vote() {
      // eslint-disable-next-line no-undef
      this.axios
        .get("https://www.ftvnews.com.tw/topics/nan2area/test.json")
        // .get("./election.json")
        .then((response) => {
          this.preOrderData(response.data);
        })
        .catch((error) => {
          console.log("error" + error);
        });
    },
    preOrderData(data) {
      let t1 = data.T1.detail;  //取得縣市長候選人的資料
      let citys = {}; //宣告一個空的物件,用來存放處理過的候選人資料

      t1.forEach(function (city) {
        if (city !== null) {
          //將縣市候選人陣列進行排序，依票數來排序
          city.tickets.sort(function (a, b) {
            return b.ticket - a.ticket;
          });
          //在每位候選人資料中加上show這個屬性，用來控制候選人資料的透明度
          city.tickets.map((cand) => {
            cand["show"] = 0; //預設為全不顯示
            cand['lastTicket'] = cand.ticket  //建立lastTicket變數預設為當前票數
            return cand;
          });
          citys[city.cityNo] = city;
        }
      });

      //將上一次更新的票數記入候選人的票數,才能比對票數變化
      if (this.citys !== null) {

        //把現在頁面中使用的citys物件中的key抓出來成為一個陣列進行迴圈
        Object.keys(this.citys).forEach((code) => {

          //把新抓進來的資料citys依照迴圈輪到的code進行每個候選人資料重新整理
          citys[code].tickets.map((cand) => {
            //利用find函式在this.citys中找到對應的候選人資料
            let user = this.citys[code].tickets.find((u) => {
              return u.candNo == cand.candNo
            })
            //把舊的票數指定到新的資料中
            return cand['lastTicket'] = user.ticket
          })
        })
      }
      if (this.first) {
        this.citys = citys; //重新把資料指定回citys後，DOM會同步更新資料
        this.slideShow(this.selected);  //this.citys更新後開始進行淡入的動作
        this.first = false  //把第一次執行的變數設為false,表示所有的候選人都顯示完成了
      } else {
        citys[this.selected].tickets.map(cand => cand.show = 1)
        this.citys = citys
      }
      this.$nextTick(this.ticketsAnimation())
    },
    changeCity() {
      document.querySelectorAll(".layout_card_height,.layout_down").forEach((dom) => {
        dom.style.display = 'none'
      })
    },
    slideShow(cityCode) {
      let total = this.citys[cityCode].tickets.length - 1; //取得要處理的縣市候選人index最大值
      let now = 0; //從0開始
      let slider = setInterval(() => {  //宣告一個每300毫秒執行一次的計時器
        this.citys[cityCode].tickets[now].show = 1;  //依序把候選人的DOM透明度設為1
        if (now < total) {
          now++; //增加索引值來執行下一個候選人
        } else {
          clearInterval(slider); //如果索引值到最大值了，就清掉計時器，停止淡入的動作
        }
      }, 300);
    },
    ticketsAnimation() {
      //針對目前顯示的縣市候選人以迴圈的方式逐檢查票數的狀況,再決定是否要進行數字跳動
      this.citys[this.selected].tickets.forEach((cand) => {
        if (cand.ticket > cand.lastTicket) {
          let tmp = cand.ticket
          cand.ticket = cand.lastTicket
          cand.lastTicket = tmp
          let ticketGap = Math.floor((cand.lastTicket - cand.ticket) / 300)  //計算每五毫秒要加多少票
          ticketGap = ticketGap < 1 ? 1 : ticketGap;  //如果差距票數少於300票,則以1票來計算
          let numberJump = setInterval(() => {  //宣告一個計時器，每8毫秒跑一次
            if (cand.ticket >= cand.lastTicket) {
              cand.ticket = cand.lastTicket; //票數調整為最新更新的票數
              clearInterval(numberJump); //清除計時器
            } else {
              cand.ticket += ticketGap;
            }
          }, 8)
        } else {

          //如果是新票數小於等於舊票數的特殊情形..則把舊票數的值更新成新票數的值
          cand.ticket == cand.lastTicket
        }
      })
    },
  },
  watch: {
    //監控選單變數selected,改變表示縣市要做切換
    selected: function (newSelected, oldSelected) {

      //地區變更時先檢查citys有無值，因為第一次抓資料是在畫面產生的大約1秒後,
      //此時this.citys是null的狀況,會造成錯誤，所以要先判斷this.citys是否有值再做後面的動作
      if (this.citys !== null) {
        this.changeCity();
        //在切換縣市時要先將目前縣市候選人show設為0，這樣稍後如果再跳回這個縣市時，才會重新觸發淡入的動畫。
        this.citys[oldSelected].tickets.map(cand => cand.show = 0)

        //先清除原本的定時抓取資料計時器，以免兩個動作重疊
        clearInterval(this.counter)

        //先讓上面的動作有點時間完成,所以使用this.$nextTick(),讓vue稍等16毫秒再進行下一個動作
        this.$nextTick(() => {
          this.slideShow(newSelected)  //執行新選的縣市候選人淡入動畫

          //淡入進行時再重新開始計時
          this.counter = setInterval(() => {
            this.getData_vote();
          }, 800);
        })

      }
    },
  },
  mounted() {
    this.getData_vote();
    this.counter = setInterval(() => {
      this.getData_vote();
    }, 1000);
  }
};
</script>


<style scoped>
.hot_title {
  position: absolute;
  z-index: 99999;
  top: -61px;
  left: 16px;
  font-size: 1.2rem;
}

.section {
  margin-top: 6rem;
}

@media screen and (max-width: 768px) {
  .hot_title {
    position: absolute;
    z-index: 99999;
    top: -61px;
    left: 16px;
    font-size: 1.2rem;

  }
}

@media screen and (max-width: 500px) {
  .hot_title {
    position: relative;
    z-index: 99999;
    top: 16px;
    left: 27px;
    font-size: 1.2rem;
  }

  .no {
    position: relative;
    left: .8rem;
  }

  .profile {
    position: relative;
    left: 1rem;
  }

  .canname {
    position: relative;
    left: .5rem;
  }
}

@media screen and (max-width: 400px) {
  .hot_title {
    position: relative;
    z-index: 99999;
    top: 16px;
    left: 19px;
    font-size: 1rem;

  }
}

.layout_up {
  margin: auto;
  background: #fff;
  border-radius: 0px 8px 8px 8px;
  margin: 1rem;
  padding: 2rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
}

@media screen and (max-width: 900px) {
  .layout_up {
    padding: 0rem;

  }
}


@media screen and (max-width: 500px) {
  .layout_up {
    padding: 0rem;
    margin: 0rem 1.7rem;
  }
}

@media screen and (max-width: 400px) {
  .layout_up {
    width: 352px;
    padding: 0rem;
    margin: 0rem auto;
  }
}


.section {
  margin: 6rem auto 3rem;
  max-width: 1400px;
  position: relative;

}

.voting {
  max-width: 100vw;
  /* top line */
  filter: drop-shadow(0px -2px 0px rgba(0, 0, 0, 0.15));
  padding-top: 1rem;
}

.layout_card {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 4fr;
  background: white;
}

/* 字行 */
h4 {
  font-size: 2.2rem;
  margin: auto 0;
}

h2 {
  font-size: 25.6px;
}

p {
  font-size: 1.5rem;
  text-align: center;
  margin: 1rem 0;
}

h5 {
  font-size: 1.5rem;
  font-weight: bolder;
  margin: 1rem 0rem;

}


.layout_card_height {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem;

}




/**
* vue 轉場效果CSS 
*/
.big-enter,
.big-leave-to,
.small-enter,
.small-leave-to {
  opacity: 0;
}

.big-enter-active,
.big-leave-active,
.small-enter-active,
.small-leave-active {
  transition: opacity 0.3s;
}

/**
* Vue的轉場元件使用的移動畫動晝設定
* 當資料中的排序位置有變化時,會自動位移DOM
*/
.big-move,
.small-move {
  transition: all 1s;
}




/*候選人 */

.No {
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Name {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  line-height: 54px;
  font-size: 2.2rem;
}

.content {
  text-align: left;
  white-space: nowrap;
  width: 200px;
}

.person_img {
  border-radius: 100px;
  width: 130px;
  height: 130px;
  object-fit: cover;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.party_img {
  border-radius: 100px;
  width: 50px;
  height: 50px;
  position: relative;
  right: 2rem;
  top: 5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.party_up {
  font-size: 20px;
  line-height: 27px;
  margin: auto;
  justify-content: center;
  display: flex;
}

.ticket_up {
  font-size: 36px;
  text-align: left;
  padding: 0 4rem;
}

/*候選人end */

/* 進度條 */
.progressclass {
  overflow: hidden;
  -moz-appearance: none;
  appearance: none;
  border-radius: 1rem;
  -webkit-appearance: none;
  height: 1rem;
  width: 80%;
  /* justify-content: center; */
  /* align-items: center; */
  margin: auto;
}

progress {
  position: relative;
}

.progressclass::-webkit-progress-value {
  background: linear-gradient(90deg, rgb(248, 219, 176) 0%, rgb(248, 177, 34) 100%);
  background: linear-gradient(90deg, #FFCA91 -2.15%, #E47600 16.28%);
  border-radius: 8px;
}

.progressclass::-webkit-progress-bar {
  background-color: #d7d7d7;
}

.content {
  width: 100px;
  height: 140px;
  margin: auto;
}

.canname {
  margin: auto;
}

.ticketZone {
  margin-top: 2rem;
  margin: auto 0rem;
}

.desktop {
  display: flex;
}

.mobile {
  display: none;
}

.profile {
  display: flex;

}

@media screen and (max-width: 900px) {

  .profile {
    margin-left: 0rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .layout_card_height {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 32px;
    height: auto;
    margin: 0rem;
  }

  .person_img {
    display: flex;
    justify-content: center;
    position: relative;
    top: 0rem;
  }

  .desktop {

    display: none;
  }

  .mobile {
    display: flex;
  }

  .layout_card {
    display: grid;
    margin: 1rem 0rem;
    gap: 0rem;
    grid-template-columns: 1fr 1fr 1fr 3fr;
  }

  .content {
    display: none;
  }



  .person_img {
    border-radius: 100px;
    width: 100px;
    height: 100px;
    object-fit: cover;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  .party_img {
    border-radius: 100px;
    width: 40px;
    height: 40px;
    position: relative;
    right: 2rem;
    top: 1.5rem;
    object-fit: cover;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  h4 {
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
  }

  h5 {
    font-size: 1.5rem;
    font-weight: bolder;
    margin: 1rem 0rem
  }


  .canname {
    display: flex;
    flex-direction: column;
  }

  .progressclass {
    width: 90%;
    bottom: 0rem;
    right: 0rem;
    height: 1rem;
    margin: 1rem;
  }

  .Name {
    font-size: 1.5rem;
    margin: 0rem
  }

  .party_up {
    margin: 0rem
  }

  .ticket_up {
    font-size: 1.6rem;
    padding: 0rem 1rem;

  }

  .ticketZone {
    margin-top: 1rem;
  }
}


@media screen and (max-width: 768px) {

  .section {
    margin-top: 5rem auto;


  }

  .progressclass {
    width: 70%;
    bottom: 0rem;
    right: 0rem;
    height: 1rem;
    margin: 1rem;
  }

  .ticket_up {
    font-size: 1.4rem;
    padding: 0rem 3rem;
  }

  h4 {
    font-size: 1.4rem
  }

  .party_up {
    font-size: 1rem;
    white-space: nowrap
  }

  .ticketZone {
    margin-top: 2rem;
  }


  .section {

    margin: 4rem auto 2rem;
  }

  h2 {
    font-size: 22.4px;
  }

  .Name {
    font-weight: bold;
    font-size: 1.4rem
  }


}

@media screen and (max-width: 500px) {

  .section {
    margin-top: 0rem;
  }

  .Name {
    font-weight: bold;
    font-size: 1.3rem;
  }

  .ticketZone {
    margin-top: 1rem;

  }

  .layout_card {
    display: grid;
    margin: 1rem auto;
    gap: 0rem;
    grid-template-columns: 1fr 1fr 1fr 3fr;
  }

  .layout_card {
    margin: 0rem;
    margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  }

  .party_up {
    font-size: .9rem;
    letter-spacing: -1px;
    width: 70px;
    padding: 0px 2px;
    white-space: normal;
    position: relative;
    bottom: .5rem;
    line-height: 20px;
    color: rgb(0, 0, 0, .7);
  }

  .progressclass {
    width: 70%;
    bottom: 0rem;
    right: 0rem;
    height: .8rem;
    margin: 1rem;
  }

  h4 {
    font-size: 1.2rem;
    white-space: nowrap;
    font-weight: bold;
  }

  .ticket_up {
    font-size: 1.3rem;
    padding: 0rem 2rem;
    white-space: nowrap;
    position: relative;
    top: 10px
  }

  .person_img {
    border-radius: 100px;
    width: 75px;
    height: 75px;
    -o-object-fit: cover;
    object-fit: cover;
    margin: auto;
    box-shadow: rgb(50 50 93 / 25%) 0px 6px 12px -2px, rgb(0 0 0 / 30%) 0px 3px 7px -3px;
  }

  .party_img {
    border-radius: 100px;
    width: 30px;
    height: 30px;
    position: relative;
    right: 1.5rem;
    top: 1.5rem;
    object-fit: cover;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  h4 {
    position: relative;
    left: rem;
  }

  .voting {
    padding-top: 0rem;
  }

  .profile {
    margin-left: 0rem;
    position: relative;
    left: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.win {
  width: 80px;
  position: relative;
  right: -4rem;
  top: -.3rem;
  z-index: 99;

}

@media screen and (max-width: 900px) {
  .win {
    width: 70px;
    position: relative;
    right: -3rem;
    top: -.2rem;
  }
}

@media screen and (max-width: 800px) {
  .win {
    width: 70px;
    position: absolute;
    right: 3rem;
    top: 2rem;
  }
}


@media screen and (max-width: 768px) {
  .win {
    width: 65px;
    position: absolute;
    right: 3rem;
    top: 3rem;
  }
}

@media screen and (max-width: 700px) {
  .win {
    width: 55px;
    position: absolute;
    right: 3rem;
    top: 3rem;
  }
}

@media screen and (max-width: 550px) {
  .win {
    width: 55px;
    position: absolute;
    right: 1.5rem;
    transform: rotate(5deg);
    top: 1.5rem;
  }
}


hr {
  height: 3px;
  color: #ffca91;
  opacity: 1;
  position: relative;
  top: 1rem;
}


@media screen and (max-width: 550px) {
  hr {
    height: 2px;
    color: #ffca91;
    opacity: 1;
    position: relative;
    /* margin-top: 1rem; */
    top: 0rem;
    margin: 0rem 1.5rem;
  }
}
</style>


