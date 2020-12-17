import HelloWorld from './components/HelloWorld';

export default [
    {
        path: '/',
        name:'principal',
        component: HelloWorld,
        meta: { requiresAuth: false},
    },

]