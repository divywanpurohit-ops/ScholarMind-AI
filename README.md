# SCHOLARMIND AI
The Ultimate Academic Research Operating System.

## Features
- **Project Workspace**: Upload and analyze PDFs, DOCX, and datasets.
- **Translator Lab**: Academic-grade translations preserving formulas and citations.
- **Writing Intelligence**: Paraphrase, check grammar, and humanize academic text.
- **Data Analysis**: Clean data, generate descriptive stats, and visualize charts.
- **Video & PPT Studio**: Auto-generate animated explainers and conference slides.
- **Visualization Lab**: Generate biological pathways and mind maps.
- **Prompt Studio & AI Detector**: Engineer prompts and detect AI-generated text.

## Tech Stack
- **Frontend**: Next.js (App Router), Vanilla CSS (Glassmorphism design system)
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Localhost Setup Guide

### Option 1: One-Click Docker Deployment
1. Ensure you have [Docker](https://www.docker.com/) and Docker Compose installed.
2. Clone the repository.
3. Copy `.env.example` to `.env` and fill in your API keys (optional, for real AI features).
4. Run:
   ```bash
   docker-compose up --build
   ```
5. Open `http://localhost:3000` in your browser.

### Option 2: Manual Setup
1. **Start MongoDB**: Ensure a local instance of MongoDB is running on port `27017`.
2. **Backend Setup**:
   ```bash
   cd backend
   npm install
   npm run dev
   ```
3. **Frontend Setup**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser.

## Contributing
This is a production-ready template. Future iterations will include real Vector DB integrations and live Python service bindings for the Data Analysis Lab.
