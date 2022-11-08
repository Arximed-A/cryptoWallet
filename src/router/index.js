import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "../components/mainWindow/Dashboard.vue";
import Trade from "../components/mainWindow/Trade.vue";
import Deposits from "../components/mainWindow/Deposits.vue";
import Protocols from "../components/mainWindow/Protocols.vue";
import Settings from "../components/mainWindow/Settings.vue";
import Profile from "../components/mainWindow/Profile.vue";

const routes = [
  {
    path: "/",
    name: "DashBoard",
    component: DashBoard,
  },
  {
    path: "/dashBoard",
    name: "DashBoard-copy",
    component: DashBoard,
  },
  {
    path: "/trade",
    name: "Trade",
    component: Trade,
  },
  {
    path: "/deposits",
    name: "Deposits",
    component: Deposits,
  },
  {
    path: "/protocols",
    name: "Protocols",
    component: Protocols,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
