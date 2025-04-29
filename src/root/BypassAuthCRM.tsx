import { CRM, CRMProps } from './CRM';
import { mockAuthProvider, dataProvider } from '../providers/supabase';

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
    authProvider={mockAuthProvider}
    dataProvider={dataProvider}
    requireAuth={false}
  />
);
