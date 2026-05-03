import { CircularTestimonials } from "./ui/circular-testimonials";

const devProjects = [
  {
    name: "Сервис аренды квартир",
    designation: "Платформа для посуточной аренды жилья",
    quote: "Разрабатываю сервис для владельцев квартир, который автоматизирует весь процесс аренды — от общения с клиентом до заселения. Позволяет работать без менеджера и упрощает управление бизнесом.",
    src: "public/images/smart.jpg"
  },
  {
    name: "Telegram-бот ассистент",
    designation: "Автоматизация задач",
    quote: "Персональный инструмент для повседневных задач. Интегрирован с календарём: напоминает, фиксирует события и помогает не терять важную информацию.",
    src: "public/images/Chatbot Chat Message.jpg"
  },
  {
    name: "Mini App квест-игра",
    designation: "Интерактив внутри Telegram",
    quote: "Квест-игра для именинницы и её друзей. Пользователи проходят сценарий прямо в Telegram, взаимодействуя с игровыми механиками и заданиями.",
    src: "public/images/miniaps.jpg"
  },
  {
    name: "Бот для Авито",
    designation: "Автоматическое общение",
    quote: "Автоматизирует ответы клиентам, обрабатывает заявки и помогает не терять лиды, снижая нагрузку на ручную коммуникацию.",
    src: "public/images/chat-bot-dlya-avito-600x434.jpg"
  },
  {
    name: "Сервис рассылок",
    designation: "Массовые сообщения",
    quote: "Платформа для массовых рассылок с возможностью планирования и базовой аналитики.",
    src: "public/images/sms.png"
  },
  {
    name: "Система управления доступом",
    designation: "Управление шлагбаумом",
    quote: "Система, позволяющая открывать шлагбаум через Telegram или звонок с одного номера. Упростили доступ и убрали необходимость регистрировать пользователей.",
    src: "public/images/vorota.jpg"
  }
];

const entrepreneurshipProjects = [
  {
    name: "Кинотеатр под открытым небом",
    designation: "Организовали летние показы фильмов в Аскарово, продумали формат, площадку и привлекли зрителей.",
    quote: "Организовали летние показы фильмов в Аскарово, продумали формат, площадку и привлекли зрителей.",
    src: "public/images/kino.JPG"
  },
  {
    name: "Продажа тюльпанов",
    designation: "Сезонный бизнес к 8 марта",
    quote: "Сезонный бизнес к 8 марта. Закупка, упаковка, продажи — проект развивается уже второй год.",
    src: "public/images/Снимок экрана 2026-05-04 002241.jpg"
  },
  {
    name: "Соцконтракт",
    designation: "Государственная поддержка",
    quote: "Получил 350 000 ₽ от государства на развитие и теперь помогаю другим людям проходить этот путь и получать поддержку.",
    src: "public/images/350000.PNG"
  },
  {
    name: "Танцы на мероприятиях",
    designation: "Выступления",
    quote: "Выступаем на свадьбах и событиях, превращая народные танцы в часть современной программы.",
    src: "public/images/dance$$$.PNG"
  }
];

const activityProjects = [
  {
    name: "Музыкальная игра «ЙырАлыш»",
    designation: "Интерактив",
    quote: "Разработал игру-презентацию — аналог «Угадай мелодию» на башкирском языке, используем на мероприятиях.",
    src: "public/images/pesni.JPG"
  },
  {
    name: "Квиз-игра",
    designation: "Развлечение",
    quote: "Создал интерактивную игру «угадай фильм по кадру», которую проводим в формате развлечения для аудитории.",
    src: "public/images/kinokvis.jpg"
  },
  {
    name: "Благотворительный проект",
    designation: "Помощь",
    quote: "Участвуем в помощи детским домам: сбор средств, выезды и поддержка.",
    src: "public/images/irandek.jpg"
  },
  {
    name: "Мероприятия",
    designation: "События",
    quote: "Организация квартирников, гитарников и встреч — создание живой атмосферы и общения.",
    src: "public/images/kvartirnik.jpg"
  },
  {
    name: "Организация встречи в Уфе",
    designation: "Ответственный",
    quote: "Один из организаторов встречи земляков, отвечал за концертную программу.",
    src: "public/images/24gkz.JPG"
  },
  {
    name: "Самоварная дискотека",
    designation: "Масштабное событие",
    quote: "Организовал массовое мероприятие в Абзелиловском районе с аудиторией более 5000 человек.",
    src: "public/images/rita.JPG"
  }
];

export default function ProjectsSection() {
  return (
    <div id="projects" className="flex flex-col">
      {/* 1. Разработка (Светлый блок) */}
      <section className="bg-[#FAFAFA] py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-4 tracking-tight">Разработка</h2>
          <p className="text-lg md:text-xl text-neutral-500 font-light max-w-2xl text-balance">
            Создаю цифровые продукты и автоматизирую процессы. От Telegram-ботов до полноценных платформ.
          </p>
        </div>
        
        <div className="px-4 lg:px-8">
          <CircularTestimonials
            testimonials={devProjects}
            autoplay={false}
            colors={{
              name: "#0a0a0a",
              designation: "#737373", // text-neutral-500
              testimony: "#404040", // text-neutral-700
              arrowBackground: "#F5F5F5",
              arrowForeground: "#171717",
              arrowHoverBackground: "#E5E5E5",
            }}
            fontSizes={{
              name: "2rem",
              designation: "1rem",
              quote: "1.125rem",
            }}
          />
        </div>
      </section>

      {/* 2. Предпринимательство (Тёмный блок) */}
      <section className="bg-neutral-950 text-white py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">Предпринимательство</h2>
          <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl text-balance">
            Запускаю проекты и тестирую идеи в реальной жизни, пробуя разные форматы и ниши.
          </p>
        </div>
        
        <div className="px-4 lg:px-8">
          <CircularTestimonials
            testimonials={entrepreneurshipProjects}
            autoplay={false}
            colors={{
              name: "#fafafa",         // text-white
              designation: "#a3a3a3",  // text-neutral-400
              testimony: "#e5e5e5",    // text-neutral-200
              arrowBackground: "#171717",
              arrowForeground: "#fafafa",
              arrowHoverBackground: "#262626",
            }}
            fontSizes={{
              name: "2rem",
              designation: "1rem",
              quote: "1.125rem",
            }}
          />
        </div>
      </section>

      {/* 3. Активная деятельность (Светлый блок) */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-4 tracking-tight">Активная деятельность</h2>
          <p className="text-lg md:text-xl text-neutral-500 font-light max-w-2xl text-balance">
            Организую, создаю и участвую в проектах, объединяющих людей и создающих живое сообщество.
          </p>
        </div>
        
        <div className="px-4 lg:px-8">
          <CircularTestimonials
            testimonials={activityProjects}
            autoplay={false}
            colors={{
              name: "#0a0a0a",
              designation: "#737373", // text-neutral-500
              testimony: "#404040", // text-neutral-700
              arrowBackground: "#F5F5F5",
              arrowForeground: "#171717",
              arrowHoverBackground: "#E5E5E5",
            }}
            fontSizes={{
              name: "2rem",
              designation: "1rem",
              quote: "1.125rem",
            }}
          />
        </div>
      </section>
    </div>
  );
}
