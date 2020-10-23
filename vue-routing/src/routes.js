import Home from './components/Home.vue';
import Users from './components/Users.vue';
import User from './components/User.vue';
import UserList from './components/UserList.vue';
import Header from './components/Header.vue';

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
                name: "Kullanıcı"
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