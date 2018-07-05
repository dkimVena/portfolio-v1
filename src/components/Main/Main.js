import React from 'react';
import Typist from 'react-typist';

const Main = () =>
  <div style={{ height: '100%' }} className="row justify-content-center">
    <div className="col align-self-center">
      <Typist>
        <span className="mainText">David Kim is a web developer living and working in Toronto.</span>
        <br />
        <span className="mainText">He worked as a web developer for 2 years.</span>
        <br />
        <span className="mainText">He has passion in software development.</span>
        <br />
        <span className="mainText">Also, he is positive, analytical, self-motivated, and a fast learner.</span>
        <Typist.Delay ms={500} />
      </Typist>
    </div>
  </div>;

export default Main;
