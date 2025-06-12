
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Integration Technologies",
      skills: [
        "IBM App Connect Enterprise",
        "IBM Integration Bus",
        "IBM MQ",
        "IBM DataPower",
        "REST APIs",
        "SOAP Web Services"
      ],
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "Programming & Frameworks",
      skills: [
        "Java",
        "Spring Framework",
        "Spring Boot",
        "Android Development",
        "SQL",
        "Git"
      ],
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "OpenShift",
        "IBM Cloud",
        "Container Technologies",
        "CI/CD Pipelines",
        "Kubernetes Basics"
      ],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Databases & Messaging",
      skills: [
        "MySQL",
        "PostgreSQL",
        "SQLite",
        "Message Queuing",
        "JMS",
        "Event-Driven Architecture"
      ],
      gradient: "from-orange-500 to-rose-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-50/40 via-purple-50/30 to-cyan-50/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Core technologies and expertise areas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 smooth-card overflow-hidden">
              <CardHeader className={`bg-gradient-to-r ${category.gradient} text-white`}>
                <CardTitle className="text-lg text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="smooth-card">
                <div className="flex flex-wrap gap-2 justify-center pt-4">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-slate-100/90 to-slate-200/90 hover:from-indigo-100/90 hover:to-purple-100/90 backdrop-blur-sm">
                      {skill}
                    </Badge>
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

export default Skills;
