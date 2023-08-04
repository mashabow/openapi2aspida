import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods0 } from './init';
import type { Methods as Methods1 } from './roles';
import type { Methods as Methods2 } from './roles/_id@string';
import type { Methods as Methods3 } from './roles/_role@string';
import type { Methods as Methods4 } from './search/_id@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '');
  const PATH0 = '/users-permissions/init';
  const PATH1 = '/users-permissions/roles';
  const PATH2 = '/users-permissions/search';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    init: {
      /**
       * Check if the first admin user has already been registered
       * @returns response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * Check if the first admin user has already been registered
       * @returns response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    roles: {
      _id: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          /**
           * Retrieve a role depending on its id
           * @returns response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Retrieve a role depending on its id
           * @returns response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      _role: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          /**
           * Update a role
           * @returns response
           */
          put: (option: { body: Methods3['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods3['put']['resBody'], BasicHeaders, Methods3['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Update a role
           * @returns response
           */
          $put: (option: { body: Methods3['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods3['put']['resBody'], BasicHeaders, Methods3['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * Delete a role
           * @returns response
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['delete']['resBody'], BasicHeaders, Methods3['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete a role
           * @returns response
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['delete']['resBody'], BasicHeaders, Methods3['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * Retrieve all role documents
       * @returns response
       */
      get: (option?: { query?: Methods1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * Retrieve all role documents
       * @returns response
       */
      $get: (option?: { query?: Methods1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      /**
       * Create a new role
       * @returns response
       */
      post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * Create a new role
       * @returns response
       */
      $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods1['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    search: {
      _id: (val1: string) => {
        const prefix1 = `${PATH2}/${val1}`;

        return {
          /**
           * Search for users
           * @returns response
           */
          get: (option?: { query?: Methods4['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Search for users
           * @returns response
           */
          $get: (option?: { query?: Methods4['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods4['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
