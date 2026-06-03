export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="fixed top-0 left-0 z-50 w-full bg-blue-900/95 text-white shadow-lg">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
          <h1 className="text-xl font-bold md:text-2xl">Math Practice</h1>

          <nav className="hidden gap-8 text-lg md:flex">
            <a href="#home" className="hover:text-blue-200">Главная</a>
            <a href="#about" className="hover:text-blue-200">О проекте</a>
            <a href="#tasks" className="hover:text-blue-200">Задачи</a>
            <a href="#methods" className="hover:text-blue-200">Методы</a>
            <a href="#contacts" className="hover:text-blue-200">Контакты</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-200 px-5 pt-36 pb-16 text-center"
      >
        <h2 className="max-w-5xl text-4xl font-extrabold leading-tight md:text-6xl">
          Использование практико-ориентированных задач на уроках математики
        </h2>

        <p className="mt-8 max-w-3xl text-xl text-gray-700 md:text-2xl">
          Современные методы обучения математике для учащихся основной школы
        </p>

        <img
          src="/math1.jpg"
          alt="Математика"
          className="mt-8 w-72 rounded-3xl shadow-xl md:w-96"
        />

        <a
          href="#tasks"
          className="mt-10 inline-block rounded-xl bg-blue-900 px-8 py-4 text-xl text-white transition hover:scale-105 hover:bg-indigo-700"
        >
          Изучить материалы
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="w-full bg-white px-5 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl">
            О проекте
          </h2>

          <p className="text-center text-xl leading-9 text-gray-700 md:text-2xl md:leading-10">
            Данный образовательный ресурс предназначен для демонстрации методов
            применения практико-ориентированных задач на уроках математики в
            основной школе. Практико-ориентированный подход позволяет повысить
            мотивацию учащихся, развить логическое мышление и показать связь
            математики с реальной жизнью.
          </p>
        </div>
      </section>

      {/* GOALS */}
      <section id="goals" className="w-full bg-blue-50 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-20 text-center text-4xl font-bold md:text-5xl">
            Цели и задачи
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            {[
              ["Повышение интереса", "Формирование устойчивого интереса учащихся к изучению математики через решение жизненных задач."],
              ["Практические навыки", "Развитие навыков применения математических знаний в реальных ситуациях."],
              ["Логическое мышление", "Развитие аналитического и логического мышления учащихся основной школы."],
              ["Связь с реальной жизнью", "Демонстрация практической значимости математики в повседневной деятельности."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl bg-white p-10 shadow-lg">
                <h3 className="mb-6 text-3xl font-bold">{title}</h3>
                <p className="text-xl leading-8 text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TASKS */}
      <section id="tasks" className="w-full bg-white px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-20 text-center text-4xl font-bold md:text-5xl">
            Примеры практико-ориентированных задач
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["Покупка телевизора", "Телевизор стоит 35 000 рублей. Магазин предоставляет скидку 15%. Необходимо определить итоговую стоимость покупки."],
              ["Площадь школьного двора", "Двор имеет длину 60 метров и ширину 40 метров. Определите его площадь."],
              ["Поездка на автобусе", "Автобус движется со скоростью 60 км/ч. Найдите время поездки на расстояние 180 км."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl bg-blue-50 p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <h3 className="mb-4 text-2xl font-bold">{title}</h3>
                <p className="text-lg text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODS */}
      <section id="methods" className="w-full bg-slate-50 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-20 text-center text-4xl font-bold md:text-5xl">
            Методы обучения
          </h2>

          <div className="grid gap-8 md:grid-cols-4">
            {["Проблемное обучение", "Проектная деятельность", "Групповая работа", "Игровые технологии"].map((item) => (
              <div key={item} className="rounded-3xl bg-white p-8 text-center shadow-lg">
                <h3 className="text-2xl font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="w-full bg-white px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-20 text-center text-4xl font-bold md:text-5xl">
            Новости и события
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["Олимпиада по математике", "Подготовка учащихся к муниципальному этапу олимпиады."],
              ["Новые методики обучения", "Использование практических задач на уроках математики."],
              ["Конференция педагогов", "Обсуждение современных подходов к обучению."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl bg-blue-50 p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-bold">{title}</h3>
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="w-full bg-slate-50 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-20 text-center text-4xl font-bold md:text-5xl">
            Отзывы педагогов
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["Практические задачи значительно повысили интерес учеников к предмету.", "Учитель математики"],
              ["Ученики стали лучше понимать применение математики в жизни.", "Методист школы"],
              ["Практико-ориентированный подход показывает отличные результаты.", "Преподаватель"],
            ].map(([text, author]) => (
              <div key={author} className="rounded-3xl bg-white p-8 shadow-lg">
                <p className="italic">“{text}”</p>
                <h4 className="mt-4 font-bold">{author}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="w-full bg-blue-900 px-5 py-24 text-white md:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-10 text-4xl font-bold md:text-5xl">Контакты</h2>
          <p className="mb-4 text-xl">Email: info@math-practice.ru</p>
          <p className="mb-4 text-xl">Телефон: +7 (999) 123-45-67</p>
          <p className="text-xl">Республика Тыва, г. Кызыл</p>
        </div>
      </section>

      {/* FEEDBACK */}
      <section className="w-full bg-white px-5 py-24 md:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-4xl font-bold md:text-5xl">
            Обратная связь
          </h2>

          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Ваше имя" className="rounded-xl border p-4" required />
            <input type="email" placeholder="Ваш Email" className="rounded-xl border p-4" required />
            <textarea placeholder="Ваше сообщение" rows={5} className="rounded-xl border p-4" required />

            <button type="submit" className="rounded-xl bg-blue-900 py-4 text-white transition hover:bg-indigo-700">
              Отправить
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 py-8 text-center text-white">
        <p>© 2026 Использование практико-ориентированных задач на уроках математики</p>
      </footer>
    </main>
  );
}