/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  ShieldCheck, 
  BarChart3, 
  Wrench, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight,
  Clock,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg py-3 border-b border-white/5 shadow-2xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Building2 className="text-white w-6 h-6" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white font-display">
            AJM <span className="font-light text-blue-400">Condomínio</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium transition-colors hover:text-blue-400 text-zinc-400"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/20">
            Área do Condômino
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-zinc-950 border-b border-white/10 shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-zinc-200 font-medium py-2 border-b border-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-blue-600 text-white py-3 rounded-xl font-bold mt-2">
              Área do Condômino
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern Building" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-600/10 border border-blue-600/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            Gestão Profissional de Condomínios
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 font-display">
            Sua tranquilidade é o nosso <span className="text-blue-500">compromisso.</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
            A AJM Condomínio oferece soluções completas em administração, transparência financeira e manutenção preventiva para valorizar o seu patrimônio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-600/40">
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all">
              Conheça Nossos Planos
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats Floating */}
      <div className="absolute bottom-12 right-12 hidden lg:flex gap-12">
        {[
          { label: 'Condomínios', value: '150+' },
          { label: 'Anos de Experiência', value: '12' },
          { label: 'Satisfação', value: '98%' },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + (i * 0.1) }}
            className="text-right"
          >
            <div className="text-3xl font-bold text-white font-display">{stat.value}</div>
            <div className="text-sm text-zinc-500 uppercase tracking-wider">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Gestão Financeira",
      desc: "Transparência total com prestação de contas online, emissão de boletos e controle rigoroso de inadimplência."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Assessoria Jurídica",
      desc: "Suporte especializado em legislação condominial, cobranças judiciais e mediação de conflitos."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Manutenção Preventiva",
      desc: "Cronograma rigoroso de vistorias e acompanhamento técnico para garantir a segurança e conservação do prédio."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestão de Pessoas",
      desc: "Recrutamento, treinamento e supervisão de funcionários próprios ou terceirizados com foco em excelência."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Atendimento 24h",
      desc: "Canal direto para emergências e suporte contínuo aos síndicos e moradores através de nossa plataforma."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Vistorias Técnicas",
      desc: "Relatórios detalhados sobre o estado estrutural e funcional do condomínio com recomendações profissionais."
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em] mb-4">Nossas Soluções</h2>
          <h3 className="text-4xl font-bold text-white font-display">Gestão Completa para seu Condomínio</h3>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Combinamos tecnologia e atendimento humanizado para entregar uma administração eficiente e transparente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 shadow-sm hover:bg-zinc-900 hover:border-blue-600/30 transition-all group"
            >
              <div className="bg-blue-600/10 text-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 font-display">{service.title}</h4>
              <p className="text-zinc-400 leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-6 flex items-center text-blue-500 font-semibold text-sm cursor-pointer hover:gap-2 transition-all">
                Saiba mais <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=2070" 
                alt="Condominium Management" 
                className="w-full h-full object-cover aspect-square lg:aspect-auto lg:h-[600px] opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-600 rounded-3xl -z-0 opacity-5"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-blue-600 rounded-full -z-0 opacity-10"></div>
            
            <div className="absolute bottom-8 left-8 bg-zinc-900 border border-white/10 p-6 rounded-2xl shadow-xl z-20 max-w-xs hidden sm:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-emerald-500/10 text-emerald-500 p-2 rounded-lg">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="font-bold text-white font-display">Certificação ISO</span>
              </div>
              <p className="text-xs text-zinc-400">Garantia de processos padronizados e qualidade internacional na gestão.</p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em] mb-4">Sobre a AJM</h2>
            <h3 className="text-4xl font-bold text-white mb-6 leading-tight font-display">
              Liderança e Inovação na Gestão Condominial
            </h3>
            <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
              Fundada com o propósito de modernizar a administração de condomínios, a AJM se destaca pela transparência absoluta e pelo uso de tecnologia de ponta.
            </p>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Nossa equipe é composta por especialistas em direito imobiliário, contabilidade e engenharia, garantindo que cada aspecto do seu condomínio seja tratado com o máximo profissionalismo. Não somos apenas administradores; somos parceiros na valorização do seu lar.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Transparência em tempo real via App",
                "Redução comprovada de custos operacionais",
                "Atendimento personalizado para cada síndico",
                "Foco em sustentabilidade e economia de recursos"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-blue-600/10 text-blue-500 rounded-full p-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-zinc-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="border-2 border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-xl font-bold transition-all">
              Ver Nossa História
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em] mb-4">Fale Conosco</h2>
            <h3 className="text-4xl font-bold mb-8 font-display">Pronto para elevar o nível do seu condomínio?</h3>
            <p className="text-zinc-400 mb-12 text-lg">
              Entre em contato hoje mesmo para uma consultoria gratuita e descubra como podemos transformar a gestão do seu patrimônio.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-zinc-900 p-4 rounded-2xl border border-white/5">
                  <Phone className="text-blue-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 font-display">Telefone</h4>
                  <p className="text-zinc-400">(11) 4002-8922</p>
                  <p className="text-zinc-400">(11) 99999-0000 (WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-zinc-900 p-4 rounded-2xl border border-white/5">
                  <Mail className="text-blue-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 font-display">E-mail</h4>
                  <p className="text-zinc-400">contato@ajmcondominio.com.br</p>
                  <p className="text-zinc-400">comercial@ajmcondominio.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-zinc-900 p-4 rounded-2xl border border-white/5">
                  <MapPin className="text-blue-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 font-display">Endereço</h4>
                  <p className="text-zinc-400">Av. Paulista, 1000 - 12º Andar</p>
                  <p className="text-zinc-400">Bela Vista, São Paulo - SP</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl border border-white/5"
          >
            <h4 className="text-2xl font-bold mb-6 font-display">Envie uma mensagem</h4>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400">Nome Completo</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all text-white" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400">E-mail</label>
                  <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all text-white" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-400">Condomínio</label>
                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all text-white" placeholder="Nome do condomínio" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-400">Mensagem</label>
                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all text-white" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all">
                Enviar Solicitação
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Building2 className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                AJM <span className="font-light text-blue-400">Condomínio</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Excelência em gestão condominial com foco em transparência, tecnologia e valorização patrimonial.
            </p>
            <div className="flex gap-4">
              {['fb', 'in', 'ig'].map(social => (
                <div key={social} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="uppercase text-[10px] font-bold">{social}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 font-display">Links Rápidos</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 font-display">Serviços</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li>Gestão Financeira</li>
              <li>Assessoria Jurídica</li>
              <li>Manutenção Predial</li>
              <li>Recursos Humanos</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 font-display">Newsletter</h4>
            <p className="text-sm text-zinc-500 mb-4">Receba dicas de gestão e notícias do setor.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Seu e-mail" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none w-full text-white" />
              <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-600">
          <p>© 2024 AJM Condomínio. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-blue-900 selection:text-blue-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="bg-zinc-800 hover:bg-zinc-700 text-white p-4 rounded-full shadow-2xl border border-white/10 transition-all"
            >
              <ChevronRight className="w-6 h-6 -rotate-90" />
            </motion.button>
          )}
        </AnimatePresence>
        
        <motion.a
          href="https://wa.me/5511999990000"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-600/20 transition-all"
        >
          <Phone className="w-6 h-6" />
        </motion.a>
      </div>
    </div>
  );
}
