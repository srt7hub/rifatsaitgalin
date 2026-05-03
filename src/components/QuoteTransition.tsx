import { motion } from 'framer-motion';
import { InfiniteGridBackground } from './ui/the-infinite-grid';

const easeOutQuint = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    }
  }
};

const lineVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)', scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)', 
    scale: 1,
    transition: { duration: 1.4, ease: easeOutQuint }
  }
};

export default function QuoteTransition() {
  return (
    <InfiniteGridBackground className="py-20 lg:py-32">
      <div className="flex flex-col justify-center items-center w-full h-full px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          className="flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-5xl z-10 pt-20"
        >
          <motion.div variants={lineVariants}>
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] leading-tight font-medium tracking-tight text-neutral-400">
              Все, чем я занимаюсь,
            </h2>
          </motion.div>
          
          <motion.div variants={lineVariants}>
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] leading-tight font-medium tracking-tight text-neutral-400">
              приводит меня
            </h2>
          </motion.div>
          
          <motion.div variants={lineVariants} className="pt-2 md:pt-6">
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] leading-tight font-medium tracking-tight text-neutral-900">
              к <span className="bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 to-neutral-500">созданию.</span>
            </h2>
          </motion.div>
        </motion.div>

        {/* Переход к следующему блоку */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.8, ease: easeOutQuint }}
          className="mt-32 md:mt-48 flex flex-col items-center gap-6"
        >
           {/* Вертикальная линия, направляющая взгляд */}
           <motion.div 
             initial={{ height: 0 }}
             whileInView={{ height: 60 }}
             transition={{ duration: 1, delay: 1, ease: easeOutQuint }}
             className="w-px bg-gradient-to-b from-transparent via-neutral-300 to-neutral-800" 
           />
           
           <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-neutral-900">Что я создаю</h3>
        </motion.div>
      </div>
    </InfiniteGridBackground>
  );
}
