import { useAppSelector } from 'utils/hooks';
import { selectRole } from 'redux/auth/selectors';
import { UserRole } from 'entities/auth';

type Permissions = {
  seeManagersPage: boolean;
  seePointsPage: boolean;
  seePointPage: boolean;
};

const permissionsMap: Record<UserRole, Permissions> = {
  admin: {
    seeManagersPage: true,
    seePointsPage: false,
    seePointPage: false
  },
  manager: {
    seeManagersPage: false,
    seePointsPage: true,
    seePointPage: false
  },
  owner: {
    seeManagersPage: false,
    seePointsPage: false,
    seePointPage: true
  }
};

const usePermissions = () => {
  const role = useAppSelector(selectRole);

  return permissionsMap[role];
};

// eslint-disable-next-line import/prefer-default-export
export { usePermissions };
