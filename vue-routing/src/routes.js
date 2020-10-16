import Home from './components/Home.vue';
import Users from './components/Users.vue';

export default [
    {
        path: '',
        component: Home,
        name: "Anasayfa"
    },
    {
        path: '/users',
        component: Users,
        name: "Kullanıcılar"
    },
    {
        path: '/user/:id',
        component: Users,
        name: "Kullanıcı"
    },
];