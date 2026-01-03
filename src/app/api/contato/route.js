import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { nome, email, mensagem } = await request.json();

    if (!nome || !email || !mensagem) {
      return new Response(
        JSON.stringify({ error: "Dados incompletos" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Site Igreja" <${process.env.EMAIL_USER}>`,
      to: "fatimadionisia@gmail.com",
      replyTo: email,
      subject: "Mensagem enviada pelo site",
      html: `
        <h3>Nova mensagem do site</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem.replace(/\n/g, "<br />")}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar email:", error);

    return new Response(
      JSON.stringify({ error: "Erro ao enviar mensagem" }),
      { status: 500 }
    );
  }
}
