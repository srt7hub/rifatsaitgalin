import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const roles = [
  {
    id: '01',
    title: 'Разработка',
    description: 'Создаю цифровые продукты: сайты, ботов и mini apps. Настраиваю CRM и автоматизирую процессы.',
    image: 'public/images/rasrabotka.jpg',
  },
  {
    id: '02',
    title: 'Танцы',
    description: 'С 3 лет в народных башкирских танцах. Более 50 танцев, участие в 20+ ансамблях, победитель конкурсов.',
    image: 'public/images/dance.jpg', // Abstract energetic/dance vibe
  },
  {
    id: '03',
    title: 'Спорт',
    description: 'Волейбол, футбол, баскетбол. Дисциплина и командная работа.',
    image: 'public/images/sport.jpg', // Volleyball
  },
  {
    id: '04',
    title: 'Работа',
    description: 'Помогаю людям получать государственные субсидии. Работаю в отделе информационных технологий ГБУЗ РКПЦ.',
    image: 'public/images/rabota.jpg', // Hospital / Architecture abstract
  }
];

const easeOutQuint = [0.22, 1, 0.36, 1];

export default function RolesSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // Начинаем отслеживать, когда верх компонента касается верха вьюпорта,
    // и заканчиваем, когда низ компонента касается низа вьюпорта.
    offset: ["start start", "end end"]
  });

  const [activeIndex, setActiveIndex] = useState(0);

  // Обновляем активный индекс на основе прогресса скролла
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 4 роли = 0..0.25, 0.25..0.5 и т.д.
    const index = Math.min(Math.floor(latest * roles.length), roles.length - 1);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  return (
    <section ref={targetRef} id="about" className="relative h-[400vh] bg-[#0A0A0A]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4 md:px-8">
        
        {/* Главный визуальный контейнер */}
        <div className="relative w-full max-w-[1440px] h-[85vh] md:h-[80vh] flex flex-col justify-end pb-10 md:pb-16 px-6 md:px-12 overflow-hidden rounded-[2rem] border border-white/5 shadow-2xl bg-neutral-900">
          
           {/* Фон: переключающиеся изображения */}
           {roles.map((role, idx) => (
             <div 
               key={role.id}
               className={cn(
                 "absolute inset-0 w-full h-full transition-all duration-1000 ease-[0.22,1,0.36,1]",
                 activeIndex === idx ? "opacity-100 scale-100 filter-none" : "opacity-0 scale-105 blur-[8px]"
               )}
             >
                <img src={role.image} alt={role.title} className="w-full h-full object-cover opacity-80" />
                {/* Градиенты для читаемости текста */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                <div className="absolute inset-0 bg-black/20" /> {/* Базовое затемнение */}
             </div>
           ))}

           {/* Контент поверх изображения */}
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
              
              {/* Левая часть: текстовый контент */}
              <div className="lg:col-span-8 overflow-hidden pt-10">
                 <AnimatePresence mode="wait">
                    <motion.div
                       key={activeIndex}
                       initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                       animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                       exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
                       transition={{ duration: 0.6, ease: easeOutQuint }}
                       className="flex flex-col gap-4"
                    >
                       <span className="text-white/60 font-mono text-sm md:text-base tracking-widest uppercase flex items-center gap-4">
                         <span className="w-8 h-[1px] bg-white/30" />
                         роль {roles[activeIndex].id}
                       </span>
                       <h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-none drop-shadow-lg">
                         {roles[activeIndex].title}
                       </h2>
                       <p className="text-lg md:text-2xl text-white/80 font-light max-w-2xl text-balance mt-2 leading-relaxed drop-shadow-md">
                         {roles[activeIndex].description}
                       </p>
                    </motion.div>
                 </AnimatePresence>
              </div>

              {/* Правая часть: Микро-навигация и индикатор прогресса */}
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                 <div className="flex flex-col gap-6 items-start lg:items-end">
                    {roles.map((role, idx) => (
                       <div key={role.id} className="relative flex items-center lg:flex-row-reverse gap-4 group">
                          
                          {/* Номер */}
                          <div className={cn(
                             "font-mono text-xs transition-colors duration-500 min-w-6 text-center lg:text-right hidden sm:block",
                             activeIndex === idx ? "text-white" : "text-white/30"
                          )}>
                             {role.id}
                          </div>
                          
                          {/* Индикатор (линия) */}
                          <div className="relative h-[2px] w-8 sm:w-16 bg-white/10 overflow-hidden rounded-full shrink-0">
                             {activeIndex === idx && (
                                <motion.div 
                                   className="absolute inset-0 bg-white"
                                   layoutId="activeRoleIndicator"
                                   transition={{ duration: 0.6, ease: easeOutQuint }}
                                />
                             )}
                          </div>
                          
                          {/* Название */}
                          <span className={cn(
                             "text-sm md:text-base font-medium transition-colors duration-500 whitespace-nowrap lg:text-right",
                             activeIndex === idx ? "text-white drop-shadow-md" : "text-white/30"
                          )}>
                             {role.title}
                          </span>
                       </div>
                    ))}
                 </div>
              </div>

           </div>
        </div>
      </div>
    </section>
  )
}
