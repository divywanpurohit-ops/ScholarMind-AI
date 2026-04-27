const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const auth = require('../middleware/authMiddleware');

// Get all projects for a user
router.get('/', auth, async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user.id }).sort({ date: -1 });
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Create a new project
router.post('/', auth, async (req, res) => {
  try {
    const { title, researchTopic, keywords, domain, objective } = req.body;
    const newProject = new Project({
      user: req.user.id,
      title,
      researchTopic,
      keywords,
      domain,
      objective
    });
    const project = await newProject.save();
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get a single project
router.get('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ msg: 'Project not found' });
    if (project.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
