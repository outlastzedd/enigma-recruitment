import {Resend} from 'resend';
import {EmailTemplate, EmailTemplateHTML} from "enigma/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, name: string, token: string) => {
    // TODO: Replace with enigma-recruitment.com when in production
    const confirmLink = `http://localhost:3000/login/new-verification?token=${token}`;
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Enigma Recruitment - Verify your email",
        react: await EmailTemplate({name: name, confirmLink: confirmLink})
    })
}