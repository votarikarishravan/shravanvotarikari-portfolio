
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Smartphone, Cloud, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Java Backend Development",
      icon: Code,
      description: "Enterprise-grade Java backend solutions using Spring Framework, REST APIs, and microservices architecture. Focus on scalable, maintainable, and high-performance applications.",
      features: [
        "Spring Boot Applications",
        "REST API Development",
        "Microservices Architecture",
        "Database Integration",
        "Performance Optimization",
        "Security Implementation"
      ]
    },
    {
      title: "IBM Integration Consulting",
      icon: Cloud,
      description: "Comprehensive consulting services for IBM middleware technologies including App Connect Enterprise (ACE), Integration Bus (IIB), IBM MQ, and DataPower gateway solutions.",
      features: [
        "IBM ACE/IIB Implementation",
        "Message Flow Development",
        "IBM MQ Configuration",
        "DataPower Gateway Setup",
        "Integration Architecture",
        "Performance Tuning"
      ]
    },
    {
      title: "Android Development Support",
      icon: Smartphone,
      description: "Android application development guidance and support for mobile solutions. From concept to deployment with modern Android development practices.",
      features: [
        "Native Android Apps",
        "UI/UX Implementation",
        "API Integration",
        "Database Management",
        "App Store Deployment",
        "Maintenance & Updates"
      ]
    },
    {
      title: "Training & Mentorship",
      icon: Users,
      description: "Technical training and mentorship programs for developers looking to enhance their skills in enterprise integration and Java development.",
      features: [
        "Technical Training Sessions",
        "Code Review & Guidance",
        "Best Practices Workshop",
        "Career Development",
        "Knowledge Transfer",
        "Team Leadership"
      ]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional services I offer to help businesses and individuals achieve their technical goals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
