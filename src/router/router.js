// router/config.js
import XOGame from '@/pages/XOGame/XOGame';
import Counter from '@/pages/Counter/Counter';
import TSCounter from '@/pages/TSCounter/Counter';
import RanderNum from '@/pages/RanderNum/RanderNum';
import EChart from '@/pages/EChart/EChart';
import RouterParamTest from '@/pages/RouterParamTest/RouterParamTest';
import LayoutComponent from '@/components/Layout/layout';

const routerList = {
  RouterParamTest: {
    name: '路由传参测试',
    path: '/RouterParamTest',
    auth: 'normal',
    component: RouterParamTest,
    backUrl: '/Login',
  },
  Echarts: {
    name: 'Echarts',
    path: '/EChart',
    auth: 'normal',
    backUrl: '/Login',
    component: EChart,
  },
  Randernum: {
    name: '随机数',
    path: '/Randernum',
    auth: 'admin',
    component: RanderNum,
    backUrl: '/RouterParamTest',
  },
  XOGame: {
    name: 'XO游戏',
    path: '/XOGame',
    auth: 'admin',
    component: XOGame,
    backUrl: '/RouterParamTest',
  },
  Counter: {
    name: '计数器',
    path: '/Counter',
    auth: 'admin',
    component: Counter,
    backUrl: '/RouterParamTest',
  },
  TSCounter: {
    name: '计数器',
    path: '/TSCounter',
    auth: 'admin',
    component: TSCounter,
    backUrl: '/RouterParamTest',
  },
};

export const normalUserRouter = [routerList.RouterParamTest, routerList.Echarts];
export const adminRouter = [
  routerList.Counter,
  routerList.XOGame,
  routerList.Randernum,
  routerList.Echarts,
  routerList.TSCounter,
];
export const homeRouter = {
  name: '主页',
  path: '/',
  auth: 'normal',
  component: LayoutComponent,
  backUrl: '/Login',
};
