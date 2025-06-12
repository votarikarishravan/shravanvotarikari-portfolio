
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Fidelity Bank Integration",
      client: "Fidelity Bank Ghana",
      year: "2023",
      description: "Comprehensive banking integration solution implementing secure payment processing, account management, and real-time transaction monitoring systems.",
      technologies: ["IBM ACE", "IBM MQ", "DataPower", "REST APIs", "Java"],
      impact: "40% improvement in transaction processing speed"
    },
    {
      title: "Rakbank Digital Platform",
      client: "Rakbank Dubai",
      year: "2023",
      description: "Enterprise-level digital banking platform integration featuring seamless API orchestration and cloud-based middleware solutions.",
      technologies: ["IBM IIB", "OpenShift", "Spring Boot", "IBM MQ"],
      impact: "60% reduction in system downtime"
    },
    {
      title: "Standard Bank Integration Suite",
      client: "Standard Bank Mozambique",
      year: "2022-2023",
      description: "Complete integration suite enabling efficient inter-system communication, data transformation, and business process automation.",
      technologies: ["IBM ACE", "Java", "REST/SOAP", "IBM MQ"],
      impact: "70% reduction in manual processing"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Key banking integration projects showcasing enterprise-level expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">Banking</Badge>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{project.year}</span>
                  </div>
                </div>
                <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-primary font-medium">{project.client}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-primary/5 p-3 rounded-lg">
                  <p className="text-sm font-medium text-primary mb-1">Key Impact:</p>
                  <p className="text-xs text-muted-foreground">{project.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
