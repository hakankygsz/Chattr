import { LuCrown, LuHammer, LuRocket } from 'react-icons/lu';

const subscriptionPlans = [
    {
        planTitle: "Başlangıç",
        planDescription: "Küçük ölçekli web projeleri ve temel düzeydeki iş ihtiyaçları için ideal çözüm.",
        planIcon: <LuHammer />,
        planColor: "yellow",
        isPreferredPlan: false,
        startRate: '$30',
        planFeatures: [
            "1. Temel HTML, CSS ve JavaScript entegrasyonu",
            "2. Basit ve kullanıcı dostu responsive tasarım",
            "3. Temel SEO optimizasyonu",
        ]
    },
    {
        planTitle: "Standart",
        planDescription: "Orta ölçekli projeler ve işlerinizi hızlı bir şekilde dijital dünyaya taşımak için tasarlanmış bir plan.",
        planIcon: <LuRocket />,
        planColor: "blue",
        isPreferredPlan: true,
        startRate: '$50',
        planFeatures: [
            "1. React tabanlı dinamik web uygulamaları geliştirme",
            "2. RESTful API entegrasyonu",
            "3. Cihaz uyumlu responsive tasarım",
            "4. Kullanıcı kimlik doğrulama ve yetkilendirme",
            "5. Firebase ve MySQL veritabanı yönetimi",
            "6. Proje yönetimi ve ekip işbirliği araçları desteği",
        ]
    },
    {
        planTitle: "Profesyonel",
        planDescription: "Özel çözümler, büyük ölçekli projeler ve yüksek performans gerektiren uygulamalar için kapsamlı bir hizmet.",
        planIcon: <LuCrown />,
        planColor: "red",
        startRate: '$100',
        isPreferredPlan: false,
        planFeatures: [
            "1. Full-stack web uygulama geliştirme",
            "2. Gelişmiş API entegrasyonu ve mikroservis mimarisi",
            "3. Her cihazda mükemmel uyum sağlayan responsive tasarım",
            "4. Performans iyileştirmeleri ve güvenlik önlemleri",
            "5. CI/CD entegrasyonu ve sürüm kontrol yönetimi",
        ]
    }
]

const getColorClass = (color: string) => {
    const colorClass = `border-${color}-500 dark:border-${color}-600 text-${color}-500`;

    return {
        border: colorClass,
        text: `text-${color}-500`,
        button: `border-${color}-500 dark:bg-${color}-600 dark:hover:bg-black hover:bg-neutral-50 transition duration-300 ease-in-out`,
        icon: `text-${color}-500`,
    };
};

const PlanItem = ({ plan }: { plan: typeof subscriptionPlans[0] }) => {
    const { border, text, button, icon } = getColorClass(plan.planColor);

    return (
        <div className={`flex flex-col justify-between p-6 md:p-8 h-auto w-full bg-white dark:bg-black/25 border rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out transform ${text} ${plan.isPreferredPlan ? "scale-105 transform" : ""}`}>
            <div className='flex flex-col'>
                <div className='flex items-center gap-4 mb-6'>
                    <span className={`text-3xl sm:text-4xl ${icon}`}>{plan.planIcon}</span>
                    <h2 className={`text-2xl sm:text-4xl font-semibold ${text}`}>{plan.planTitle}</h2>
                </div>
                <p className="text-neutral-700 dark:text-neutral-200 text-base lg:text-lg leading-7 mb-6">
                    {plan.planDescription}
                </p>

                <ul className='flex flex-col gap-2'>
                    {plan.planFeatures.map((feature, index) => (
                        <li key={index} className={`relative pl-4 text-sm lg:text-[14px] text-neutral-800 dark:text-neutral-100`}>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div className='flex flex-col w-full mt-8'>
                <div className='flex items-center justify-between mb-4'>
                    <div className='flex flex-col'>
                        <h3 className='text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white'>{plan.startRate}</h3>
                        <span className='text-sm text-neutral-600 dark:text-neutral-400'>Fiyat Sadece Temsilidir</span>
                    </div>
                    {plan.isPreferredPlan && (
                        <span className={`text-neutral-800 dark:text-neutral-200 text-sm font-semibold py-1 px-3 border ${border} rounded-full`}>
                            Tercih Edilen
                        </span>
                    )}
                </div>
                <button
                    onClick={() => location.href = `contact?title=${plan.planTitle.toLowerCase()} Planı&message=${encodeURIComponent(`${plan.planTitle} planına ilişkin detayları öğrenmek ve iş birliği imkanlarını değerlendirmek istiyorum.`)}`}
                    className={`py-3 px-6 rounded-xl font-medium border ${border} ${button} hover:scale-105 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition duration-300`}
                >
                    Daha Fazla
                </button>
            </div>
        </div>
    );
};

const Plans = () => {
    return (
        <section className='relative w-full min-h-screen flex flex-col items-center justify-between py-24 px-4 lg:px-0'>
            <div className="mx-auto max-w-screen-2xl flex flex-col items-center w-full">
                <h2 className='text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight text-neutral-900 dark:text-white'>
                    Planlar
                </h2>
                <p className='max-w-3xl text-lg sm:text-xl font-light text-center leading-8 text-neutral-700 dark:text-neutral-300'>
                    Her seviyeye uygun planlarımızla yazılım geliştirme süreçlerinizi daha verimli ve sürdürülebilir hale getirin.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 w-full px-4 lg:px-0">
                    {subscriptionPlans.map((plan, i) => (
                        <PlanItem key={i} plan={plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Plans;
