import { MockMethod } from 'vite-plugin-mock';

const mockProjects = [
  {
    id: '1',
    tenantId: '0',
    web_favicon: 'web_favicon',
    value: 'value',
    createAt: 0,
  },
  {
    id: '2',
    tenantId: '1',
    type: 'name',
    web_favicon: 'web_favicon',
    value: 'value',
    createAt: 0,
  }
]

export default [
  {
    url: '/api/v1/dict:byId',
    method: 'get',
    response: ({ query }) => {
      return {
        id: '1',
        type: '0',
        name: '/web_logo.jpg',
        value: "/backend_favicon.ico",
      }
    },
  }
] as MockMethod[];