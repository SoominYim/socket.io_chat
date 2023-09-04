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
                            },
                            {
                                name: "sign-up-",
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

const router = new VueRouter({
    routes,
});

export default router;
