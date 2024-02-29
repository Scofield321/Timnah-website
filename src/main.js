import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import HomePage from './components/HomePage.vue'
import ContactUs from './components/ContactUs.vue'
import FeesStructure from './components/FeesStructure.vue'
import EarlyYears from './components/EarlyYears.vue'
import PrimarySchool from './components/PrimarySchool.vue'
import SchoolsPrincipal from './components/SchoolsPrincipal.vue'
import MissionVision from './components/MissionVision.vue'
import SchoolPolicies from './components/SchoolPolicies.vue'
import BecomingStudent from './components/BecomingStudent.vue'
import RequestInfo from './components/RequestInfo.vue'
import LibraryFacility from './components/facilities/LibraryFacility.vue'
import IctFacility from './components/facilities/IctFacility.vue'
import HealthyFacility from './components/facilities/HealthyFacility.vue'
import DormitoryFacility from './components/facilities/DormitoryFacility.vue'
import DramaFacility from './components/facilities/DramaFacility.vue'
import CafeteriaFacility from './components/facilities/CafeteriaFacility.vue'
import SportsFacility from './components/facilities/SportsFacility.vue'


const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/', component: HomePage },
  { path: '/contact', component: ContactUs },
  { path: '/fees-structure', component: FeesStructure },
  { path: '/early-years', component: EarlyYears },
  { path: '/primary-school', component: PrimarySchool },
  { path: '/message-from-the-school-principal', component: SchoolsPrincipal },
  { path: '/mission-vision', component: MissionVision },
  { path: '/school-policies', component: SchoolPolicies },
  { path: '/how-to-be-our-student', component: BecomingStudent },
  { path: '/request-info', component: RequestInfo },
  { path: '/library', component: LibraryFacility },
  { path: '/ict', component: IctFacility },
  { path: '/healthy', component: HealthyFacility },
  { path: '/drama', component: DramaFacility },
  { path: '/dormitory', component: DormitoryFacility },
  { path: '/cafeteria', component: CafeteriaFacility },
  { path: '/sports', component: SportsFacility },
]
})
app.use(ElementPlus);
app.use(router)
app.mount('#app')
