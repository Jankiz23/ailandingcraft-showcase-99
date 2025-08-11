import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Plus, Edit } from "lucide-react";
import ProjectImportModal from "@/components/ProjectImportModal";

const CaseStudiesSection = () => {
  // Default projects that always appear
  const defaultProjects = [
    {
      id: 1,
      title: "Agency Immobilier",
      category: "E-Commerce",
      description: "Bienvenue chez Immobilier Hammamet, votre agence spécialisée dans la vente, l'achat et la location de biens immobiliers à Hammamet",
      image: "/lovable-uploads/ed3e343b-73a5-47b7-b6c2-d068ac079eae.png",
      metrics: {
        conversion: "+85%",
        traffic: "+120%",
        engagement: "+95%"
      },
      isPlaceholder: false,
      projectUrl: "https://dancing-semifreddo-3e71e3.netlify.app/"
    },
    {
      id: 2,
      title: "G21",
      category: "E-Commerce", 
      description: "People's Dreams Never End. Express your passion through premium streetwear inspired by anime culture. Where style meets storytelling, and dreams become reality.",
      image: "/lovable-uploads/fb304d0b-f653-4e5b-9916-f8b40b869014.png",
      metrics: {
        conversion: "+150%",
        traffic: "+200%", 
        engagement: "+180%"
      },
      isPlaceholder: false,
      projectUrl: "https://preview--g21-creative-landing-pad-23.lovable.app/"
    },
    {
      id: 3,
      title: "Juventaya",
      category: "E-Commerce",
      description: "People's Dreams Never End. Express your passion through premium streetwear inspired by anime culture. Where style meets storytelling, and dreams become reality.",
      image: "/lovable-uploads/e4b7c7ac-e637-4d45-a5f5-7db2c17567f4.png",
      metrics: {
        conversion: "+200%",
        traffic: "+300%",
        engagement: "+250%"
      },
      isPlaceholder: false,
      projectUrl: "https://preview--g21-creative-landing-pad-23.lovable.app/"
    },
    {
      id: 4,
      title: "Ristorante Galleria",
      category: "E-Commerce",
      description: "Nel cuore di Milano dal 1968. Un monumento vivo con un'atmosfera unica. Incastonato fra il Duomo e il Teatro alla Scala nella lussuosa cornice della Galleria Vittorio Emanuele II.",
      image: "/lovable-uploads/41c0059a-30f5-4987-b15b-155dd7bc85ed.png",
      metrics: {
        conversion: "+75%",
        traffic: "+90%",
        engagement: "+110%"
      },
      isPlaceholder: false,
      projectUrl: "https://stupendous-raindrop-360f5e.netlify.app/"
    }
  ];

  // Load projects from localStorage or use default projects
  const getInitialProjects = () => {
    const saved = localStorage.getItem('caseStudiesProjects');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultProjects;
      }
    }
    return defaultProjects;
  };

  const [projects, setProjects] = useState(getInitialProjects);

  // Save projects to localStorage whenever projects change
  useEffect(() => {
    localStorage.setItem('caseStudiesProjects', JSON.stringify(projects));
  }, [projects]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<number>(1);

  const handleImportProject = (projectId: number) => {
    setSelectedProjectId(projectId);
    setModalOpen(true);
  };

  const handleSaveProject = (projectData: any) => {
    setProjects(prev => prev.map(project => 
      project.id === selectedProjectId 
        ? { 
            ...project, 
            ...projectData, 
            isPlaceholder: false 
          }
        : project
    ));
  };

  const handleEditProject = (projectId: number) => {
    setSelectedProjectId(projectId);
    setModalOpen(true);
  };

  const handleViewProject = (projectUrl: string) => {
    if (projectUrl) {
      window.open(projectUrl, '_blank');
    }
  };

  return (
    <section id="case-studies" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="bg-accent-gradient bg-clip-text text-transparent">Case Studies</span>
            </h2>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => handleImportProject(1)}
              className="mt-4 lg:mt-0"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Project
            </Button>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence with 
            AI-powered landing pages that deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden bg-card-gradient border-border hover:shadow-glow-accent transition-all duration-300 hover:scale-105">
              <div 
                className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative cursor-pointer"
                onClick={() => handleImportProject(project.id)}
              >
                {project.isPlaceholder || !project.image ? (
                  <div className="text-center">
                    <Plus className="w-12 h-12 text-muted-foreground mb-2 mx-auto" />
                    <p className="text-muted-foreground">Click to Add Project</p>
                  </div>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
                {!project.isPlaceholder && (
                  <div className="absolute top-4 right-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditProject(project.id);
                      }}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">
                      {project.metrics.conversion}
                    </div>
                    <div className="text-xs text-muted-foreground">Conversion</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">
                      {project.metrics.traffic}
                    </div>
                    <div className="text-xs text-muted-foreground">Traffic</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">
                      {project.metrics.engagement}
                    </div>
                    <div className="text-xs text-muted-foreground">Engagement</div>
                  </div>
                </div>
                
                {project.isPlaceholder ? (
                  <Button 
                    variant="hero" 
                    className="w-full"
                    onClick={() => handleImportProject(project.id)}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Import Project
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => handleViewProject(project.projectUrl || "")}
                      disabled={!project.projectUrl}
                    >
                      View Project
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="sm"
                      onClick={() => handleEditProject(project.id)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to add your projects? Each case study can showcase your work with custom metrics, 
            images, and detailed project information.
          </p>
          <Button 
            variant="gradient" 
            size="lg"
            onClick={() => handleImportProject(1)}
          >
            Import All Projects
            <Plus className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <ProjectImportModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSave={handleSaveProject}
          projectId={selectedProjectId}
        />
      </div>
    </section>
  );
};

export default CaseStudiesSection;