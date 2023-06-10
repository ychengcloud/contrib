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
    url: '/api/v1/configs',
    method: 'get',
    response: ({ query }) => {
      return {
        id: '1',
        tenantId: '0',
        web_logo: '/web_logo.jpg',
        web_favicon: "/backend_favicon.ico",
        login_image: '/backend_backdrop.png',
        web_name: 'web_name',
      }
    },
  }
] as MockMethod[];