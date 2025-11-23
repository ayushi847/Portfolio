import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
  id: 1,
  title: "Airbnb Clone",
  description: "A fully responsive Airbnb-style accommodation booking interface built using React. Includes dynamic listings, search filtering, and clean modern UI.",
  image: "/projects/project1.png", 
  tags: ["React", "Node.js", "Express", "MongoDB", "Responsive UI"],

  demoUrl: "https://airbnb-frontend-ik5g.onrender.com/",   // agar live link nahi hai, "#" rakh dena
  githubUrl: "https://github.com/ayushi847/2.Airbnb.git",
},

 {
  id: 2,
  title: "Video Call",
   description: "A real-time video calling app built with WebRTC and Socket.io, featuring live streaming, room creation, and smooth peer-to-peer communication.",

  image: "/projects/project2.png",
  tags: ["React", "Node.js", "Express", "MongoDB","Socket.io", "WebRTC"],
  demoUrl: "https://video-call-streaming-1.onrender.com", 
  githubUrl: "https://github.com/ayushi847/video-call-streaming",
},

 {
  id: 3,
  title: "Shopify UI Clone",
  description: "A modern Shopify-inspired frontend clone built using React, featuring a clean layout, smooth UI, and fully responsive product sections.",

  image: "/projects/project3.png",
  tags: ["React", "CSS", "UI Design", "Responsive Layout", "E-Commerce UI"],

  demoUrl: "#",  // agar deploy karna ho to bol dena, main kara dungi
  githubUrl: "https://github.com/ayushi847/tutorial90",
},

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ayushi847"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
