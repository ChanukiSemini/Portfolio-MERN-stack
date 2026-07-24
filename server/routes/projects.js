const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

//   Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


//   Get a single project
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//    Create a new project
router.post("/", async (req, res) => {
  try {
    const { title, description, technologies, link } = req.body;

    const techArray = Array.isArray(technologies)
      ? technologies
      : (technologies || "")
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t.length > 0);

    const newProject = new Project({
      title,
      description,
      technologies: techArray,
      link,
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


//    Update a project
router.put("/:id", async (req, res) => {
  try {
    const { title, description, technologies, link } = req.body;

    const techArray = Array.isArray(technologies)
      ? technologies
      : (technologies || "")
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t.length > 0);

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { title, description, technologies: techArray, link },
      { new: true, runValidators: true }
    );

    if (!updatedProject) return res.status(404).json({ message: "Project not found" });
    res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// Delete a project
router.delete("/:id", async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) return res.status(404).json({ message: "Project not found" });
    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
