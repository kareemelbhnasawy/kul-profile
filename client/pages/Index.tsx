import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Index() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Animate elements on scroll
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // <-- Trigger once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = {
    EXECUTIVE: [
      "C-Suite Advisory",
      "Strategic Planning",
      "Board Advisory",
      "Executive Coaching",
      "Leadership Development",
    ],
    MARKETING: [
      "Brand Strategy",
      "Digital Marketing",
      "Growth Marketing",
      "Performance Marketing",
      "Marketing Analytics",
    ],
    CREATIVE: [
      "Brand Books",
      "Brand Identity",
      "Visual Design",
      "Creative Direction",
      "Content Creation",
    ],
    FINANCE: [
      "Financial Planning",
      "Investment Strategy",
      "P&L Management",
      "Financial Modeling",
      "Fundraising Support",
    ],
    TECHNOLOGY: [
      "Digital Transformation",
      "Tech Architecture",
      "Platform Development",
      "Data Analytics",
      "AI/ML Implementation",
    ],
    "ECOMMERCE & RETAIL": [
      "E-commerce Strategy",
      "Retail Operations",
      "Marketplace Management",
      "Customer Experience",
      "Supply Chain Optimization",
    ],
    "INNOVATION & NICHE": [
      "Innovation Strategy",
      "Emerging Technologies",
      "Market Research",
      "Product Development",
      "Trend Analysis",
    ],
    OPERATIONS: [
      "Process Optimization",
      "Operational Excellence",
      "Team Building",
      "Systems Integration",
      "Quality Management",
    ],
  };

  const coreTeam = [
    {
      name: "Mary Ghobrial",
      title: "Co-Founder & CEO | Overall Leadership",
      experience: "Ex CCO Souq/Amazon, McKinsey Senior Advisor",
      image: "/images/team/mary-ghobrial.jpg",
    },
    {
      name: "Mahmoud Obeidat",
      title: "Technology Leader",
      experience: "Ex VP Network Int'l, Ex Head of Tech Amazon MENA",
      image: "/images/team/mahmoud-obeidat.jpg",
    },
    {
      name: "Gaurav Chaparwal",
      title: "Senior Data Growth Advisor",
      experience: "Founder Datahash, Ex Emirates, Souq",
      image: "/images/team/gaurav-chaparwal.jpg",
    },
    {
      name: "Anas Al Khaldi",
      title: "Finance and Investments",
      experience: "Financial Strategy & Investment Expert",
      image: "/images/team/anas-al-khaldi.jpg",
    },
    {
      name: "Akhil Saxena",
      title: "Supply Chain & Logistics",
      experience: "Ex Amazon VP Operations",
      image: "/images/team/akhil-saxena.jpg",
    },
    {
      name: "Alessandro Brusadin",
      title: "Commercial Operations",
      experience: "Ex Souq/Fashion, Luxury",
      image: "/images/team/alessandro-brusadin.png",
    },
    {
      name: "Sarah Evans",
      title: "Product & UX",
      experience: "Ex Exec Chalhoub Group, Ex Accenture",
      image: "/images/team/sarah-evans.jpg",
    },
    {
      name: "Frank Kang",
      title: "Korean Beauty Sourcing",
      experience: "Founder of Althea",
      image: "/images/team/frank-kang.jpg",
    },
    {
      name: "Bassem Abu Hashim",
      title: "Influencers and Community",
      experience: "Community & Influencer Strategy Expert",
      image: "/images/team/bassem-abu-hashim.jpg",
    },
  ];

  const extendedTeam = [
    {
      name: "April Uchitel",
      title: "Brand & Retail Strategy",
      experience: "CEO Violet Grey, CEO Onda Beauty",
      image: "/images/team/april-uchitel.png",
    },
    {
      name: "David De Nino",
      title: "Beauty, Sales, Wholesale",
      experience: "Co-Founder Custom House Brands",
      image: "/images/team/david-de-nino.png",
    },
    {
      name: "Pete Dick",
      title: "Social Commerce",
      experience: "Ex-TikTok",
      image: "/images/team/pete-dick.png",
    },
    {
      name: "HM Sing",
      title: "Digital Commerce",
      experience: "JD, Tmall, Wechat, Doyin",
      image: "/images/team/hm-sing.png",
    },
    {
      name: "Risako Masayuki",
      title: "Japanese Beauty Retail",
      experience: "Part of Marubeni, Owns Ainz and Tulp",
      image: "/images/team/risako-masayuki.png",
    },
    {
      name: "Alex Alston",
      title: "Principal, Brand Consultant",
      experience: "Creativity, Strategy, Brand Positioning",
      image: "/images/team/alex-alston.png",
    },
  ];

  const celebrities = [
    {
      name: "Emma Stone",
      category: "Hollywood A-List",
      engagement: "Brand Ambassador",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Academy Award winner with global appeal",
    },
    {
      name: "Ryan Reynolds",
      category: "Entertainment Icon",
      engagement: "Creative Partnership",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Entrepreneur and entertainment mogul",
    },
    {
      name: "Zendaya",
      category: "Gen Z Influencer",
      engagement: "Product Collaboration",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Multi-talented actress and fashion icon",
    },
    {
      name: "Michael B. Jordan",
      category: "Lifestyle Brand",
      engagement: "Strategic Partnership",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Actor, producer, and business entrepreneur",
    },
    {
      name: "Margot Robbie",
      category: "Global Ambassador",
      engagement: "Campaign Lead",
      image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "International star and producer",
    },
    {
      name: "Chris Hemsworth",
      category: "Fitness & Wellness",
      engagement: "Brand Partnership",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Action star and wellness advocate",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-brand">
              MTNC | MOVE THE NEEDLE
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-sm uppercase tracking-wider hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="text-sm uppercase tracking-wider hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#process"
                className="text-sm uppercase tracking-wider hover:text-primary transition-colors"
              >
                Our Process
              </a>
              <a
                href="#team"
                className="text-sm uppercase tracking-wider hover:text-primary transition-colors"
              >
                Team
              </a>
              <a
                href="#celebrities"
                className="text-sm uppercase tracking-wider hover:text-primary transition-colors"
              >
                Celebrity Engagement
              </a>
              {/* <a
                href="#contact"
                className="text-sm uppercase tracking-wider hover:text-primary transition-colors"
              >
                Contact
              </a> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-mtnc-dark via-mtnc-charcoal to-mtnc-dark"></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-brand text-mega mb-8 animate-on-scroll">
            WE MOVE THE NEEDLE
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed animate-on-scroll">
            We are not a consultancy firm, we are an extension of your team to
            build with you, to connect you, and responsibility to delivering
            your goals.
          </p>
          {/* <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg uppercase tracking-wider animate-on-scroll"
          >
            Discover How
          </Button> */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <p className="text-sm text-muted-foreground tracking-wider">
              MTNC | Move The Needle | 2025
            </p>
          </div> */}
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-brand mb-8">
                WHO WE ARE
              </h2>
            </div>
            <div className="space-y-6 animate-on-scroll">
              <p className="text-xl md:text-2xl font-semibold">
                A team of Ecommerce EXPERTS, Retail experts, and Brand builders.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are collaborative leaders, & ambitious doers - who each bring
                DECADES OF EXPERIENCE to offer strategic guidance & HANDS-ON
                EXECUTION.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We partner with global teams to build solutions at a global
                level, with experts based in:
              </p>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4 text-sm uppercase tracking-wider text-primary">
                <span>Dubai</span>
                <span>Riyadh</span>
                <span>LA</span>
                <span>NY</span>
                <span>Paris</span>
                <span>London</span>
                <span>Korea</span>
                <span>Japan</span>
                <span>India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
            <div className="animate-on-scroll">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/images/team/mary-ghobrial2.jpg"
                  alt="Mary Ghobrial"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold text-brand mb-4">
                MARY GHOBRIAL, CO-FOUNDER & CEO
              </h3>
              <blockquote className="text-lg italic text-muted-foreground leading-relaxed border-l-4 border-primary pl-6">
                "I am a brand builder who built hundreds of brands, globally...
                We Build the Brand, tailor make a solution that helps you MOVE
                THE NEEDLE FAST."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-brand mb-8">
              DELIVERING RESULTS
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-start">
            {Object.entries(services).map(([category, items]) => (
              <Card
                key={category}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg animate-on-scroll`}
                onClick={() => {
                  setExpandedService(prev =>
                    prev === category ? null : category
                  );
                }}
                style={{
                  height:
                    expandedService === category
                      ? "auto"
                      : "6.5rem", // collapsed height
                  overflow: expandedService === category ? "visible" : "hidden",
                }}
              >
                <CardContent
                  className={`p-6 transition-all duration-300`}
                >
                  <h3 className="text-lg font-bold text-brand mb-4 uppercase tracking-wider">
                    {category}
                  </h3>
                  {expandedService === category && (
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {items.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="process" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-brand mb-4">
              COVETED, CURATED, & CONCEIVED
            </h2>
            <p className="text-xl text-muted-foreground">
              Dedicated to Sensing & Solving Challenges
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">
                  1
                </span>
              </div>
              <h3 className="text-xl font-bold text-brand mb-4 uppercase tracking-wider">
                ASSESS & STRATEGIZE
              </h3>
              <p className="text-muted-foreground">
                We discuss your vision, goals, & obstacles to determine the
                solve.
              </p>
            </div>
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">
                  2
                </span>
              </div>
              <h3 className="text-xl font-bold text-brand mb-4 uppercase tracking-wider">
                CURATE & BUILD
              </h3>
              <p className="text-muted-foreground">
                We pull from our specialized talent roster to assemble a bespoke
                TEAM and identify the right strategic partners to build the
                models.
              </p>
            </div>
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">
                  3
                </span>
              </div>
              <h3 className="text-xl font-bold text-brand mb-4 uppercase tracking-wider">
                EXECUTE & OWN
              </h3>
              <p className="text-muted-foreground">
                We execute with you and{" "}
                <strong className="text-primary">co-own the P&L</strong> to
                deliver on your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section id="team" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-brand mb-8">
              OUR EXPERTS
            </h2>
          </div>

          {/* Core Leadership Team */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-brand mb-8 text-center uppercase tracking-wider animate-on-scroll">
              Core Leadership Team
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {coreTeam.map((member, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 animate-on-scroll"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <h4 className="font-bold text-lg mb-2">{member.name}</h4>
                    <p className="text-sm text-primary mb-2 uppercase tracking-wider">
                      {member.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.experience}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Extended Global Retail Team */}
          <div>
            <h3 className="text-2xl font-bold text-brand mb-8 text-center uppercase tracking-wider animate-on-scroll">
              Extended Global Retail Team
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {extendedTeam.map((member, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 bg-card/50 animate-on-scroll"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <h4 className="font-bold text-lg mb-2">{member.name}</h4>
                    <p className="text-sm text-primary mb-2 uppercase tracking-wider">
                      {member.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.experience}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Celebrity Engagement */}
      <section id="celebrities" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-brand mb-8">
              CELEBRITY ENGAGEMENT
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connecting brands with A-list talent for authentic partnerships that drive global impact and cultural relevance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {celebrities.map((celebrity, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50 animate-on-scroll overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={celebrity.image}
                        alt={celebrity.name}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-sm opacity-90 mb-2">{celebrity.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-wider bg-primary/20 px-2 py-1 rounded">
                          {celebrity.engagement}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand mb-2">
                      {celebrity.name}
                    </h3>
                    <p className="text-sm text-primary uppercase tracking-wider mb-3">
                      {celebrity.category}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        {celebrity.engagement}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <span className="text-primary text-xs">→</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-on-scroll">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-brand mb-4 uppercase tracking-wider">
                Ready to Connect with A-List Talent?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our celebrity engagement team specializes in creating authentic partnerships that resonate with global audiences and drive measurable results.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">★</span>
                  </div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-2">A-List Access</h4>
                  <p className="text-xs text-muted-foreground">Direct connections to top-tier talent</p>
                </div>
                <div className="p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">⚡</span>
                  </div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Strategic Matching</h4>
                  <p className="text-xs text-muted-foreground">Perfect brand-celebrity alignment</p>
                </div>
                <div className="p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">📈</span>
                  </div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Global Impact</h4>
                  <p className="text-xs text-muted-foreground">Measurable results and ROI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-brand mb-8">
              CLIENTS & PARTNERSHIPS
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Proud to partner with industry leaders and emerging innovators
            </p>
            {/* <div className="bg-muted rounded-lg p-12 max-w-4xl mx-auto flex items-center justify-center"> */}
              <img
                src="/images/clients.jpeg"
                alt="Clients and Partnerships"
                className="object-contain rounded-xl"
              />
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* Footer & Contact */}
      {/* <footer
        id="contact"
        className="py-20 bg-background border-t border-border"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-brand mb-8">
                Ready to Move The Needle?
              </h2>
            </div>

            <form className="grid md:grid-cols-2 gap-6 mb-12 animate-on-scroll">
              <Input placeholder="Name" className="bg-card border-border" />
              <Input placeholder="Company" className="bg-card border-border" />
              <Input
                placeholder="Email"
                type="email"
                className="bg-card border-border md:col-span-2"
              />
              <Textarea
                placeholder="Message"
                rows={4}
                className="bg-card border-border md:col-span-2"
              />
              <Button
                type="submit"
                size="lg"
                className="md:col-span-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Submit
              </Button>
            </form>

            <div className="text-center border-t border-border pt-8 animate-on-scroll">
              <p className="text-xl font-bold text-brand mb-4">
                MTNC | Move The Needle
              </p>
              <p className="text-sm text-muted-foreground">
                © 2025 MTNC. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
