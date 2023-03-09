<template>
    <div class="share" id="Share">
        <!-- ＦＢ share -->
        <div class="facebook">
            <a title="Share on Facebook" target="_blank"
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2Fnan2area%2Findex.html&amp;src=sdkpreparse">
                <img src="https://www.ftvnews.com.tw/topics/nan2area/img/facebook.png" alt="分享民視新聞專題" />
            </a>
        </div>
        <!-- line share -->
        <a href="https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/nan2area"
            target="_blank">
            <img src="https://www.ftvnews.com.tw/topics/nan2area/img/line.png" alt="lineshare" />
        </a>
        <!-- 一鍵複製 -->
        <div class="localurl-style" id="social_link" @click="getLocalUrl">
            <img src="https://www.ftvnews.com.tw/topics/nan2area/img/share.png" alt="lineshare" />
            <!-- <span>複製網址</span> -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scrollY: '',
        }
    },
    methods: {
        getLocalUrl() {
            let e = document.createElement('input'),
                t = window.location.href + '?utm_source=euwar&utm_medium=copybutton'
            document.body.appendChild(e),
                (e.value = t),
                e.select(),
                document.execCommand('copy'),
                document.body.removeChild(e),
                alert('網址複製成功，立刻分享給你的好友吧!')
        },

        scrollTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        },

        scroll() {
            this.scrollY = window.scrollY
        },
    },
    created() {
        window.addEventListener('scroll', this.scroll)
    },
}
</script>