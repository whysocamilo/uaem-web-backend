import { transport } from './../config/mailer';
import { IMailOptions } from './../interfaces/email.interface';

class MailService {
  send(mail: IMailOptions) {
    return new Promise((resolve, reject) => {
      transport.sendMail(
        {
          from: '"Tienda UAEM" <uaemstore@gmail.com>', // sender address
          to: mail.to, // list of receivers
          subject: mail.subject, // Subject line
          html: mail.html, // html body
        },
        (error, _) => {
          error
            ? reject({
                status: false,
                message: error,
              })
            : resolve({
                status: true,
                message: 'Email enviado a ' + mail.to,
                mail,
            });
        }
      );
    });
  }
}

export default MailService;
