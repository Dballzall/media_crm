import { CRM, CRMProps } from './CRM';
import { mockAuthProvider } from '../providers/supabase';
import { authProvider as fakeAuthProvider, dataProvider as fakeDataProvider } from '../providers/fakerest';

/**
 * BypassAuthCRM Component
 * 
 * This component extends the standard CRM component but uses the mockAuthProvider
 * to bypass authentication, automatically logging in as an admin user.
 * 
 * @returns {JSX.Element} The rendered CRM application with bypassed authentication.
 */
export const BypassAuthCRM = (props: Omit<CRMProps, 'authProvider'>) => (
  <CRM
    {...props}
    authProvider={fakeAuthProvider}
    dataProvider={fakeDataProvider}
    requireAuth={false}
  />
);
