# Southwest Resume Services Website (SRS-Web)

This repository contains the complete implementation of the Southwest Resume Services website, a data-driven resume writing service platform built on Wix Studio with extensive custom code integration.

## Project Overview
Southwest Resume Services, LLC was founded in 2024 by Ryan Zimmerman to address the growing disconnect between qualified job candidates and AI-powered applicant tracking systems (ATS). Our website serves as the primary interface for clients seeking professional resume optimization services.

## Technical Stack
- Platform: Wix Studio (formerly Wix Editor X)
- Code Framework: Velo by Wix (JavaScript runtime environment)
- Version Control: GitHub
- Development Environment: Visual Studio Code
- Deployment: GitHub to Wix Studio synchronization
- Languages: JavaScript (ES6+), CSS3, HTML5

## Directory Structure
/
├── .wix/                    # Wix configuration files (auto-generated)
├── public/                  # Frontend resources
│   ├── css/                # Custom styling
│   │   ├── global.css     # Site-wide styles
│   │   ├── hero.css       # Hero section styles
│   │   ├── pricing.css    # Pricing table styles
│   │   └── responsive.css # Mobile optimizations
│   ├── images/            # Static assets
│   └── scripts/           # Client-side JavaScript
├── backend/                # Velo backend modules
│   ├── http-functions.js  # HTTP API endpoints
│   ├── data-hooks.js      # Database triggers
│   └── integrations/      # Third-party service connections
├── pages/                  # Page-specific code
│   ├── Home.js           # Homepage logic
│   ├── Services.js       # Services page
│   ├── Pricing.js        # Pricing calculator
│   └── Contact.js        # Contact form handling
├── components/            # Reusable UI elements
│   ├── Header.js         # Navigation header
│   ├── Footer.js         # Site footer
│   ├── PricingCard.js    # Pricing display component
│   └── TestimonialSlider.js
├── utils/                 # Utility functions
│   ├── analytics.js      # Tracking utilities
│   ├── validation.js     # Form validation
│   └── seo.js           # SEO optimizations
└── config/               # Configuration files
├── site-config.js   # Global settings
└── env.js           # Environment variables

## Page Architecture

### Home Page (index)
- Hero section with gradient background
- Statistics display (72% ATS rejection rate)
- Origin story with 'aha moment' narrative
- Three-step methodology display
- Featured pricing packages
- Results section with metrics
- Contact form integration

### Services Page
- Detailed service descriptions
- ATS optimization explanation
- Industry-specific resume packages
- Success case studies

### About Page
- Founder biography
- Company mission statement
- Data science credentials
- Press mentions

## Component Documentation

### Header Component
- Sticky navigation
- Mobile-responsive menu
- CTA button integration
- Scroll behavior tracking

### Pricing Component
- Dynamic pricing calculator
- Package comparison table
- Feature matrix
- Call-to-action buttons

## Custom Styling Implementation

### Color Palette
- Primary Blue: #1A365D
- Secondary Blue: #2B6CB0
- Accent Gold: #D69E2E
- Text Gray: #6E6E6E
- Light Gray Background: #F7FAFC

### Typography
- Headings: Poppins/Montserrat
- Body: Open Sans/Roboto
- Sizes: H1(48-56px), H2(36-40px), H3(24-28px), Body(16-18px)

## State Management
- Page state: Velo's local storage API
- Form data: Session storage
- User preferences: Browser cookies
- Analytics: Custom event tracking

## API Integration
- Contact form submission
- Newsletter signup
- Calendly booking integration
- Google Analytics
- Custom analytics dashboard

## Development Workflow

### Local Development
1. Clone repository
2. Install Wix CLI tools
3. Connect to Wix Studio account
4. Initialize development environment
5. Run local development server

### Deployment Process
1. Commit changes to feature branch
2. Create pull request
3. Review code changes
4. Merge to main branch
5. Automatic sync to Wix Studio
6. Preview in staging environment
7. Publish to production

## Coding Standards

### JavaScript
- ES6+ syntax required
- Async/await for promises
- Modular code structure
- JSDoc comments for all functions
- Error handling with try/catch

### CSS
- BEM naming convention
- Mobile-first approach
- CSS variables for theming
- Flexbox/Grid layouts
- Avoid !important unless necessary

## Testing

### Unit Tests
- Component functionality
- Utility functions
- Data validation

### Integration Tests
- Form submissions
- API endpoints
- User flows

### Visual Testing
- Cross-browser compatibility
- Responsive design
- Accessibility compliance

## Performance Optimization
- Lazy loading images
- Code splitting
- Minification
- Caching strategies
- CDN utilization

## SEO Configuration
- Meta tags
- Schema markup
- Sitemap generation
- Robots.txt
- Canonical URLs

## Security Measures
- Input sanitization
- XSS prevention
- CORS configuration
- API key protection
- Rate limiting

## Monitoring
- Error tracking
- Performance metrics
- User analytics
- Conversion tracking
- Uptime monitoring

## Maintenance

### Regular Tasks
- Dependency updates
- Security patches
- Content updates
- Performance audits
- Backup procedures

### Emergency Procedures
- Rollback process
- Hotfix deployment
- Incident response
- Communication plan

## Contact Information
- Technical Lead: Ryan Zimmerman
- Email: ryan.zimmerman@southwestresumes.com
- Website: southwestresumes.com
- Repository: github.com/[username]/southwest-resume-services-wix-website

## License
Proprietary - All Rights Reserved