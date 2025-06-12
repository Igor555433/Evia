import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle,
  TrendingUp,
  Users,
  Calendar,
  Bot,
  Target,
  Zap,
  Shield,
  ArrowRight,
  BarChart3,
  MessageSquare,
  Settings,
  Clock,
  Star,
  Rocket,
  DollarSign,
} from "lucide-react";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set(),
  );

  const handleTelegramClick = () => {
    window.open("https://t.me/igorgorbulev", "_blank");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 },
    );

    document
      .querySelectorAll("[data-animate]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                EVIA Studio
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Услуги
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Тарифы
              </a>
              <a
                href="#timeline"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Планы
              </a>
              <Button
                className="bg-blue-600 hover:bg-blue-700 rounded-xl px-6 py-2.5 font-medium"
                onClick={handleTelegramClick}
              >
                Начать
              </Button>
            </nav>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="section-container">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="text-gray-900">AI-маркетинг и продажи</span>
              <span className="block text-blue-600 mt-2">под ключ</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Упаковка. Лиды. CRM. Продажи — без участия фаундера
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-lg">
              <div className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-full">
                <TrendingUp className="w-5 h-5 mr-2" />
                Рост продаж в 2-3 раза за 45 дней
              </div>
              <div className="flex items-center bg-green-600 text-white px-6 py-3 rounded-full">
                <Users className="w-5 h-5 mr-2" />
                +30 целевых заявок в месяц
              </div>
              <div className="flex items-center bg-purple-600 text-white px-6 py-3 rounded-full">
                <MessageSquare className="w-5 h-5 mr-2" />
                от 400 до 3000 касаний с ЦА
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Target Audience */}
      <section className="py-24 bg-white" id="audience" data-animate>
        <div className="section-container">
          <div
            className={`transition-all duration-700 ${isVisible("audience") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Кому подойдёт наш продукт
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Вы наш клиент, если вы:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 mb-16">
              <Card className="card-hover border-0 shadow-lg rounded-2xl p-8">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-teal-600" />
                  </div>
                  <CardTitle className="text-2xl">
                    Технический фаундер
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Вы умеете создавать продукт, но маркетинг и продажи не ваша
                    сильна�� сторона
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover border-0 shadow-lg rounded-2xl p-8">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Коуч или ментор</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    У вас есть экспертиза, но нет достаточного количества
                    клиентов
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover border-0 shadow-lg rounded-2xl p-8">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Rocket className="w-10 h-10 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl">
                    Креатор или художник
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Вы создаете что-то аутентичное и вам хочется найти свою
                    аудиторию, кто оценит ваше творчество
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-teal-50 p-8 rounded-2xl mb-16">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-teal-600 mr-3" />
                <h3 className="text-2xl font-bold text-teal-800">
                  На стадии MVP → первые продажи (оборот 0,5-3 млн ₽/год)
                </h3>
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-8">
                Вы сталкиваетесь с этими проблемами:
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <h4 className="text-xl font-semibold mb-2">Хаотичные лиды</h4>
                <p className="text-gray-600">
                  Клиенты приходят случайно из разных каналов
                </p>
              </div>
              <div className="text-center p-6">
                <h4 className="text-xl font-semibold mb-2">
                  Нет системы продаж
                </h4>
                <p className="text-gray-600">Отсутствуют процессы и шаблоны</p>
              </div>
              <div className="text-center p-6">
                <h4 className="text-xl font-semibold mb-2">
                  Ручное управление
                </h4>
                <p className="text-gray-600">Вы тащите продажи на себе</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What You Get */}
      <section className="py-24 bg-gray-50" id="services" data-animate>
        <div className="section-container">
          <div
            className={`transition-all duration-700 ${isVisible("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Что вы получите за 45 дней
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Полная автоматизация маркетинга и продаж на базе ИИ
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: BarChart3,
                  title: "Исследование рынка",
                  desc: "Глубокий анализ вашего целевого рынка и позиционирования",
                },
                {
                  icon: Settings,
                  title: "Бизнес-модель",
                  desc: "Оптимизированная бизнес-модель и потоки доходов",
                },
                {
                  icon: Zap,
                  title: "Упаковка бизнеса",
                  desc: "Сайт, презентация и коммерческие предложения",
                },
                {
                  icon: MessageSquare,
                  title: "AI-воронка в Telegram",
                  desc: "400-3000 целевых касаний в месяц",
                },
                {
                  icon: Bot,
                  title: "Рабочая CRM",
                  desc: "Шаблоны и процессы - без потерянных лидов",
                },
                {
                  icon: TrendingUp,
                  title: "Рост заявок",
                  desc: "+50 целевых заявок в месяц",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="card-hover border-0 shadow-lg rounded-2xl p-6"
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="flex items-center text-xl">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Promise */}
      <section className="py-24 bg-white" id="results" data-animate>
        <div className="section-container">
          <div
            className={`transition-all duration-700 ${isVisible("results") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="max-w-6xl mx-auto text-center">
              <div className="relative mt-5 h-auto"></div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
                Гарантированные результаты за 90 дней
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="text-center border-0 shadow-lg rounded-2xl p-8 bg-blue-50">
                  <CardContent className="pt-6">
                    <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                    <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                      +200%
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Рост выручки</h4>
                    <p className="text-lg text-gray-600">за 45 дней</p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-lg rounded-2xl p-8 bg-green-50">
                  <CardContent className="pt-6">
                    <Users className="w-12 h-12 text-green-600 mx-auto mb-6" />
                    <div className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
                      20-30ч
                    </div>
                    <h4 className="text-xl font-semibold mb-2">
                      Освобождение фаундера
                    </h4>
                    <p className="text-lg text-gray-600">часов/неделю</p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-lg rounded-2xl p-8 bg-purple-50">
                  <CardContent className="pt-6">
                    <Target className="w-12 h-12 text-purple-600 mx-auto mb-6" />
                    <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">
                      +30
                    </div>
                    <h4 className="text-xl font-semibold mb-2">
                      Целевых заявок
                    </h4>
                    <p className="text-lg text-gray-600">/месяц</p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-10 rounded-3xl border border-green-200">
                <div className="flex items-center justify-center mb-6">
                  <Shield className="w-12 h-12 text-green-600 mr-4" />
                  <h3 className="text-3xl md:text-4xl font-bold text-green-800">
                    Гарантия результата
                  </h3>
                </div>
                <p className="text-green-700 text-xl md:text-2xl leading-relaxed">
                  Не получили договорных результатов? Мы продолжим работу
                  бесплатно ИЛИ вернём 100% оплаты.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white" id="pricing" data-animate>
        <div className="section-container">
          <div
            className={`transition-all duration-700 ${isVisible("pricing") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Тарифы
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Выберите подходящий уровень автоматизации для вашего бизнеса
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {[
                {
                  name: "Start",
                  price: "120-150 тыс ₽",
                  description: "Идеально для начала работы с AI-маркетингом",
                  features: [
                    "AI-маркетинг",
                    "База целевых контактов",
                    "Оффер",
                    "Упаковка бизнеса",
                  ],
                  result: "+30 лидов",
                  popular: false,
                },
                {
                  name: "Growth",
                  price: "130-200 тыс ₽",
                  description: "Полная автоматизация CRM и процессов",
                  features: [
                    "CRM-система",
                    "Регламенты и воронки",
                    "Сайт компании",
                    "Всё из тарифа Start",
                  ],
                  result: "x2-3 потенциал прибыли",
                  popular: true,
                },
                {
                  name: "Scale",
                  price: "от 250 тыс ₽",
                  description: "Полный сервис с выделенной командой",
                  features: [
                    "Менеджер по продажам",
                    "AI-ассистент",
                    "Обучение команды",
                    "Всё из тарифа Growth",
                  ],
                  result: "Полный цикл продаж без вас",
                  popular: false,
                },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={`relative border-0 shadow-xl rounded-3xl p-8 ${plan.popular ? "scale-105 ring-2 ring-blue-500" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white px-6 py-2 text-base rounded-full">
                        Самый популярный
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-3xl font-bold">
                      {plan.name}
                    </CardTitle>
                    <div className="text-4xl md:text-5xl font-bold text-blue-600 my-4">
                      {plan.price}
                    </div>
                    <CardDescription className="text-lg text-gray-600">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                          <span className="text-gray-600 text-lg">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-blue-50 p-6 rounded-2xl mb-8">
                      <p className="text-base font-semibold text-blue-800 mb-2">
                        Ожидаемый результат:
                      </p>
                      <p className="text-blue-700 text-lg">{plan.result}</p>
                    </div>
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl py-4 text-lg font-medium"
                      onClick={handleTelegramClick}
                    >
                      Выбрать {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white" id="timeline" data-animate>
        <div className="section-container">
          <div
            className={`transition-all duration-700 ${isVisible("timeline") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Таймлайн запуска за 90 дней
              </h2>
              <p className="text-xl text-gray-600">
                От договора до полной автоматизации за 3 месяца
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

                {[
                  {
                    day: "День 0",
                    title: "Подписание договора и аванс",
                    desc: "Старт проекта и первоначальный платеж",
                  },
                  {
                    day: "День 5",
                    title: "Оффер + база 100 контактов",
                    desc: "Первая база лидов готова для обращений",
                  },
                  {
                    day: "День 14",
                    title: "Первые демо-заявки из TG",
                    desc: "Первые результаты из Telegram-кампаний",
                  },
                  {
                    day: "День 30",
                    title: "CRM + 400 исходящих касаний",
                    desc: "Полная CRM-система с активной генерацией лидов",
                  },
                  {
                    day: "День 60",
                    title: "Подключён менеджер и AI-бот",
                    desc: "Развернуты менеджер и AI-ассистент",
                  },
                  {
                    day: "День 90",
                    title: "Отчёт по выручке и передача процессов",
                    desc: "Полный перенос системы и анализ результатов",
                  },
                ].map((milestone, index) => (
                  <div key={index} className="relative flex items-start mb-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                      {index + 1}
                    </div>
                    <div className="ml-6 flex-1">
                      <div className="flex items-center mb-2">
                        <Badge variant="outline" className="mr-3">
                          {milestone.day}
                        </Badge>
                        <h3 className="text-lg font-semibold">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50" id="tech" data-animate>
        <div className="section-container">
          <div
            className={`transition-all duration-700 ${isVisible("tech") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Передовой технологический стек
              </h2>
              <p className="text-xl text-gray-600">
                Инструменты корпоративного уровня и автоматизация на базе ИИ
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  category: "Outreach-бот",
                  tools: "crmchat.ai, OpenAI GPT-4o",
                  role: "AI-инженер",
                },
                {
                  category: "CRM и отчёты",
                  tools: "AmoCRM / Bitrix24 + Zapier",
                  role: "Продакт-аналитик",
                },
                {
                  category: "Грейдинг лидов",
                  tools: "LangChain-RAG + pgvector",
                  role: "Data-специалист",
                },
                {
                  category: "Дашборды",
                  tools: "Looker Studio",
                  role: "BI-аналитик",
                },
              ].map((tech, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">{tech.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">{tech.tools}</p>
                    <Badge variant="secondary">{tech.role}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white" id="requirements" data-animate>
        <div className="section-container">
          <div
            className={`transition-all duration-700 ${isVisible("requirements") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Что нужно от вас
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader className="text-center">
                    <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Интервью 2 часа</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">
                      Глубокое погружение в ваш продукт и целевую ��удиторию
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader className="text-center">
                    <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Доступ к лидам</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">
                      Доступ к вашей текущей базе лидов и формам
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader className="text-center">
                    <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Бюджет на менеджера</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">
                      Бюджет на зарплату менеджера с 3-го месяца
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="section-container text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900">
            Готовы автоматизировать продажи?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Присоединяйтесь к успешным фаундерам, которые освободили время и
            увеличили выручку с нашей AI-системой
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-10 py-4 text-lg rounded-xl shadow-lg"
              onClick={handleTelegramClick}
            >
              Запланировать бесплатную консультацию
              <Calendar className="w-6 h-6 ml-3" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-4 text-lg rounded-xl"
              onClick={handleTelegramClick}
            >
              Скачать кейс-стади
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">EVIA Studio</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Условия использования
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>
          <Separator className="my-6 bg-gray-700" />
          <p className="text-center text-gray-400">
            © 2024 EVIA Studio. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
