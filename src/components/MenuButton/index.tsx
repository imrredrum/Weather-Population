import {
  Badge,
  badgeClasses,
  IconButton,
  type IconButtonProps,
} from '@mui/material'

interface MenuButtonProps extends IconButtonProps {
  showBadge?: boolean
}

const MenuButton: React.FC<MenuButtonProps> = ({
  showBadge = false,
  ...iconButtonProps
}) => (
  <Badge
    color='error'
    variant='dot'
    invisible={!showBadge}
    sx={{ [`& .${badgeClasses.badge}`]: { right: 2, top: 2 } }}
  >
    <IconButton size='small' {...iconButtonProps} />
  </Badge>
)

export default MenuButton
