import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mailAdapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "e7f8f5b527a4b3",
        pass: "c0103f308dd8d4"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
            from: 'Equipe FeedGet <helloworld@feedget.com>',
            to: 'João Alfredo <joaoalfredopires.prof@gmail.com>',
            subject,
            html: body,
        })    
    };
        
}
