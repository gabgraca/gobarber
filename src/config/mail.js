export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};

/** Serviços de envio de email
 * Amazon SES
 * Mailgun
 * Sparkpost
 * Mandril só pra quem usa mailchimp
 * Vamos usa o Mailtrap para ambiente de desenvolvimento
 */
