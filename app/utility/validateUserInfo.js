export default class ValidateUserInfo {
  constructor(props) {
    this.props = props;
  }
  isValidEmail = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      return false;
    } else {
      return true;
    }
  };

  isValidPassword(password) {
    if (password.length > 6) {
      return true;
    } else {
      return false;
    }
  }
}
