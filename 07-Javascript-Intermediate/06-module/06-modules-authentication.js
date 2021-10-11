const emailValidator = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]*/;
const pwValidator = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

export default function validateLoginData(email, password) {
    let message = ""
    if (!email.match(emailValidator)){
        message = alert('tolong masukkan email yang valid')
    }
    else if(!password.match(pwValidator)){
        message = alert('tolong masukkan password sesuai ketentuan')
    }
    else if (password.match(pwValidator)) {
        message = alert('Welcome to The Jungle')
    }
    return message
}