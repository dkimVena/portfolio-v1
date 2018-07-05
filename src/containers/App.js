import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Home from './Home';
// import ExampleComponent from './ExampleComponent';
import Header from '../components/Header';
import About from '../components/About';
import ProjectList from '../components/ProjectList';
import Contact from '../components/Contact';
import Detail from '../components/Detail';
import Main from '../components/Main';
// import Breadcrumbs from './Breadcrumbs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [
        { name: 'ABOUT', url: '/about' },
        { name: 'MAIN PROJECT', url: '/main' },
        { name: 'SIDE PROJECT', url: '/side' },
        { name: 'CONTACT', url: '/contact' },
        { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/inkoog-kim/' },
        { name: 'GITHUB', url: 'https://github.com/goginim' },
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
        },
      ],
      sideProject: [
        {
          title: 'Korean Community Website',
          image: '/src/images/COMMUNITY.png',
          description: 'Developed community website for Korean living in Canada as a full stack developer',
          date: 'OCT. 01. 2017 – MAY. 23. 2018',
          features: [
            '• Fully responsive design to support mobile devices, tablets, browsers',
            '• Used React, Redux, ES6, Nodejs, Express, MongoDB',
          ],
          url: 'https://stark-wildwood-79367.herokuapp.com/community',
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
        },
      ],
    };
  }
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Header menu={this.state.menu} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route
            path="/main"
            render={props => <ProjectList {...props} projects={this.state.mainProject} type="main" />}
          />
          <Route
            path="/side"
            render={props => <ProjectList {...props} projects={this.state.sideProject} type="side" />}
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
