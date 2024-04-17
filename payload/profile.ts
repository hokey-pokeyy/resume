import { faBlog, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTablet } from '@fortawesome/free-solid-svg-icons/faTablet';
import image from '../asset/jiseok.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,
  image,
  name: {
    title: '장지석',
    small: '(Jang Jiseok)',
  },
  contact: [
    {
      title: 'wltjr0920@ajou.ac.kr',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'Contact Me By Email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'Github (https://github.com/kante-j)',
      link: 'https://github.com/kante-j',
      icon: faGithub,
    },
    {
      title: 'Tistory Blog (https://kante-dev.tistory.com)',
      link: 'https://kante-dev.tistory.com',
      icon: faBlog,
    },
    {
      title: '이 페이지는 https://kante-j.github.io/resume 로 접속하면 됩니다.',
      icon: faTablet,
    },
  ],
  notice: {
    title: '현재는 구직활동을 하고있지 않습니다.',
    icon: faBell,
  },
};

export default profile;
