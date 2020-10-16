import Home from './components/Home.vue';
import Users from './components/Users.vue';
import User from './components/User.vue';
import UserList from './components/UserList.vue';

export default [
    {
        path: '',
        component: Home,
        name: "Anasayfa"
    },
    {
        path: '/users',
        component: Users,
        name: "Kullanıcılar",
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
    // {
    //     path: '/user/:id',
    //     component: User,
    //     name: "Kullanıcı"
    // },
];