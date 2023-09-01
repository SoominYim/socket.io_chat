<template lang="">
    <div>
        <v-app>
            <v-main>
                <Page1 id="page1Section"></Page1>
                <Page2 id="page2Section"></Page2>
                <Page3 id="page3Section"></Page3>
                <Page4 id="page4Section"></Page4>
                <Page5 id="page5Section"></Page5>
                <ScrollUpBtn v-show="scrollUpBtnToggle"></ScrollUpBtn>
            </v-main>
        </v-app>
    </div>
</template>
<script>
// import page1 from '@/components/info-page/Page1.vue'
// import page1 from '@/components/info-page/Page1.vue'
// import page1 from '@/components/info-page/Page1.vue'
// import page1 from '@/components/info-page/Page1.vue'
// import page1 from '@/components/info-page/Page1.vue'
// import ScrollUpBtn from '@/components/info-page/ScrollUpBtn.vue'
export default {
    components: {
        Page1,
        Page2,
        Page3,
        Page4,
        Page5,
        ScrollUpBtn
    },
    data: () => ({
        scrollUpBtnToggle: false,
        fullScreenData: null,
    }),
    computed: {
        getUserOs() {
            return this.$store.state.User.userOs
        }
    }
}
</script>
<style lang="">
    
</style>