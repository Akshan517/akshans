import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  date: string;
  aim: string;
  approach: string;
  outcomes: string;
  tools: string[];
  image?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const {
    title = "Project Title",
    date = "January 2025",
    aim = "Project aim goes here",
    approach = "Approach used in the project",
    outcomes = "Outcomes achieved from the project",
    tools = ["Tool 1", "Tool 2"],
    image = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  } = project || {};

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden flex flex-col bg-card border border-border hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <Badge variant="outline" className="text-xs">
              {date}
            </Badge>
          </div>
          <CardDescription className="text-sm text-muted-foreground">
            {aim}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-medium">Approach</h4>
              <p className="text-sm text-muted-foreground">{approach}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium">Outcomes</h4>
              <p className="text-sm text-muted-foreground">{outcomes}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 pt-2 border-t">
          {tools.map((tool, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tool}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
