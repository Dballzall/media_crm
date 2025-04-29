import { AuthProvider } from 'react-admin';
import { supabase } from './supabase';
import { canAccess } from '../commons/canAccess';

// Mock admin user data
const MOCK_ADMIN_USER = {
  id: 'mock-admin-id',
  fullName: 'Admin User',
  avatar: undefined, // Changed from null to undefined to match UserIdentity interface
  administrator: true
};

// Mock auth provider that bypasses authentication
export const mockAuthProvider: AuthProvider = {
  login: async () => {
    // No actual login needed, we're bypassing authentication
    return Promise.resolve();
  },
  logout: async () => {
    // For consistency, still allow logout functionality
    return Promise.resolve();
  },
  checkError: async () => {
    // No error checking needed
    return Promise.resolve();
  },
  checkAuth: async () => {
    // Always authenticated
    return Promise.resolve();
  },
  getPermissions: async () => {
    // Admin permissions
    return Promise.resolve('admin');
  },
  getIdentity: async () => {
    // Return our mock admin user
    return Promise.resolve(MOCK_ADMIN_USER);
  },
  canAccess: async (params) => {
    // Admin can access everything
    return canAccess('admin', params);
  }
};
