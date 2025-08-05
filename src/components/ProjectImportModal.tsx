import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, X } from "lucide-react";

interface ProjectData {
  title: string;
  category: string;
  description: string;
  image: string;
  metrics: {
    conversion: string;
    traffic: string;
    engagement: string;
  };
  projectUrl?: string;
}

interface ProjectImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (projectData: ProjectData) => void;
  projectId: number;
}

const ProjectImportModal = ({ isOpen, onClose, onSave, projectId }: ProjectImportModalProps) => {
  const [formData, setFormData] = useState<ProjectData>({
    title: "",
    category: "",
    description: "",
    image: "",
    metrics: {
      conversion: "",
      traffic: "",
      engagement: ""
    },
    projectUrl: ""
  });

  const [imagePreview, setImagePreview] = useState<string>("");

  const handleInputChange = (field: string, value: string) => {
    if (field.startsWith('metrics.')) {
      const metricField = field.split('.')[1];
      setFormData(prev => ({
        ...prev,
        metrics: {
          ...prev.metrics,
          [metricField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        setImagePreview(imageUrl);
        setFormData(prev => ({
          ...prev,
          image: imageUrl
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
    // Reset form
    setFormData({
      title: "",
      category: "",
      description: "",
      image: "",
      metrics: { conversion: "", traffic: "", engagement: "" },
      projectUrl: ""
    });
    setImagePreview("");
  };

  const placeholderImages = [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Import Project #{projectId}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill in the details below to add your project to the case studies section.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-foreground">Project Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="e.g., E-commerce Redesign"
                className="bg-background/50 border-border"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category" className="text-foreground">Category</Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                placeholder="e.g., E-commerce, SaaS, Startup"
                className="bg-background/50 border-border"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-foreground">Project Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Describe your project, the challenges, solutions, and results..."
              className="bg-background/50 border-border min-h-24"
              required
            />
          </div>

          {/* Project URL */}
          <div className="space-y-2">
            <Label htmlFor="projectUrl" className="text-foreground">Project URL (Optional)</Label>
            <Input
              id="projectUrl"
              value={formData.projectUrl}
              onChange={(e) => handleInputChange('projectUrl', e.target.value)}
              placeholder="https://yourproject.com"
              className="bg-background/50 border-border"
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-4">
            <Label className="text-foreground">Project Image</Label>
            
            {/* Custom Image Upload */}
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Click to upload your project image</p>
              </label>
            </div>

            {/* Placeholder Images */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Or choose from placeholder images:</p>
              <div className="grid grid-cols-5 gap-2">
                {placeholderImages.map((url, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setImagePreview(url);
                      setFormData(prev => ({ ...prev, image: url }));
                    }}
                    className="aspect-video rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-colors"
                  >
                    <img src={url} alt={`Placeholder ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Image Preview */}
            {imagePreview && (
              <div className="relative">
                <img src={imagePreview} alt="Preview" className="w-full aspect-video object-cover rounded-lg" />
                <button
                  type="button"
                  onClick={() => {
                    setImagePreview("");
                    setFormData(prev => ({ ...prev, image: "" }));
                  }}
                  className="absolute top-2 right-2 p-1 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Metrics */}
          <div className="space-y-4">
            <Label className="text-foreground text-lg">Project Metrics</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="conversion" className="text-foreground">Conversion Rate</Label>
                <Input
                  id="conversion"
                  value={formData.metrics.conversion}
                  onChange={(e) => handleInputChange('metrics.conversion', e.target.value)}
                  placeholder="e.g., +150%"
                  className="bg-background/50 border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="traffic" className="text-foreground">Traffic Increase</Label>
                <Input
                  id="traffic"
                  value={formData.metrics.traffic}
                  onChange={(e) => handleInputChange('metrics.traffic', e.target.value)}
                  placeholder="e.g., +200%"
                  className="bg-background/50 border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="engagement" className="text-foreground">Engagement</Label>
                <Input
                  id="engagement"
                  value={formData.metrics.engagement}
                  onChange={(e) => handleInputChange('metrics.engagement', e.target.value)}
                  placeholder="e.g., +300%"
                  className="bg-background/50 border-border"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-6">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="hero">
              Save Project
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectImportModal;