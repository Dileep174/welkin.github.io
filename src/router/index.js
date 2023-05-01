import { createRouter, createWebHistory } from 'vue-router'
import Header from '../views/Header.vue'
import Footer from '../views/Footer.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Testimonial from '../views/Testimonial.vue'
import Projects from '../views/Projects.vue'
import Services from '../views/Services.vue'
import Nav from '../views/Nav.vue'


const routes = [
    {
        path: '/',
        name: 'header',
        component: Header
    },
    {
        path: '/footer',
        name: 'footer',
        component: Footer
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/testimonial',
        name: 'testimonial',
        component: Testimonial
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects
    },
    {
        path: '/services',
        name: 'services',
        component: Services
    },
    {
        path: '/nav',
        name: 'nav',
        component: Nav
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router