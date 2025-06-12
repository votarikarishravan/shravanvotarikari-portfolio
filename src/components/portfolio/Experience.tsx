
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Eidiko Systems Integrators",
      period: "May 2022 – Present",
      location: "Hyderabad, India",
      description: [
        "Developed enterprise integration solutions using IBM App Connect Enterprise (ACE) and IBM Integration Bus (IIB)",
        "Implemented messaging solutions with IBM MQ and API gateways using IBM DataPower",
        "Collaborated on banking integration projects for Fidelity Bank (Ghana), Rakbank (Dubai), and Standard Bank (Mozambique)",
        "Mentored junior developers and conducted training sessions on IBM middleware technologies",
        "Delivered scalable solutions with focus on performance, security, and reliability"
      ],
      technologies: ["IBM ACE", "IBM IIB", "IBM MQ", "DataPower", "Java", "OpenShift"]
    },
    {
      title: "Android Developer",
      company: "Personal Projects",
      period: "2020 – 2022",
      location: "Remote",
      description: [
        "Developed mobile applications as personal interest projects",
        "Gained experience in mobile development lifecycle and user experience design",
        "Explored modern Android development practices and architectural patterns",
        "Built user-friendly interfaces with focus on performance optimization"
      ],
      technologies: ["Android", "Java", "Kotlin", "SQLite", "REST APIs"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My journey in enterprise integration and software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-primary mt-2 text-xs">●</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
