export default function validateInfo(values) {
    let errors = {};
  
    if (!values.fullName.trim()) {
      errors.fullName = 'Username required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.Email) {
      errors.Email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.Email = 'Email address is invalid';
    }
    return errors;
}  