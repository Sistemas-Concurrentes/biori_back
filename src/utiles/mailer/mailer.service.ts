
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MyMailerService {
  constructor(private readonly mailerService: MailerService) { }
  sendVerificationCode(email:string, verificationCode: string): void {
    this
      .mailerService
      .sendMail({
        to: email, // List of receivers email address
        subject: 'Código de confirmación de registro',
        template: 'index', // The `.pug` or `.hbs` extension is appended automatically.
        context: {  // Data to be sent to template engine.
          code: verificationCode,
        },
      })
      .then((success) => {
        console.log(success)
      })
      .catch((err) => {
        console.log(err)
      });
  }

}