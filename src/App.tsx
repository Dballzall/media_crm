import { BypassAuthCRM } from './root/BypassAuthCRM';

/**
 * Application entry point
 *
 * This version uses BypassAuthCRM which automatically logs in as an admin user
 * without requiring authentication, for development and testing purposes.
 *
 * The original CRM component accepts these props:
 *  - contactGender
 *  - companySectors
 *  - darkTheme
 *  - dealCategories
 *  - dealPipelineStatuses
 *  - dealStages
 *  - lightTheme
 *  - logo
 *  - noteStatuses
 *  - taskTypes
 *  - title
 * ... as well as all the props accepted by react-admin's <Admin> component.
 *
 * @example
 * const App = () => (
 *    <BypassAuthCRM
 *       logo="./img/logo.png"
 *       title="Media CRM (Auto-Login)"
 *    />
 * );
 */
const App = () => <BypassAuthCRM title="Media CRM (Auto-Login)" />;

export default App;
