import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    displayName: 'Users',
    iconName: 'users',
    route: '/dashboard/users',
  },
  {
    displayName: 'Category',
    iconName: 'school',
    route: '/dashboard/categories',

  },
  {
    displayName: 'Ressources',
    iconName: 'checkup-list',
    route: '/dashboard/ressources',
  },

  {
    displayName: 'Event',
    iconName: 'bed',
    route: '/',
  },

  {
    displayName: 'Course',
    iconName: 'users-group',
    route: '/dashboard/clubs',
  },
];
