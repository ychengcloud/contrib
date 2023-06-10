import { mock } from 'node:test';
import { MockMethod } from 'vite-plugin-mock';
import { MenuEnum } from '../src/enums/appEnums';


const mockMenus = [
  {
    path: 'dashboard',
    name: '面板',
    locale: 'menu.dashboard',
    icon: 'el-icon-Lock',
    type: MenuEnum.MENU,
  },
  {
    path: 'project',
    name: '医院',
    icon: 'el-icon-Lock',
    locale: 'menu.project',
    type: MenuEnum.CATALOGUE,
    children: [
      {
        path: 'list',
        name: '医院',
        locale: 'menu.project.list',
        icon: 'el-icon-Lock',
        type: MenuEnum.MENU,
        params: '',
        component: 'project/list/index',
      },
      {
        path: 'department/list',
        name: '科室',
        locale: 'menu.project.department.list',
        icon: 'el-icon-Lock',
        type: MenuEnum.MENU,
        params: '',
      },
      {
        path: 'bed/list',
        name: '床位',
        locale: 'menu.project.bed/list',
        icon: 'el-icon-Lock',
        type: MenuEnum.MENU,
        params: '',
      },
    ],
  },
  {
    path: 'tenant',
    name: '渠道',
    locale: 'menu.tenant',
    icon: 'el-icon-Lock',
    type: MenuEnum.CATALOGUE,
    children: [
      {
        path: 'list',
        name: '渠道管理',
        locale: 'menu.tenant.list',
        icon: 'el-icon-Lock',
        type: MenuEnum.MENU,
        params: '',
        component: 'tenant/index',
      },
    ],
  },
  {
    path: '404',
    name: '404',
    locale: 'menu.notfound',
    icon: 'el-icon-Lock',
  }

]

const mockNoticeList = [
  {
    id: '000000001',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
    title: '你收到了 14 份新周报',
    datetime: '2017-08-09',
    type: 'notification'
  },
  {
    id: '000000002',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
    title: '你推荐的 曲妮妮 已通过第三轮面试',
    datetime: '2017-08-08',
    type: 'notification'
  },
  {
    id: '000000003',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
    title: '这种模板可以区分多种通知类型',
    datetime: '2017-08-07',
    read: true,
    type: 'notification'
  },
  {
    id: '000000004',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
    title: '左侧图标用于区分不同的类型',
    datetime: '2017-08-07',
    type: 'notification'
  },
  {
    id: '000000005',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
    title: '内容不要超过两行字，超出时自动截断',
    datetime: '2017-08-07',
    type: 'notification'
  },
  {
    id: '000000006',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    title: '曲丽丽 评论了你',
    description: '描述信息描述信息描述信息',
    datetime: '2017-08-07',
    type: 'message',
    clickClose: true
  },
  {
    id: '000000007',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    title: '朱偏右 回复了你',
    description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
    datetime: '2017-08-07',
    type: 'message',
    clickClose: true
  },
  {
    id: '000000008',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    title: '标题',
    description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
    datetime: '2017-08-07',
    type: 'message',
    clickClose: true
  },
  {
    id: '000000009',
    title: '任务名称',
    description: '任务需要在 2017-01-12 20:00 前启动',
    extra: '未开始',
    status: 'todo',
    type: 'event'
  },
  {
    id: '000000010',
    title: '第三方紧急代码变更',
    description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
    extra: '马上到期',
    status: 'urgent',
    type: 'event'
  },
  {
    id: '000000011',
    title: '信息安全考试',
    description: '指派竹尔于 2017-01-09 前完成更新并发布',
    extra: '已耗时 8 天',
    status: 'doing',
    type: 'event'
  },
  {
    id: '000000012',
    title: 'ABCD 版本发布',
    description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
    extra: '进行中',
    status: 'processing',
    type: 'event'
  }
];

export default [
  {
    url: '/api/v1/auth/login',
    method: 'POST',
    response: ({ body }) => {
      return {
        token: '123abcdefg',
        username: body.username,
        role: body.username,
      };
    },
  },
  {
    url: '/api/v1/auth/current',
    method: 'get',
    // statusCode: 401,
    response: ({ body }) => {
      return {
        user: { username: 'decker' },
        menus: mockMenus,
        permissions: ['admin'],
      };
    },
  },
  {
    url: '/api/v1/current/notice',
    method: 'get',
    response: ({ body }) => {
      return mockNoticeList;
    },
  },
] as MockMethod[];

