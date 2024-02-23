import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MyMailerService } from './mailer.service';
import { MailerEntrypoint } from './mailer.entrypoint';

@Module({
  controllers: [MailerEntrypoint],
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_ID, // generated ethereal user
          pass: process.env.EMAIL_PASS // generated ethereal password
        },
      },
      defaults: {
        from: `"No-Reply" ${process.env.EMAIL_ID}`,
      },
      template: {
        dir: process.cwd() + '/src/utiles/mailer/template/',
        adapter: new HandlebarsAdapter(), // or new PugAdapter()
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MyMailerService],
  exports: [MyMailerService],
})
export class MyMailerModule {}