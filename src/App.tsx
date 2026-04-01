import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Globe, 
  Award, 
  Package, 
  Factory, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Truck,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
      isScrolled ? "glass-nav py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Brand Logo Placeholder (Using text for now as per instructions) */}
          <div className="flex flex-col">
            <span className={cn(
              "font-display font-bold text-xl tracking-tighter leading-none",
              isScrolled ? "text-brand-red" : "text-white"
            )}>KITCHEN XPRESS</span>
            <span className={cn(
              "text-[10px] uppercase tracking-[0.2em] font-medium",
              isScrolled ? "text-brand-black/60" : "text-white/70"
            )}>Overseas Ltd</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Products', 'Segments', 'Infrastructure', 'Global', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-red",
                isScrolled ? "text-brand-black" : "text-white"
              )}
            >
              {item}
            </a>
          ))}
          <button className={cn(
            "px-5 py-2 rounded-full text-sm font-semibold transition-all",
            isScrolled 
              ? "bg-brand-red text-white hover:bg-brand-red/90" 
              : "bg-white text-brand-black hover:bg-brand-beige"
          )}>
            Request Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? "text-brand-black" : "text-white"} /> : <Menu className={isScrolled ? "text-brand-black" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-black/5 p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {['Products', 'Segments', 'Infrastructure', 'Global', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium text-brand-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-brand-red text-white py-3 rounded-xl font-bold">
              Request Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Spices" 
          className="w-full h-[120%] object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 cinematic-gradient" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/20 backdrop-blur-sm border border-brand-gold/30 text-brand-gold text-xs font-bold tracking-widest uppercase mb-6">
            Global Export Excellence
          </span>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight leading-[0.95] text-balance">
            Exporting Indian Taste to <span className="text-brand-gold">20+ Countries</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Premium Spices • Frozen Foods • Ready-to-Eat • Private Label Solutions. 
            Crafting culinary experiences since 1960.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-brand-red text-white rounded-full font-bold flex items-center gap-2 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-brand-red/40">
              Explore Products
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold transition-all hover:bg-white/20">
              Request Bulk Quote
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const TrustStrip = () => {
  const stats = [
    { label: "Years Experience", value: "60+", icon: Award },
    { label: "Premium Products", value: "500+", icon: Package },
    { label: "Countries Export", value: "20+", icon: Globe },
    { label: "Global Certifications", value: "FDA/ISO", icon: ShieldCheck },
  ];

  return (
    <section className="bg-white py-12 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <stat.icon className="w-6 h-6 text-brand-red mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-brand-black">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest font-semibold text-brand-black/40">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BusinessSegments = () => {
  const segments = [
    {
      title: "Retail Products",
      desc: "Premium packaging for global retail chains and local markets.",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c170db06?auto=format&fit=crop&q=80&w=800",
      color: "bg-brand-red"
    },
    {
      title: "Export Solutions",
      desc: "End-to-end logistics and regulatory compliance for international trade.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      color: "bg-brand-gold"
    },
    {
      title: "Private Label",
      desc: "Custom manufacturing and branding solutions for your business.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      color: "bg-brand-black"
    }
  ];

  return (
    <section id="segments" className="py-24 px-6 bg-brand-beige">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-red font-bold uppercase tracking-widest text-xs mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Tailored Solutions for Global Markets</h2>
          </div>
          <p className="text-brand-black/60 max-w-md">
            From farm to fork, we manage the entire value chain to ensure premium quality and consistent supply.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {segments.map((seg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img src={seg.image} alt={seg.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className={cn("w-12 h-1 mb-6", seg.color)} />
                <h3 className="text-2xl font-bold text-white mb-2">{seg.title}</h3>
                <p className="text-white/70 text-sm mb-6 max-w-[250px]">{seg.desc}</p>
                <div className="flex items-center gap-2 text-white font-bold text-sm group-hover:gap-4 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductExperience = () => {
  const [activeCategory, setActiveCategory] = useState('Spices');
  const categories = ['Spices', 'Frozen', 'Ready-to-Eat', 'Pulses'];
  
  const products = [
    { name: "Premium Turmeric Powder", cat: "Spices", img: "https://images.unsplash.com/photo-1615485245452-11ca33a71a9a?auto=format&fit=crop&q=80&w=400" },
    { name: "Red Chilli Powder", cat: "Spices", img: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=400" },
    { name: "Garam Masala Blend", cat: "Spices", img: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=400" },
    { name: "Frozen Samosas", cat: "Frozen", img: "https://images.unsplash.com/photo-1601050690597-df056fb01793?auto=format&fit=crop&q=80&w=400" },
    { name: "Paneer Tikka", cat: "Frozen", img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=400" },
    { name: "Dal Makhani", cat: "Ready-to-Eat", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400" },
  ];

  const filteredProducts = products.filter(p => p.cat === activeCategory);

  return (
    <section id="products" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">The Product Experience</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-8 py-3 rounded-full text-sm font-bold transition-all border",
                  activeCategory === cat 
                    ? "bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/20" 
                    : "bg-transparent border-black/10 text-brand-black hover:border-brand-red"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod, i) => (
              <motion.div 
                key={prod.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-brand-beige mb-4 relative">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-all flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 bg-white text-brand-black px-4 py-2 rounded-full text-xs font-bold transform translate-y-4 group-hover:translate-y-0 transition-all">
                      View Details
                    </button>
                  </div>
                </div>
                <h4 className="font-bold text-brand-black group-hover:text-brand-red transition-colors">{prod.name}</h4>
                <p className="text-xs text-brand-black/40 uppercase tracking-widest font-semibold">{prod.cat}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Manufacturing Scale",
      desc: "State-of-the-art facilities capable of handling massive global demand.",
      icon: Factory
    },
    {
      title: "Quality Assurance",
      desc: "Rigorous multi-stage testing to meet international food safety standards.",
      icon: ShieldCheck
    },
    {
      title: "Global Logistics",
      desc: "Efficient supply chain network reaching over 20 countries worldwide.",
      icon: Truck
    },
    {
      title: "Custom Formulations",
      desc: "Expert R&D team to create bespoke spice blends and food products.",
      icon: Layers
    }
  ];

  return (
    <section className="py-24 px-6 bg-brand-black text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/5 skew-x-12 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4 block">Why Kitchen Xpress</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">The Global Standard in Indian FMCG</h2>
            <p className="text-white/60 text-lg mb-12 max-w-lg leading-relaxed">
              We don't just export products; we export a legacy of taste, quality, and trust that has been built over six decades.
            </p>
            <div className="space-y-4">
              {['FDA Approved Facilities', 'BRC Global Standards', 'ISO 22000 Certified', 'Halal & Kosher Options'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <f.icon className="w-10 h-10 text-brand-gold mb-6" />
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const GlobalPresence = () => {
  return (
    <section id="global" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Global Footprint</h2>
          <p className="text-brand-black/60 max-w-2xl mx-auto">
            From North America to the Middle East, our products are a staple in kitchens across the globe.
          </p>
        </div>
        
        <div className="relative aspect-[16/9] bg-brand-beige rounded-[40px] overflow-hidden p-8 flex items-center justify-center">
          {/* Simple SVG World Map Placeholder with Dots */}
          <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20">
             <path d="M150,150 Q250,100 350,150 T550,150 T750,150 T950,150" fill="none" stroke="currentColor" strokeWidth="2" />
             {/* Add some dots representing export countries */}
             {[
               {x: 200, y: 180}, {x: 250, y: 220}, {x: 450, y: 150}, 
               {x: 550, y: 250}, {x: 700, y: 180}, {x: 850, y: 300}
             ].map((dot, i) => (
               <circle key={i} cx={dot.x} cy={dot.y} r="4" fill="#E30613" />
             ))}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center">
                <div className="text-7xl md:text-9xl font-bold text-brand-red/10 select-none">WORLDWIDE</div>
                <div className="mt-[-20px] md:mt-[-40px] text-xl md:text-3xl font-bold text-brand-black">Active in 20+ Countries</div>
             </div>
          </div>
          
          {/* Floating stats */}
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-black/5 hidden md:block">
               <div className="text-xs font-bold text-brand-red uppercase mb-1">Main Hubs</div>
               <div className="text-sm font-medium">USA • UK • UAE • Australia • Canada</div>
            </div>
            <button className="bg-brand-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2">
              View Export Network <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Infrastructure = () => {
  return (
    <section id="infrastructure" className="py-24 px-6 bg-brand-beige">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <motion.img 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                src="https://images.unsplash.com/photo-1558444479-c8482905a602?auto=format&fit=crop&q=80&w=600" 
                className="rounded-3xl aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
              <motion.img 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                src="https://images.unsplash.com/photo-1565061828011-282424b9ab40?auto=format&fit=crop&q=80&w=600" 
                className="rounded-3xl aspect-square object-cover mt-8"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-brand-red font-bold uppercase tracking-widest text-xs mb-4 block">Our Infrastructure</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Built for Precision, Scaled for the World</h2>
            <p className="text-brand-black/60 text-lg mb-10 leading-relaxed">
              Our manufacturing units are equipped with the latest technology in cleaning, grinding, and packaging. We maintain a zero-human-contact environment for our ready-to-eat and frozen segments.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-brand-red mb-2">100k+</div>
                <div className="text-sm font-bold text-brand-black/40 uppercase tracking-widest">Sq. Ft. Facility</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-red mb-2">Fully</div>
                <div className="text-sm font-bold text-brand-black/40 uppercase tracking-widest">Automated Lines</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-8">
              <span className="font-display font-bold text-2xl tracking-tighter leading-none text-brand-red">KITCHEN XPRESS</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/50">Overseas Ltd</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              A legacy of taste and quality, exporting the finest Indian FMCG products to the global market since 1960.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer">
                  <div className="w-4 h-4 bg-white/20 rounded-sm" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Product Catalog</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Export Services</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Private Labeling</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Infrastructure</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Certifications</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-red shrink-0" />
                <span>Ahmedabad, Gujarat, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <span>+91 79 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <span>export@kxol.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-lg">Inquiry</h4>
            <p className="text-white/40 text-sm mb-6">Subscribe to our export newsletter for market updates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:border-brand-red transition-colors"
              />
              <button className="bg-brand-red p-3 rounded-xl hover:bg-brand-red/80 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/30 font-medium uppercase tracking-widest">
          <div>© 2026 Kitchen Xpress Overseas Ltd. All Rights Reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <BusinessSegments />
        <ProductExperience />
        <WhyChooseUs />
        <GlobalPresence />
        <Infrastructure />
        
        {/* Final CTA Section */}
        <section className="py-24 px-6 bg-brand-red text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight">Ready to Start Your Import Journey?</h2>
            <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
              Partner with India's leading FMCG exporter. Get a customized quote for your retail or private label needs today.
            </p>
            <button className="px-12 py-6 bg-white text-brand-red rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-black/20">
              Request a Bulk Quote
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
