export class EmailElement {
  name: string;
  email: string;
  title: string;
  message: string;

  constructor(name: string, email: string, title: string, message: string) {
    this.name = name;
    this.email = email;
    this.message = message;
    this.title = title;
  }
}
