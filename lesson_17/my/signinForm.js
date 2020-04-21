export class SignInForm {
  constructor(root) {
    this.root = root;
  }
}

render() {
  this.form = document.createElement('form')
  this.email = document.createElement('input')
  this.password = document.createElement('input')

  this.email.type = 'email'
  this.password.type = 'password'

  this.form.append(this.email)
  this.form.append(this.email)


}