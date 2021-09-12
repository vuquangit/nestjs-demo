import { Routes } from 'nest-router';

import { UsersModule } from './modules/users/users.module';

export const routes: Routes = [
  {
    path: '/v1',
    children: [{ path: '/users', module: UsersModule }],
  },
];
