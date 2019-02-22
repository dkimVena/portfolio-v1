import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Home from './Home';
// import ExampleComponent from './ExampleComponent';
import Header from 'components/Header';
import About from 'components/About';
import ProjectList from 'components/ProjectList';
import Contact from 'components/Contact';
import Detail from 'components/Detail';
import Main from 'components/Main';

class App extends Component {
  state = {
    menu: [
      { name: 'ABOUT', url: '/about', icon: 'far fa-question-circle' },
      { name: 'MAIN PROJECT', url: '/main', icon: 'far fa-file-alt' },
      { name: 'SIDE PROJECT', url: '/side', icon: 'far fa-file-alt' },
      { name: 'CONTACT', url: '/contact', icon: 'far fa-envelope' },
      {
        name: 'LINKEDIN',
        url: 'https://www.linkedin.com/in/inkoog-kim/',
        icon: 'fab fa-linkedin',
      },
      { name: 'GITHUB', url: 'https://github.com/goginim', icon: 'fab fa-github' },
    ],
    mainProject: [
      {
        title: 'Enterprise Legal Management System',
        image: '/src/images/ELMS.png',
        description: 'Development of website for managing legal issues about shipping',
        date: 'APRIL. 2015 – FEB. 2016',
        features: [
          '• Maintained and developed the backend, frontend part of website',
          '• Cooperated/communicated with end-users from different department',
          '• Used Java Spring Framework, JQuery, Javascript, Ajax, HTML, Mybatis, DB2',
        ],
        url: 'http://elms.hmm21.com/',
        tags: ['Java', 'Spring', 'JQuery', 'Javascript', 'Mybatis', 'DB2'],
      },
      {
        title: 'Hyundai Merchant Marine Official Website',
        image: '/src/images/HMM.png',
        description: 'Maintenance of the Hyundai Merchant Marine Official Website',
        date: 'JAN. 2015 – FEB. 2017',
        features: [
          '• Maintained and updated the backend, frontend part of website',
          '• Worked on websites that were high usage, multi-national',
          '• Used Javascript, JQuery, HTML, J2EE, DB2',
        ],
        url: 'http://hmm21.com/cms/company/engn/index.jsp',
        tags: ['J2EE', 'JQuery', 'Javascript', 'DB2'],
      },
    ],
    sideProject: [
      {
        title: 'Slack App',
        image: '/src/images/SLACKAPP.png',
        description: 'Slack App clone',
        date: 'JAN. 7. 2019 – JAN. 23. 2019',
        features: [
          '• Changing avatar',
          '• Create and join a channel',
          '• Sending direct message to other users',
          '• Sending Image file to other users',
          '• Changing UI color',
          '• Developing the frontend part of website using React, Sementic-ui',
          '• Developing the backend part of website using Firebase',
        ],
        url: 'https://gookslack.herokuapp.com/',
        tags: ['ReactJS', 'Firebase', 'Semantic-ui'],
      },
      {
        title: 'CoreTex',
        image: '/src/images/CORETEX.png',
        description: 'App for helping children from amnesia, dementia, and post stroke symptoms',
        date: 'JAN. 18. 2019 – JAN. 20. 2019',
        features: [
          '• Exercise to help autistic people with different cognitive read and understand facial expressions',
          '• Exercise to help people who suffer cognitive impairment following intermediate and severe strokes',
          '• Traking progress of exercise',
          '• Donation through the web site',
          '• Developing the frontend part of website using React, Sementic-ui',
          '• Developing the backend part of website using Firebase',
        ],
        url: 'https://devpost.com/software/cortex',
        tags: ['ReactJS', 'Semantic-ui', 'Firebase'],
      },
      {
        title: 'Anonymous Chat',
        image: '/src/images/CHAT.png',
        description: 'App for chatting anonymously',
        date: 'JAN. 2. 2019 – JAN. 6. 2019',
        features: [
          '• User can choose avatar',
          '• User can create chat room and have chatting anonymously',
          '• Fully responsive design to support all devices',
          '• Developing the frontend part of website using React, Sementic-ui',
          '• Developing the backend part of website using Nodejs, Express, Socket.io',
        ],
        url: 'https://gookchat.herokuapp.com/',
        tags: ['ReactJS', 'Semantic-ui', 'NodeJS', 'Express', 'Socket.io'],
      },
      {
        title: 'Movie Info App',
        image: '/src/images/MOVIEQL.png',
        description: 'App for movie information',
        date: 'DEC. 2. 2018 – DEC. 15. 2018',
        features: [
          '• Movie List',
          '• Movie Information (Rating, Synopsis, Suggested movies)',
          '• Developing the frontend part of website using React, Styled-Component',
          '• Developing the backend part of website using GraphQL',
        ],
        url: 'https://gookmovieql.herokuapp.com',
        tags: ['ReactJS', 'Styled-Component', 'GraphQL'],
      },
      {
        title: 'Food Company Website',
        image: '/src/images/GOOKFOOD.png',
        description: 'Food Company Website',
        date: 'NOV. 8. 2018 – NOV. 20. 2018',
        features: [
          '• Food company Advertisement',
          '• Developing the frontend part of website using HTML, CSS',
        ],
        url: 'https://gookfood.herokuapp.com',
        tags: ['HTML', 'CSS'],
      },
      {
        title: 'Korean Community Website',
        image: '/src/images/COMMUNITY.png',
        description:
          'Developed community website for Korean living in Canada as a full stack developer',
        date: 'OCT. 01. 2017 – MAY. 23. 2018',
        features: [
          '• Fully responsive design to support mobile devices, tablets, browsers',
          '• Used React, Redux, ES6, Nodejs, Express, MongoDB',
        ],
        url: 'https://stark-wildwood-79367.herokuapp.com/community',
        tags: ['ReactJS', 'Redux', 'NodeJS', 'Express', 'MongoDB'],
      },
      {
        title: 'Food WikiPedia',
        image: '/src/images/FOOD.png',
        description: 'Finding food information Application with name or photo of food',
        date: 'JAN. 19. 2018 – JAN. 21. 2018',
        features: [
          '• User can search food information with name, photo of food and location',
          '• IBM watson’s visual recognition to allow user to search with image file',
          '• Yelp api to get restaurant information',
          '• Youtube api to get video information',
          '• Food2fork api to get recipes',
          '• Used react, redux, Nodejs, IBM Watson API, Youtube API, Yelp API, Food2Fork API',
        ],
        url: 'https://devpost.com/software/food-wikipedia',
        tags: ['ReactJS', 'Redux', 'NodeJS', 'IBM Watson API', 'Youtube API'],
      },
      {
        title: 'Todo List',
        image: '/src/images/TODO.png',
        description: 'App for managing todo list daily',
        date: 'FEB. 19. 2018 – FEB. 23. 2018',
        features: [
          '• User can manage what to do with list',
          '• Fully responsive design to support all devices',
          '• Developing the frontend part of website using React, MaterializeCSS',
          '• Developing the backend part of website using Nodejs, Express, MongoDB',
        ],
        url: 'https://todos-today.herokuapp.com/',
        tags: ['ReactJS', 'MaterializeCSS', 'NodeJS', 'Express', 'MongoDB'],
      },
      {
        title: 'Daily Board',
        image: '/src/images/DAILY.png',
        description: 'App for posting daily memo or contents and sharing with other users (SNS)',
        date: 'DEC. 19. 2017 – DEC. 29. 2017',
        features: [
          '• Developing the user regist, writing memo, comment, search user, like',
          '• Fully responsive design to support all devices',
          '• Developing the frontend part of website using React, Redux, ES6, MaterializeCSS, JQuery',
          '• Developing the backend part of website using Nodejs, Express, MongoDB',
        ],
        url: 'https://dailyboard.herokuapp.com/',
        tags: ['ReactJS', 'Redux', 'MaterializeCSS', 'JQuery', 'NodeJS', 'Express', 'MongoDB'],
      },
    ],
  };

  render() {
    return (
      <div style={{ height: '95vh' }} className="container">
        <Header menu={this.state.menu} openModal={this.openModal} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route
            path="/main"
            render={props => (
              <ProjectList {...props} projects={this.state.mainProject} type="main" />
            )}
          />
          <Route
            path="/side"
            render={props => (
              <ProjectList {...props} projects={this.state.sideProject} type="side" />
            )}
          />
          <Route path="/contact" component={Contact} />
          <Route
            path="/detail/main/:index"
            render={props => <Detail {...props} projects={this.state.mainProject} />}
          />
          <Route
            path="/detail/side/:index"
            render={props => <Detail {...props} projects={this.state.sideProject} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
