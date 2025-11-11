import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_iF3nmG8L_5PEYqbj1K5GWWJdiaqfQc3ME');

export async function POST(req: NextRequest) {
  try {
    

    const { name, email, message, website } = await req.json();

    // Honeypot check - if website field is filled, it's likely spam
    if (website && website.trim() !== '') {
      console.log('Spam attempt detected - honeypot triggered');
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }


    // Check for spam keywords
    const spamKeywords = ['viagra', 'casino', 'lottery', 'winner', 'urgent', 'click here', 'free money'];
    const lowerMessage = message.toLowerCase();
    const hasSpamKeywords = spamKeywords.some(keyword => lowerMessage.includes(keyword));
    
    if (hasSpamKeywords) {
      console.log('Spam attempt detected - spam keywords found');
      return NextResponse.json({ error: 'Message contains inappropriate content' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // ubah jika sudah verifikasi domain
      to: ['muliachristiangomgompsimanjuntak@mail.ugm.ac.id'],
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully', id: data?.id }, { status: 200 });
  } catch (err) {
    console.error('Server Error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
