import Home from './components/Home.vue';
import Header from './components/Header.vue';

// lazy load
const Users = resolve => {
    require.ensure(['./components/Users.vue'], () => {
        resolve(require('./components/Users.vue'));
    })
};
// import Users from './components/Users.vue';
import User from './components/User.vue';
import UserList from './components/UserList.vue';

export default [
    {
        path: '',
        name: "Anasayfa",
        components: {
            default: Home,
            'header-top': Header
        } 
    },
    {
        path: '/users',
        name: "Kullanıcılar",
        components: {
            default: Users,
            'header-top': Header, // For animation
            // 'header-bottom': Header
        },
        children: [
            {
                // /users
                path: '',
                component: UserList,
                name: "Kullanıcılar"
            },
            {
                // /users/11
                path: ':id',
                component: User,
                name: "Kullanıcı",
                beforeEnter: (to, from, next) => {
                    // local control
                    // yerel kontrol
                    next();
                }
            },
        ]
    },
    {
        path: "*",
        redirect: "/", /* {name: "Anasayfa"} */
    },
    // {
    //     path: '/user/:id',
    //     component: User,
    //     name: "Kullanıcı"
    // },
];