import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: 'Kakao Entertainment',
      logoImage:
        'https://w.namu.la/s/c7fade0038f3cb45b33a12535a590c114f5adf344591f073e69c0143e8e60572b336aa2f22cc6ce053a8d4c7807f15b1974d0e67484cce605681bfa9d917365c13b8d6f46593c3cb859ee047a90478bc',
      position: 'Backend Developer',
      startedAt: '2021-12-01',
      descriptions: ['카카오 웹툰 개발'],
      skillKeywords: ['Java', 'Spring Boot'],
    },
    {
      title: 'Gabia',
      position: 'Backend Developer',
      startedAt: '2020-11-16',
      endedAt: '2021-11-25',
      logoImage: 'http://static.gabia.com/www/common/gnb/gabia_logo_1200.jpg',
      descriptions: [
        '하이웍스 서비스 유지보스 및 레거시 코드 개선',
        'Gitlab CI/CD 과정 경험',
        '레거시 코드 Typescript Nodejs Express API서버로 포팅작업',
      ],
      skillKeywords: [
        'PHP(Laravel, CodeIgniter)',
        'Node.js Express (Typescript)',
        'MySQL',
        'Memcached',
        'Gitlab CI/CD',
        'Docker',
        'Kubernetes',
      ],
    },
    {
      title: 'Popone',
      position: 'Backend Developer (인턴)',
      startedAt: '2018-08-08',
      endedAt: '2019-01-31',
      logoImage:
        'https://image.rocketpunch.com/company/28521/popone_logo_1490768999.png?s=400x400&t=inside',
      descriptions: [
        'Fitts 2.0 애플리케이션 Ruby on rails 서버개발',
        'Rails의 Blazer 툴 사용 -> 데이터 시각화',
      ],
      skillKeywords: ['Ruby on Rails', 'MySQL', 'Python', 'AWS EC2', 'AWS Elastic Beanstalk'],
    },
  ],
};

export default experience;
