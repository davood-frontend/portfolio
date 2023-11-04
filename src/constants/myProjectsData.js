import bankProject from '../assets/bank_project.png'
import cryptoProject from '../assets/crypto_project.png'
import resumeProject from '../assets/resume_project.png'
import traveloProject from '../assets/travelo_project.png'
export const mainData = {
    bank: {
        img: bankProject, href: 'https://davood-frontend.github.io/bank', softColor: 'rgba(170, 204, 200, 0.3)', boldColor: 'rgba(170, 204, 200, 0.5)', title: 'پروژه بانک', text: `یه پروژه بانک که بیس این پروژه با React + Mui ساخته شده.<br />
        داخل این پروژه برای اعتبار سنجی فرم ها از Formik & Yup استفاده شده و از Jwt هم برای احراز هویت کاربران کمک گرفته شده.<br />
        شیوه کار این پروژه به این صورته که شما یک اکانت میسازید و به اون اکانت لاگین میکنید. حالا میتونید از طریق درخواست وام موجودی حسابتونو افزایش بدین و بعد برای حساب دیگه ای که توسط خودتون یا شخص دیگه ای ساخته شده مبلغی رو واریز کنید. در ضمن میتونید تمامی این تراکنش ها رو توی قسمت تراکنش های من ببینید.
        `,
    },
    crypto: { img: cryptoProject, href: 'https://davood-frontend.github.io/cryptoCurrency', softColor: 'rgba(250, 183, 5, 0.3)', boldColor: 'rgba(250, 183, 5, 0.5)', title: 'پروژه کریپتو', text: 'یه قالب برای وبسایت خبری و امار لحضه ای کریپتو که با اچ تی ام ال سی اس اس و بوت استرپ ساخته شده. البته یو ای پروژه مال خودم نیست و از یه وبسایت دیگه الهام گرفتم.', },
    personal: { img: resumeProject, href: ' https://davood-frontend.github.io/oldResume', softColor: 'rgba(190, 177, 163, 0.3)', boldColor: 'rgba(190, 177, 163, 0.5)', title: 'پروژه شخصی', text: 'اولین پروژه ای که بعنوان قالب رزومه ای برای خودم ساخته بودم. البته اون دوران فقط طراحی رو بلد بودم و از جاوااسکریپت سردر نمیاوردم. یادمه بعدش تو یه دوراهی افتادم که این قالبو انلاین کنم و به چند تا شرکت درخواست بدم برای کارآموزی یا برم سمت یادگیری جاوااسکریپت و ری اکت که نهایتا گزینه دومو انتخاب کردم.', },
    travelo: { img: traveloProject, href: 'https://davood-frontend.github.io/persianTravelo', softColor: 'rgba(46, 147, 219, 0.3)', boldColor: 'rgba(46, 147, 219, 0.5)', title: 'پروژه گردشگری', text: 'توی این پروژه تمرکز اصلیم روی ارتقا دادن مهارت های طراحی و یادگیری گرید سیستم بود برای همین از هیچ لایبرری و کتابخونه ای استفاده نکردم و تمام این پروژه رو با اچ تی ام ال و سی اس اس خام نوشتم' },

}

export const data = [
    { bg: mainData.bank.softColor, img: bankProject, title: 'پروژه بانک', text: mainData.bank.text },
    { bg: mainData.crypto.softColor, img: cryptoProject, title: 'پروژه کریپتو', text: mainData.crypto.text },
    { bg: mainData.personal.softColor, img: resumeProject, title: 'پروژه شخصی', text: mainData.personal.text },
    { bg: mainData.travelo.softColor, img: traveloProject, title: 'پروژه گردشگری', text: mainData.travelo.text },
]