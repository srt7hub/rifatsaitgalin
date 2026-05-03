import { motion } from 'framer-motion';
import { Zap, ArrowDown } from 'lucide-react';
import { InfiniteGridBackground } from './ui/the-infinite-grid';

const easeOutQuint = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <InfiniteGridBackground>
      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10 relative mt-20 lg:mt-0">
        
        {/* Левая часть: Изображение (5 колонок) */}
        <motion.div 
          className="lg:col-span-5 relative order-2 lg:order-1 flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: easeOutQuint, delay: 0.2 }}
        >
          {/* Контейнер для фото с маской/градиентом внизу, чтобы плавно растворяться в фоне */}
          <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[2rem] overflow-hidden group">
            {/* 
              Здесь предполагается твоя фотография.
              Так как фон у неё белый, она идеально сольется с нашим очень светлым фоном интерфейса.
              Загрузи фото в папку public с названием 'avatar.png'
            */}
            <img 
              src="avatar.png" 
              alt="Саитгалин Рифат" 
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Плавный градиент для смягчения нижней части фото */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent opacity-80"></div>
          </div>

          {/* Glassmorphism карточка плавающая поверх фото */}
          <motion.div 
            className="absolute -bottom-6 -right-6 lg:-right-12 glass p-5 rounded-2xl shadow-xl shadow-black/5 max-w-[220px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: easeOutQuint }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                <Zap size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Статус</p>
                <p className="text-sm font-medium">Открыт к проектам</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Правая часть: Типографика (7 колонок) */}
        <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2 z-20">
          
          {/* Роли (Eyebrow tags) */}
          <motion.div
            className="flex flex-wrap items-center gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOutQuint, delay: 0.05 }}
          >
            {['Студент', 'Разработчик', 'Спортсмен', 'Танцор'].map((role, idx) => (
              <motion.span 
                key={role}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: easeOutQuint, delay: 0.1 + idx * 0.1 }}
                className="px-3 md:px-4 py-1.5 rounded-full bg-white/80 border border-neutral-200/60 backdrop-blur-md text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-500 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] cursor-default hover:text-neutral-900 transition-colors"
              >
                {role}
              </motion.span>
            ))}
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-[5rem] leading-[1.05] font-semibold tracking-tight text-neutral-900 mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOutQuint, delay: 0.2 }}
          >
            Привет, я <br className="hidden md:block"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500">
              Саитгалин Рифат.
            </span>
          </motion.h1>

          <motion.div 
            className="flex flex-col gap-3 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOutQuint, delay: 0.3 }}
          >
            <p className="text-lg md:text-xl text-neutral-500 font-light max-w-2xl leading-relaxed">
              Студент <span className="font-medium text-neutral-700">Уфимского Университета Науки и Технологии</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOutQuint, delay: 0.3 }}
          >
            <a href="#about" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-all group w-fit shadow-lg shadow-neutral-900/10">
              Смотреть, чем я занимаюсь 
              <ArrowDown size={18} className="transform group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </InfiniteGridBackground>
  );
}
