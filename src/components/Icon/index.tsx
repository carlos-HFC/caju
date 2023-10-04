import Image from "next/image";

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

interface IconProps {
  name: IconName;
}

function whichIcon(name: IconName) {
  switch (name) {
    case 'arrow-circle-down':
      return arrowCircleDown;
    case 'arrow-circle-left':
      return arrowCircleLeft;
    case 'arrow-circle-right':
      return arrowCircleRight;
    case 'arrow-circle-up':
      return arrowCircleUp;
    case 'arrow-down':
      return arrowDown;
    case 'arrow-left':
      return arrowLeft;
    case 'arrow-right':
      return arrowRight;
    case 'arrow-up':
      return arrowUp;
    case 'atention-circle':
      return atentionCircle;
    case 'atention-triangle':
      return atentionTriangle;
    case 'box-arrow-down':
      return boxArrowDown;
    case 'box-arrow-left':
      return boxArrowLeft;
    case 'box-arrow-right':
      return boxArrowRight;
    case 'box-arrow-up':
      return boxArrowUp;
    case 'calendar':
      return calendar;
    case 'check':
      return check;
    case 'chevron-down':
      return chevronDown;
    case 'chevron-left':
      return chevronLeft;
    case 'chevron-right':
      return chevronRight;
    case 'chevron-up':
      return chevronUp;
    case 'close':
      return close;
    case 'double-chevron-down':
      return doubleChevronDown;
    case 'double-chevron-left':
      return doubleChevronLeft;
    case 'double-chevron-right':
      return doubleChevronRight;
    case 'double-chevron-up':
      return doubleChevronUp;
    case 'facebook':
      return facebook;
    case 'instagram':
      return instagram;
    case 'link':
      return link;
    case 'loading':
      return loading;
    case 'mail':
      return mail;
    case 'menu':
      return menu;
    case 'share':
      return share;
    case 'unlink':
      return unlink;
    case 'user':
      return user;
    case 'users':
      return users;
    case 'youtube':
      return youtube;
  }
}

export function Icon(props: IconProps) {
  let icon = whichIcon(props.name);

  return (
    <Image
      className="c-icon"
      src={icon}
      alt={`Icon ${props.name}`}
    />
  );
}