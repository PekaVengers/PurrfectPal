export default function isStrongPassword(password) {
    // Minimum length requirement
    if (password.length < 8) {
      return false;
    }
  
    // Regular expression for at least one uppercase letter
    const uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(password)) {
      return false;
    }
  
    // Regular expression for at least one lowercase letter
    const lowercaseRegex = /[a-z]/;
    if (!lowercaseRegex.test(password)) {
      return false;
    }
  
    // Regular expression for at least one digit
    const digitRegex = /\d/;
    if (!digitRegex.test(password)) {
      return false;
    }
  
    // You can add more rules such as special characters, etc.
  
    // If all conditions are met, the password is considered strong
    return true;
  }
  