import bankProject from '../assets/bank_project.png'
import cryptoProject from '../assets/crypto_project.png'
import resumeProject from '../assets/resume_project.png'
import traveloProject from '../assets/travelo_project.png'
export const mainData = {
    bank: { img: bankProject, softColor: 'rgba(170, 204, 200, 0.3)', boldColor: 'rgba(170, 204, 200, 0.5)', title: 'پروژه بانک', text: 'یه پروژه بانک که ای پی ای این پروژه رو استاد عزیزم سال پیش بهم تحویل داد . شیوه کار این پروژه اینجوریه که شما میتونید یه اکانت بسازید و به اون اکانت لاگین کنید و بعدش وام بگیرید (در واقع موجودی حسابتون رو افزایش بدید) بعد میتونید به یه حساب دیگه که توسط شما یا هرکس دیگه ساخته شده یه مبلغی رو واریز کنید و تک تک این تراکنش ها رو تو قسمت تراکنش های من ببینید.', },
    crypto: { img: cryptoProject, softColor: 'rgba(250, 183, 5, 0.3)', boldColor: 'rgba(250, 183, 5, 0.5)', title: 'پروژه کریپتو', text: 'یه قالب برای وبسایت خبری و امار لحضه ای کریپتو که با اچ تی ام ال سی اس اس و بوت استرپ ساخته شده. البته یو ای پروژه مال خودم نیست و از یه وبسایت دیگه الهام گرفتم.', },
    personal: { img: resumeProject, softColor: 'rgba(190, 177, 163, 0.3)', boldColor: 'rgba(190, 177, 163, 0.5)', title: 'پروژه شخصی', text: 'اولین پروژه ای که بعنوان قالب رزومه ای برای خودم ساخته بودم. البته اون دوران فقط طراحی رو بلد بودم و از جاوااسکریپت سردر نمیاوردم. یادمه بعدش تو یه دوراهی افتادم که این قالبو انلاین کنم و به چند تا شرکت درخواست بدم برای کارآموزی یا برم سمت یادگیری جاوااسکریپت و ری اکت که نهایتا گزینه دومو انتخاب کردم.', },
    travelo: { img: traveloProject, softColor: 'rgba(46, 147, 219, 0.3)', boldColor: 'rgba(46, 147, 219, 0.5)', title: 'پروژه گردشگری', text: 'توی این پروژه تمرکز اصلیم روی ارتقا دادن مهارت های طراحی و یادگیری گرید سیستم بود برای همین از هیچ لایبرری و کتابخونه ای استفاده نکردم و تمام این پروژه رو با اچ تی ام ال و سی اس اس خام نوشتم' },

}

export const data = [
    { bg: mainData.bank.softColor, img: bankProject, title: 'پروژه بانک', text: mainData.bank.text },
    { bg: mainData.crypto.softColor, img: cryptoProject, title: 'پروژه کریپتو', text: mainData.crypto.text  },
    { bg: mainData.personal.softColor, img: resumeProject, title: 'پروژه شخصی', text: mainData.personal.text  },
    { bg: mainData.travelo.softColor, img: traveloProject, title: 'پروژه گردشگری', text: mainData.travelo.text  },
]