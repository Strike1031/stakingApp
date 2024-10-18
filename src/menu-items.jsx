// assets
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';

const icons = {
  NavigationOutlinedIcon: NavigationOutlinedIcon,
  HomeOutlinedIcon: HomeOutlinedIcon,
  ChromeReaderModeOutlinedIcon: ChromeReaderModeOutlinedIcon,
  HelpOutlineOutlinedIcon: HelpOutlineOutlinedIcon,
  SecurityOutlinedIcon: SecurityOutlinedIcon,
  AccountTreeOutlinedIcon: AccountTreeOutlinedIcon,
  BlockOutlinedIcon: BlockOutlinedIcon,
  AppsOutlinedIcon: AppsOutlinedIcon,
  ContactSupportOutlinedIcon: ContactSupportOutlinedIcon,
  QueryBuilderIcon: QueryBuilderIcon,
  GroupOutlinedIcon: GroupOutlinedIcon,
  RestoreOutlinedIcon: RestoreOutlinedIcon,
  GetAppOutlinedIcon: GetAppOutlinedIcon,
};

// ==============================|| MENU ITEMS ||============================== //

// eslint-disable-next-line
export default {
  items: [
    {
      id: 'navigation',
      // title: 'StakingApp',
      // caption: 'Dashboard',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: icons['HomeOutlinedIcon'],
          url: '/dashboard'
        },
        {
          id: 'taskCenter',
          title: 'TaskCenter',
          type: 'item',
          icon: icons['QueryBuilderIcon'],
          url: '/taskCenter'
        },
        {
          id: 'withdrawEarning',
          title: 'Withdraw Earnings',
          type: 'item',
          icon: icons['GetAppOutlinedIcon'],
          url: '/withdrawEarning'
        },
        {
          id: 'withdrawalHistory',
          title: 'Withdrawal History',
          type: 'item',
          icon: icons['RestoreOutlinedIcon'],
          url: '/withdrawalHistory'
        },
        {
          id: 'invest',
          title: 'Invest',
          type: 'item',
          icon: icons['GroupOutlinedIcon'],
          url: '/invest'
        }
      ]
    },
   
  ]
};
