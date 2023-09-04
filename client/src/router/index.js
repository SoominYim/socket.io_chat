import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        // 도메인으로 접속시 리다이렉트 설정
        path: "/",
        redirect: "/view/user/etc/splash-view",
    },
    {
        name: "user",
        path: "user",
        component: () => import("@/layouts/user/Index.vue"),
        children: [
            {
                name: "acc",
                path: "acc",
                component: () => import("@/layout/user/acc/Index.vue"),
                children: [
                    {
                        name: "sign-in",
                        path: "sign-in",
                        component: () => import("@/views/user/acc/sign-up/SignUpSelect.vue"),
                        children: [
                            {
                                name: "sign-up-select",
                                path: "sign-up-select",
                                component: () => import("@/views/user/acc/sign-up/SignUpSelect.vue"),
                            },
                            {
                                name: "sign-up-policy-agree",
                                path: "sign-up-policy-agree",
                                component: () => import("@/views/user/acc/sign-up/SignUpPolicyAgree.vue"),
                                props: true,
                            },
                            {
                                name: "sign-up-id-pw",
                                path: "sign-up-id-pw",
                                component: () => import("@/views/user/acc/sign-up/SignUpIdPw.vue"),
                                props: true,
                            },
                            {
                                name: "sign-up-business-image",
                                path: "sign-up-business-image",
                                component: () => import("@/views/user/acc/sign-up/SignUpBusinessImage.vue"),
                                props: true,
                            },
                            {
                                name: "sign-up-cs-confirm",
                                path: "sign-up-cs-confirm",
                                component: () => import("@/views/user/acc/sign-up/SignUpCsConfirm.vue"),
                                props: true,
                            },
                            {
                                name: "sign-up-last-step",
                                path: "sign-up-last-step",
                                component: () => import("@/views/user/acc/sign-up/SignUpLastStep.vue"),
                                props: true,
                            },
                        ],
                    },
                    {
                        name: "find-id-pw",
                        path: "find-id-pw",
                        component: () => import("@/layouts/user/acc/find-id-pw/Index.vue"),
                        children: [
                            {
                                name: "find-id",
                                path: "find-id",
                                component: () => import("@/layouts/user/acc/find-id-pw/FindId.vue"),
                            },
                            {
                                name: "find-pw",
                                path: "find-pw",
                                component: () => import("@/layouts/user/acc/find-id-pw/FindPw.vue"),
                            },
                            {
                                name: "setting-pw",
                                path: "setting-pw",
                                component: () => import("@/layouts/user/acc/find-id-pw/SettingPw.vue"),
                            },
                        ],
                    },
                ],
            },
            {
                name: "etc",
                path: "etc",
                component: () => import("@/layouts/user/etc/Index.vue"),
                children: [
                    {
                        name: "info-page",
                        path: "info-page",
                        component: () => import("@/views/user/etc/InfoPage.vue"),
                    },
                    {
                        name: "neuru-info",
                        path: "neuru-info",
                        component: () => import("@/views/user/etc/NeuruInfo.vue"),
                    },
                    {
                        name: "question",
                        path: "question",
                        component: () => import("@/views/user/etc/Question.vue"),
                    },
                    {
                        name: "question-content",
                        path: "question-content",
                        component: () => import("@/views/user/etc/QuestionContent.vue"),
                    },
                    {
                        name: "service-user-guide",
                        path: "service-user-guide",
                        component: () => import("@/views/user/etc/ServiceUserGuide.vue"),
                    },
                    {
                        name: "chatting",
                        path: "chatting",
                        component: () => import("@/views/user/etc/chatting/Index.vue"),
                        children: [
                            {
                                name: "chatting-list",
                                path: "chatting-list",
                                component: () => import("@/views/user/etc/chatting/ChattingList.vue"),
                            },
                            {
                                name: "chatting-detail",
                                path: ":id",
                                component: () => import("@/views/user/etc/chatting/ChattingDetail.vue"),
                            },
                        ],
                    },
                    {
                        name: "terms",
                        path: "terms",
                        component: () => import("@/views/user/etc/terms/Index.vue"),
                        children: [
                            {
                                name: "location-information",
                                path: "location-information",
                                component: () => import("@/views/user/etc/terms/DetailLocation.vue"),
                            },
                        ],
                    },
                    {
                        name: "privacy-policy",
                        path: "privacy-policy",
                        component: () => import("@/views/user/etc/terms/PrivacyPolicy.vue"),
                        children: [
                            {
                                name: "detail-privacy-policy",
                                path: "detail-privacy-policy",
                                component: () => import("@/views/user/etc/terms/DetailPrivacyPolicy.vue"),
                            },
                        ],
                    },
                    {
                        name: "terms-of-use",
                        path: "terms-of-use",
                        component: () => import("@/views/user/etc/terms/TermsOfUse.vue"),
                        children: [
                            {
                                name: "detail-terms-of-use",
                                path: "detail-terms-of-use",
                                component: () => import("@/views/user/etc/terms/DetailTermsOfUse.vue"),
                            },
                        ],
                    },
                ],
            },
            {
                name: "use-guide",
                path: "use-guide",
                component: () => import("@/views/user/etc/useGuide/Index.vue"),
                children: [
                    {
                        name: "all-user-user-guide",
                        path: "all-user-user-guide",
                        component: () => import("@/views/user/etc/useGuide/allUserUseGuide.vue"),
                    },
                    {
                        name: "emitter-use-guide",
                        path: "emitter-use-guide",
                        component: () => import("@/views/user/etc/useGuide/emitterUseGuide.vue"),
                    },
                    {
                        name: "collector-use-guide",
                        path: "collector-use-guide",
                        component: () => import("@/views/user/etc/useGuide/collectorUseGuide.vue"),
                    },
                ],
            },
            {
                name: "notice-list",
                path: "notice-list",
                component: "@/views/user/etc/NoticeList.vue",
            },
            {
                name: "splash-view",
                path: "splash-view",
                component: "@/views/user/etc/SplashView.vue",
            },
        ],
    },
    {
        name: "service",
        path: "service",
        component: () => import("@/layouts/user/service/Index.vue"),
        children: [
            {
                name: "history",
                path: "history",
                component: () => import("@/layouts/user/service/history/Index.vue"),
                children: [
                    {
                        name: "history-list",
                        path: "history-list",
                        component: () => import("@/layouts/user/service/history/history-list/Index.vue"),
                        children: [
                            {
                                name: "emitter-current-bid-list",
                                path: "emitter-current-bid-list",
                                component: () => import("@/layouts/user/service/history/history-list/EmitterCurrentBidList.vue"),
                                props: true,
                            },
                            {
                                name: "emitter-past-bid-list",
                                path: "emitter-past-bid-list",
                                component: () => import("@/layouts/user/service/history/history-list/EmitterPastBidList.vue"),
                                props: true,
                            },
                            {
                                name: "collector-current-bid-list",
                                path: "collector-current-bid-list",
                                component: () => import("@/layouts/user/service/history/history-list/CollectorCurrentBidList.vue"),
                                props: true,
                            },
                            {
                                name: "collector-past-bid-list",
                                path: "collector-past-bid-list",
                                component: () => import("@/layouts/user/service/history/history-list/CollectorPastBidList.vue"),
                            },
                        ],
                    },
                    {
                        name: "main",
                        path: "main",
                        component: () => import("@/layouts/user/service/main/Index.vue"),
                        children: [
                            {
                                name: "emitter-select-company",
                                path: "emitter-select-company",
                                component: () => import("@/views/user/service/main/EmitterSelectCompany.vue"),
                            },
                            {
                                name: "emitter-select-company-info",
                                path: "emitter-select-company-info",
                                component: () => import("@/views/user/service/main/EmitterSelectCompanyInfo.vue"),
                            },
                            {
                                name: "emitter-main",
                                path: "emitter-main",
                                component: () => import("@/views/user/service/main/EmitterMain.vue"),
                            },
                            {
                                name: "emitter-process-doc",
                                path: "emitter-process-doc",
                                component: () => import("@/views/user/service/main/EmitterProcessDoc.vue"),
                                props: true,
                            },
                            {
                                name: "emitter-re-bid",
                                path: "emitter-re-bid",
                                component: () => import("@/views/user/service/main/EmitterReBid.vue"),
                            },
                            {
                                name: "emitter-trade-doc",
                                path: "emitter-trade-doc",
                                component: () => import("@/views/user/service/main/EmitterTradeDoc.vue"),
                                props: true,
                            },
                            {
                                name: "emitter-process-bid",
                                path: "emitter-process-bid",
                                component: () => import("@/views/user/service/main/EmitterProcessBid.vue"),
                                props: true,
                            },
                            {
                                name: "emitter-info-collector",
                                path: "emitter-info-collector",
                                component: () => import("@/views/user/service/main/EmitterInfoCollector.vue"),
                                props: true,
                            },
                            {
                                name: "emitter-trade-doc-info",
                                path: "emitter-trade-doc-info",
                                component: () => import("@/views/user/service/main/EmitterTradeDocInfo.vue"),
                            },
                            {
                                name: "emitter-bid-doc",
                                path: "emitter-bid-doc",
                                component: () => import("@/views/user/service/main/EmitterBidDoc.vue"),
                                props: true,
                            },
                            {
                                name: "emitter-review-write",
                                path: "emitter-review-write",
                                component: () => import("@/views/user/service/main/EmitterReviewWrite.vue"),
                                props: true,
                            },
                            {
                                name: "collector-main",
                                path: "collector-main",
                                component: () => import("@/views/user/service/main/CollectorMain.vue"),
                            },
                            {
                                name: "collector-state-list",
                                path: "collector-state-list",
                                component: () => import("@/views/user/service/main/CollectorStateList"),
                            },
                            {
                                name: "collector-info-emitter",
                                path: "collector-info-emitter",
                                component: () => import("@/views/user/service/main/CollectorInfoEmitter.vue"),
                            },
                            {
                                name: "collector-new-bid-info",
                                path: "collector-new-bid-info",
                                component: () => import("@/views/user/service/main/CollectorNewBidInfo.vue"),
                            },
                            {
                                name: "collector-process-bid",
                                path: "collector-process-bid",
                                component: () => import("@/views/user/service/main/CollectorProcessBid.vue"),
                                props: true,
                            },
                            {
                                name: "collector-process-doc",
                                path: "collector-process-doc",
                                component: () => import("@/views/user/service/main/CollectorProcessDoc.vue"),
                                props: true,
                            },
                            {
                                name: "collector-process-doc-info",
                                path: "collector-process-doc-info",
                                component: () => import("@/views/user/service/main/CollectorProcessDocInfo.vue"),
                            },
                            {
                                name: "collector-trade-doc-info",
                                path: "collector-trade-doc-info",
                                component: () => import("@/views/user/service/main/CollectorTradeDocInfo.vue"),
                            },
                            {
                                name: "collector-upload-license",
                                path: "collector-upload-license",
                                component: () => import("@/views/user/service/main/CollectorUploadLicense.vue"),
                            },
                        ],
                    },
                    {
                        name: "my-pages",
                        path: "my-pages",
                        component: () => import("@/layouts/user/service/my-pages/Index.vue"),
                        children: [
                            {
                                name: "my-page",
                                path: "my-page",
                                component: () => import("@/views/user/service/service/my-pages/MyPage.vue"),
                            },
                            {
                                name: "service-setting",
                                path: "service-setting",
                                component: () => import("@/views/user/service/service/my-pages/ServiceSetting.vue"),
                            },
                            {
                                name: "notice-setting",
                                path: "notice-setting",
                                component: () => import("@/views/user/service/service/my-pages/NoticeSetting.vue"),
                            },
                            {
                                name: "gongji-list",
                                path: "gongji-list",
                                component: () => import("@/views/user/service/service/my-pages/GongJiList.vue"),
                            },
                            {
                                name: "question-list",
                                path: "question-list",
                                component: () => import("@/views/user/service/service/my-pages/QuestionList.vue"),
                            },
                            {
                                name: "policy",
                                path: "policy",
                                component: () => import("@/views/user/service/service/my-pages/Policy.vue"),
                            },
                            {
                                name: "review-list",
                                path: "review-list",
                                component: () => import("@/views/user/service/service/my-pages/ReviewList.vue"),
                            },
                            {
                                name: "manager-update",
                                path: "manager-update",
                                component: () => import("@/views/user/service/service/my-pages/ManageUpdate.vue"),
                            },
                            {
                                name: "add-region",
                                path: "add-region",
                                component: () => import("@/views/user/service/service/my-pages/AddRegion.vue"),
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

// 베이스속성이 prefix입니다
const router = new VueRouter({
    // base: "/view",
    mode: "history",
    routes,
});

export default router;
