const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://NhanHcmue.github.io/Nhan',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Doan Van Nhan',
  role: 'Student in HCMUE',
  description:
    'Im currently a student at Ho Chi Minh City University of Education, pursuing a career in Information Technology. With a strong desire to grow professionally, I continuously strive to improve my skills and knowledge. I aim to become a competent developer who brings value to every project through a responsible and results-driven work ethic.',
  resume: 'https://example.com',
  social: {
    linkedin: 'www.linkedin.com/in/nhanhcmue',
    github: 'https://github.com/NhanHcmue',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Thuc Tap O FlashVN',
    stack: ['PHP'],
    sourceCode: 'https://github.com/NhanHcmue/flashvn_game.git',
    livePreview: 'http://flashvn.infy.uk/login.php',
  },
  {
    name: 'Project 2',
    description:
      'Do an cuoi ki muon pttkhdt',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/NhanHcmue/PTTKHDT.git',
    livePreview: 'https://github.com/NhanHcmue/PTTKHDT.git',
  },
  {
    name: 'Project 3',
    description:
      'Do an cuoi ki muon lap trinh mobile',
    stack: ['SASS', 'TypeScript', 'React-Native'],
    sourceCode: 'https://github.com/NhanHcmue/ReactNative_MoBi.git',
    livePreview: 'https://github.com/NhanHcmue/ReactNative_MoBi.git',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'C++',
  'C#',
  'PHP',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'vannhan.hcmue@gmail.com',
}

export { header, about, projects, skills, contact }
