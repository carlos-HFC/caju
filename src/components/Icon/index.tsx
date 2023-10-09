import Image, { ImageProps } from "next/image";

import arrowCircleDown from '@/assets/arrow-circle-down.svg';
import arrowCircleLeft from '@/assets/arrow-circle-left.svg';
import arrowCircleRight from '@/assets/arrow-circle-right.svg';
import arrowCircleUp from '@/assets/arrow-circle-up.svg';
import arrowDown from '@/assets/arrow-down.svg';
import arrowLeft from '@/assets/arrow-left.svg';
import arrowRight from '@/assets/arrow-right.svg';
import arrowUp from '@/assets/arrow-up.svg';
import atentionCircle from '@/assets/atention-circle.svg';
import atentionTriangle from '@/assets/atention-triangle.svg';
import boxArrowDown from '@/assets/box-arrow-down.svg';
import boxArrowLeft from '@/assets/box-arrow-left.svg';
import boxArrowRight from '@/assets/box-arrow-right.svg';
import boxArrowUp from '@/assets/box-arrow-up.svg';
import calendar from '@/assets/calendar.svg';
import check from '@/assets/check.svg';
import chevronDown from '@/assets/chevron-down.svg';
import chevronLeft from '@/assets/chevron-left.svg';
import chevronRight from '@/assets/chevron-right.svg';
import chevronUp from '@/assets/chevron-up.svg';
import close from '@/assets/close.svg';
import doubleChevronDown from '@/assets/double-chevron-down.svg';
import doubleChevronLeft from '@/assets/double-chevron-left.svg';
import doubleChevronRight from '@/assets/double-chevron-right.svg';
import doubleChevronUp from '@/assets/double-chevron-up.svg';
import facebook from '@/assets/facebook.svg';
import instagram from '@/assets/instagram.svg';
import link from '@/assets/link.svg';
import loading from '@/assets/loading.svg';
import mail from '@/assets/mail.svg';
import menu from '@/assets/menu.svg';
import share from '@/assets/share.svg';
import unlink from '@/assets/unlink.svg';
import user from '@/assets/user.svg';
import users from '@/assets/users.svg';
import youtube from '@/assets/youtube.svg';

type IconName = 'arrow-circle-down' |
  'arrow-circle-left' |
  'arrow-circle-right' |
  'arrow-circle-up' |
  'arrow-down' |
  'arrow-left' |
  'arrow-right' |
  'arrow-up' |
  'atention-circle' |
  'atention-triangle' |
  'box-arrow-down' |
  'box-arrow-left' |
  'box-arrow-right' |
  'box-arrow-up' |
  'calendar' |
  'check' |
  'chevron-down' |
  'chevron-left' |
  'chevron-right' |
  'chevron-up' |
  'close' |
  'double-chevron-down' |
  'double-chevron-left' |
  'double-chevron-right' |
  'double-chevron-up' |
  'facebook' |
  'instagram' |
  'link' |
  'loading' |
  'mail' |
  'menu' |
  'share' |
  'unlink' |
  'user' |
  'users' |
  'youtube';

interface IconProps extends Omit<ImageProps, 'src' | 'alt'> {
  name: IconName;
}

const whichIcon = (name: IconName) => ({
  'arrow-circle-down': arrowCircleDown,
  'arrow-circle-left': arrowCircleLeft,
  'arrow-circle-right': arrowCircleRight,
  'arrow-circle-up': arrowCircleUp,
  'arrow-down': arrowDown,
  'arrow-left': arrowLeft,
  'arrow-right': arrowRight,
  'arrow-up': arrowUp,
  'atention-circle': atentionCircle,
  'atention-triangle': atentionTriangle,
  'box-arrow-down': boxArrowDown,
  'box-arrow-left': boxArrowLeft,
  'box-arrow-right': boxArrowRight,
  'box-arrow-up': boxArrowUp,
  'calendar': calendar,
  'check': check,
  'chevron-down': chevronDown,
  'chevron-left': chevronLeft,
  'chevron-right': chevronRight,
  'chevron-up': chevronUp,
  'close': close,
  'double-chevron-down': doubleChevronDown,
  'double-chevron-left': doubleChevronLeft,
  'double-chevron-right': doubleChevronRight,
  'double-chevron-up': doubleChevronUp,
  'facebook': facebook,
  'instagram': instagram,
  'link': link,
  'loading': loading,
  'mail': mail,
  'menu': menu,
  'share': share,
  'unlink': unlink,
  'user': user,
  'users': users,
  'youtube': youtube,
})[name];

export function Icon(props: Readonly<IconProps>) {
  let icon = whichIcon(props.name);

  return (
    <Image
      {...props}
      className="c-icon"
      src={icon}
      alt={`Icon ${props.name}`}
    />
  );
}