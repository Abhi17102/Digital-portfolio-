import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';
import TechnicalSkills from './components/TechnicalSkills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <div className="swirl-bg" />
      <div className="min-h-screen bg-black text-white font-poppins overflow-x-hidden">
        <Navigation />
        <Hero />
        <SocialLinks />
        <TechnicalSkills />
        <Certificates />
        <Projects />
        <Contact />
      </div>
    </ErrorBoundary>
  );
}

export default App;