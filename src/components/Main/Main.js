import React from 'react';
import Modal from 'react-modal';
import '../../styles/main.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

class Main extends React.Component {
  state = {
    modal: false,
    email: '',
    message: '',
  };

  openModal = () => this.setState({ modal: true });

  closeModal = () => {
    this.setState({
      modal: false,
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleTextAreaChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <header className="header">
        <div className="header__textbox">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Hi</span>
            <span className="heading-primary--sub">I'M DAVID!</span>
          </h1>
          <div className="heading-icons">
            <a
              href="https://www.linkedin.com/in/inkoog-kim/"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--blue button--animated"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://github.com/goginim"
              className="button button--purple button--animated"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
            >
              <i className="fab fa-github" />
            </a>
            <div
              className="button button--orange button--animated"
              title="Contact"
              onClick={this.openModal}
            >
              <i className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.modal}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="row">
            <div className="col-12 pt-lg-3 mb-4 px-4 contact">
              <h1 id="contact__heading-primary">EMAIL ME</h1>
              <h2 id="contact__heading-secondary">
                <div>For business inquiries or any other inquiries,</div>
                <div>please use this form.</div>
              </h2>
              <form
                className="contact__form"
                method="POST"
                action="https://formspree.io/david.ingook@gmail.com"
              >
                <input type="email" name="email" placeholder="Your email" />
                <textarea name="message" placeholder="Your message" />
                <button type="submit" className="btn btn-sm btn-outline-secondary">
                  Send
                </button>
              </form>
            </div>
          </div>
        </Modal>
      </header>
    );
  }
}

export default Main;
