import React from 'react';

const About = () =>
  <div className="c-main-container  js-main-container">
    <section className="o-section o-section--header  t-section  t-section--header">
      <div className="c-header">
        <div className="o-section__header-bg  t-section__header" />
        <div className="o-section__content-bg  t-section__content" />

        <div className="o-container">
          <div className="o-section__container">
            <header className="o-section__header  c-header__header  t-section__header">
              <div className="c-header__inner-header">
                <div className="c-header__avatar">
                  <div className="a-header  c-avatar">
                    <img className="c-avatar__img" src="/src/images/avatar.jpg" alt="" />
                  </div>
                </div>
              </div>
            </header>

            <div className="o-section__content  c-header__content  t-section__content">
              <div className="c-header__inner-content">
                <div className="c-header__top">
                  <div className="c-header__brand">
                    <div className="c-brand">
                      <h1 className="c-brand__title  t-title">
                        <span className="c-brand__sizer">
                          <span className="a-header  c-brand__first-word  t-title__first-word">
                              KIM
                          </span>
                          <span className="a-header  c-brand__second-word  t-title__second-word">
                              DAVID
                          </span>
                        </span>
                      </h1>
                      <h2 className="a-header  c-brand__sub-title  t-sub-title">
                        <span className="c-brand__sizer">
                            Web Developer &amp; Software Developer
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="c-header__contact">
                  <hr className="a-header  c-header__contact-divider" />
                  <div className="o-grid">
                    <div className="o-grid__col-md-3  o-grid__col-sm-6">
                      <div className="a-header  o-content">
                        <div className="o-content__body">
                          <h4>Location</h4>
                          <address>
                              Toronto, Canada
                          </address>
                        </div>
                      </div>
                    </div>
                    <div className="o-grid__col-md-3  o-grid__col-sm-6">
                      <div className="a-header  o-content">
                        <div className="o-content__body">
                          <h4>Phone</h4>
                          <p>
                              416.834.3883
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="o-grid__col-md-3  o-grid__col-sm-6">
                      <div className="a-header  o-content">
                        <div className="o-content__body">
                          <h4>Email</h4>
                          <p>
                            david.ingook@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="o-grid__col-md-3  o-grid__col-sm-6">
                      <div className="a-header  o-content">
                        <div className="o-content__body">
                          <h4>Linked In</h4>
                          <a href="https://linkedin.com/in/inkoog-kim" rel="noopener noreferrer" target="_blank" className="t-link-container">
                            <p>
                              Go to LinkedIn
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="o-section  t-section  ">
      <div className="o-section__header-bg  t-section__header" />
      <div className="o-section__content-bg  t-section__content" />
      <div className="o-container">
        <div className="o-section__container">
          <header className="o-section__header  t-section__header">
            <div className="o-content">
              <h2 className="o-section__heading">
                  Intro
              </h2>
              <div className="o-content__body  o-section__description" />
            </div>
          </header>

          <div className="o-section__content  t-section__content  ">
            <div className="o-content">
              <div className="c-intro">
                <div className="o-content__body">
                  <p>
                    •	&nbsp;Passionate in software developing and working in a dynamic environment
                  </p>
                  <p>
                    •	&nbsp;Positive, analytical, self-motivated, and a fast learner
                  </p>
                  <p>
                    •	&nbsp;Strong sense of responsibility and problem solving skills
                     with attention to detail
                  </p>
                  <p>
                    •	&nbsp;Excellent prioritization skills and time management
                  </p>
                  <p>
                    •	&nbsp;Excellent team work skills
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="o-section  t-section  ">
      <div className="o-section__header-bg  t-section__header" />
      <div className="o-section__content-bg  t-section__content" />
      <div className="o-container">
        <div className="o-section__container">
          <header className="o-section__header  t-section__header">
            <div className="o-content">
              <h2 className="o-section__heading">
                Skills
              </h2>
              <div className="o-content__body  o-section__description" />
            </div>
          </header>
          <div className="o-section__content  t-section__content  ">
            <div className="o-grid">
              <div className="o-grid__col-sm-6">
                <div className="o-content">
                  <div className="o-media  o-media--block">
                    <div className="o-media__figure">
                      <div className="c-number  t-primary-color">
                        75<small>%</small>
                      </div>
                    </div>
                    <div className="o-media__body">
                      <h3>Javascript</h3>
                    </div>
                  </div>
                  <div className="c-progress-bar  o-content__body  t-border-color-bg  u-mt-text">
                    <div className="a-progress-bar c-progress-bar__filler  t-primary-bg" style={{ width: '75%' }} data-percent="75" />
                  </div>
                </div>
              </div>
              <div className="o-grid__col-sm-6">
                <div className="o-content">
                  <div className="o-media  o-media--block">
                    <div className="o-media__figure">
                      <div className="c-number  t-primary-color">
                        75<small>%</small>
                      </div>
                    </div>
                    <div className="o-media__body">
                      <h3>Java</h3>
                    </div>
                  </div>
                  <div className="c-progress-bar  o-content__body  t-border-color-bg  u-mt-text">
                    <div className="a-progress-bar  c-progress-bar__filler  t-primary-bg" style={{ width: '75%' }} data-percent="75" />
                  </div>
                </div>
              </div>
              <div className="o-grid__col-sm-6">
                <div className="o-content">
                  <div className="o-media  o-media--block">
                    <div className="o-media__figure">
                      <div className="c-number  t-primary-color">
                        75<small>%</small>
                      </div>
                    </div>
                    <div className="o-media__body">
                      <h3>React</h3>
                    </div>
                  </div>
                  <div className="c-progress-bar  o-content__body  t-border-color-bg  u-mt-text">
                    <div className="a-progress-bar  c-progress-bar__filler  t-primary-bg" style={{ width: '75%' }} data-percent="75" />
                  </div>
                </div>
              </div>
              <div className="o-grid__col-sm-6">
                <div className="o-content">
                  <div className="o-media  o-media--block">
                    <div className="o-media__figure">
                      <div className="c-number  t-primary-color">
                        65<small>%</small>
                      </div>
                    </div>
                    <div className="o-media__body">
                      <h3>Nodejs</h3>
                    </div>
                  </div>
                  <div className="c-progress-bar  o-content__body  t-border-color-bg  u-mt-text">
                    <div className="a-progress-bar  c-progress-bar__filler  t-primary-bg" style={{ width: '65%' }} data-percent="65" />
                  </div>
                </div>
              </div>
              <div className="o-grid__col-sm-6">
                <div className="o-content">
                  <div className="o-media  o-media--block">
                    <div className="o-media__figure">
                      <div className="c-number  t-primary-color">
                        70<small>%</small>
                      </div>
                    </div>
                    <div className="o-media__body">
                      <h3>Spring Framework</h3>
                    </div>
                  </div>
                  <div className="c-progress-bar  o-content__body  t-border-color-bg  u-mt-text">
                    <div className="a-progress-bar  c-progress-bar__filler  t-primary-bg" style={{ width: '70%' }} data-percent="70" />
                  </div>
                </div>
              </div>
              <div className="o-grid__col-sm-6">
                <div className="o-content">
                  <div className="o-media  o-media--block">
                    <div className="o-media__figure">
                      <div className="c-number  t-primary-color">
                        60<small>%</small>
                      </div>
                    </div>
                    <div className="o-media__body">
                      <h3>MongoDB</h3>
                    </div>
                  </div>
                  <div className="c-progress-bar  o-content__body  t-border-color-bg  u-mt-text">
                    <div className="a-progress-bar  c-progress-bar__filler  t-primary-bg" style={{ width: '60%' }} data-percent="60" />
                  </div>
                </div>
              </div>
              <div className="o-grid__col-sm-6">
                <div className="o-content">
                  <div className="o-media  o-media--block">
                    <div className="o-media__figure">
                      <div className="c-number  t-primary-color">
                        65<small>%</small>
                      </div>
                    </div>
                    <div className="o-media__body">
                      <h3>SQL</h3>
                    </div>
                  </div>
                  <div className="c-progress-bar  o-content__body  t-border-color-bg  u-mt-text">
                    <div className="a-progress-bar  c-progress-bar__filler  t-primary-bg" style={{ width: '65%' }} data-percent="65" />
                  </div>
                </div>
              </div>
              <div className="o-grid__col-sm-6">
                <div className="o-content">
                  <div className="o-media  o-media--block">
                    <div className="o-media__figure">
                      <div className="c-number  t-primary-color">
                        70<small>%</small>
                      </div>
                    </div>
                    <div className="o-media__body">
                      <h3>HTML/CSS</h3>
                    </div>
                  </div>
                  <div className="c-progress-bar  o-content__body  t-border-color-bg  u-mt-text">
                    <div className="a-progress-bar c-progress-bar__filler  t-primary-bg" style={{ width: '70%' }} data-percent="70" />
                  </div>
                </div>
              </div>
              <div className="o-grid__col-sm-6">
                <div className="o-content">
                  <div className="o-media  o-media--block">
                    <div className="o-media__figure">
                      <div className="c-number  t-primary-color">
                        70<small>%</small>
                      </div>
                    </div>
                    <div className="o-media__body">
                      <h3>JQuery</h3>
                    </div>
                  </div>
                  <div className="c-progress-bar  o-content__body  t-border-color-bg  u-mt-text">
                    <div className="a-progress-bar  c-progress-bar__filler  t-primary-bg" style={{ width: '70%' }} data-percent="70" />
                  </div>
                </div>
              </div>
              <div className="o-grid__col-sm-6">
                <div className="o-content">
                  <div className="o-media  o-media--block">
                    <div className="o-media__figure">
                      <div className="c-number  t-primary-color">
                        60<small>%</small>
                      </div>
                    </div>
                    <div className="o-media__body">
                      <h3>GIT</h3>
                    </div>
                  </div>
                  <div className="c-progress-bar  o-content__body  t-border-color-bg  u-mt-text">
                    <div className="a-progress-bar  c-progress-bar__filler  t-primary-bg" style={{ width: '60%' }} data-percent="60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="o-section  t-section  ">
      <div className="o-section__header-bg  t-section__header" />
      <div className="o-section__content-bg  t-section__content" />
      <div className="o-container">
        <div className="o-section__container">
          <header className="o-section__header  t-section__header">
            <div className="o-content">
              <h2 className="o-section__heading">
                  Experience
              </h2>
              <div className="o-content__body  o-section__description" />
            </div>
          </header>
          <div className="o-section__content  t-section__content  u-pb-0">
            <div className="a-experience-timeline  c-timeline  t-border-color">
              <div className="c-timeline__item">
                <div className="c-timeline__point  t-timeline__point  t-primary-bg" />
                <div className="o-content">
                  <div className="o-grid">
                    <div className="o-grid__col-md-5">
                      <div className="c-work__timeframe">
                          2015 &ndash; 2017
                      </div>
                      <h3 className="c-work__heading">
                          Hyundai U & I
                      </h3>
                      <h4 className="c-work__title">
                          Web developer
                      </h4>
                      <div className="c-work__location" />
                    </div>
                    <div className="description o-grid__col-md-7">
                      <p>
                          Dispatchment in Hyundai Merchant Marine IT Department<br />
                          Development and Maintenance of the Enterprise
                           Legal Management System<br />
                          Maintenance of the Hyundai Merchant Marine Official Website
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="o-section  t-section  ">
      <div className="o-section__header-bg  t-section__header" />
      <div className="o-section__content-bg  t-section__content" />
      <div className="o-container">
        <div className="o-section__container">
          <header className="o-section__header  t-section__header">
            <div className="o-content">
              <h2 className="o-section__heading">
                  Education
              </h2>
              <div className="o-content__body  o-section__description" />
            </div>
          </header>
          <div className="o-section__content  t-section__content  u-pt-0">
            <div className="o-content">
              <div className="a-education-timeline  c-timeline  t-border-color  o-section__full-top-space">
                <div className="c-timeline__end  t-border-color" />
                <div className="c-timeline__item">
                  <div className="c-timeline__point  t-timeline__point  t-primary-bg" />
                  <div className="o-content">
                    <div className="o-grid">
                      <div className="o-grid__col-md-5">
                        <div className="c-work__timeframe">
                            2017 &ndash; Present
                        </div>
                        <h3 className="c-work__heading">
                            Humber College
                        </h3>
                        <h4 className="c-work__title">
                            Post Graduate Degree Information Technology Solution
                        </h4>
                        <div className="c-work__location" />
                      </div>
                      <div className="o-grid__col-md-7" />
                    </div>
                  </div>
                </div>
                <div className="c-timeline__item">
                  <div className="c-timeline__point  t-timeline__point  t-primary-bg" />
                  <div className="o-content">
                    <div className="o-grid">
                      <div className="o-grid__col-md-5">
                        <div className="c-work__timeframe">
                            2008 &ndash; 2015
                        </div>
                        <h3 className="c-work__heading">
                            Handong University
                        </h3>
                        <h4 className="c-work__title">
                            Bachelor of Computer Science
                        </h4>
                        <div className="c-work__location" />
                      </div>
                      <div className="o-grid__col-md-7" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>;
export default About;
