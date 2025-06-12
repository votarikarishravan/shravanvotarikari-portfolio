
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Users, Target, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "3+ Years Experience",
      description: "Enterprise integration solutions",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "Training junior developers",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Quality delivery focused",
      color: "from-orange-500 to-rose-600"
    },
    {
      icon: Award,
      title: "International Projects",
      description: "Ghana, Dubai, Mozambique",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50/80 via-indigo-50/60 to-purple-50/40 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate Integration Developer with expertise in enterprise solutions and team mentorship
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I specialize in IBM App Connect Enterprise, IBM Integration Bus, IBM MQ, DataPower, 
              and Java backend development. My experience spans across major banking clients in 
              Ghana, Dubai, and Mozambique, where I've delivered scalable integration solutions 
              on OpenShift cloud platforms.
            </p>
            
            <p className="text-lg leading-relaxed">
              Beyond technical expertise, I'm passionate about mentoring emerging developers and 
              sharing knowledge through hands-on training. My long-term vision is to become an 
              entrepreneur in the technology space while continuing to contribute to the developer community.
            </p>

            <div className="smooth-card p-6 rounded-lg smooth-shadow">
              <h3 className="font-semibold text-lg mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Education</h3>
              <p className="text-muted-foreground">Master of Computer Applications (MCA)</p>
              <p className="text-sm text-muted-foreground">Nizam College, Osmania University, Hyderabad</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 smooth-card">
                  <CardContent className="p-0">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg mx-auto mb-4 flex items-center justify-center smooth-shadow`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
