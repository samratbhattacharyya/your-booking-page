import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    { name: "UI/UX Design", level: 95 },
    { name: "Web Development", level: 90 },
    { name: "Brand Strategy", level: 85 },
    { name: "Digital Marketing", level: 80 },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 8 years of experience in digital design and strategy, I specialize in creating 
                compelling visual narratives that drive results. My approach combines aesthetic excellence 
                with strategic thinking to deliver solutions that not only look beautiful but perform exceptionally.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I work with forward-thinking businesses and individuals who understand the power of great design 
                in building lasting connections with their audience. From brand identity to digital experiences, 
                every project is an opportunity to tell a unique story.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {["Creative Direction", "Web Design", "Brand Identity", "Digital Strategy", "Consultation"].map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <Card className="bg-gradient-card shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Core Skills</h3>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-accent font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;