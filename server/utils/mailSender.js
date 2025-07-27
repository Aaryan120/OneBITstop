import nodemailer from "nodemailer";
import dotenv from "dotenv";
import toast from "react-hot-toast";
dotenv.config();

const mailSender = async (email,title,body) =>{
    try{
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        })

        let info = await transporter.sendMail({
            from:"OneBITstop - by BITians",
            to:`${email}`,
            subject:`${title}`,
            html:`${body}`,
        })
        return info;
    }
    catch(error){
        // console.log(error);
        toast.error("Error sending email");
    }
}


export default mailSender;