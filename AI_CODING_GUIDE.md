# AI Coding Assistant Guide

This document guides AI assistants in understanding and working with the Southwest Resume Services website codebase.

## Project Overview
Southwest Resume Services uses a data-driven approach to resume optimization, combining AI analysis with human storytelling.

## Code Structure
- `/public`: Frontend assets (CSS, images, scripts)
- `/backend`: Server-side logic and API endpoints
- `/pages`: Page-specific JavaScript files
- `/components`: Reusable UI components
- `/utils`: Helper functions
- `/config`: Configuration files

## Key Implementation Guidelines
1. Always use the color variables defined in CSS
2. Follow Wix Velo API conventions
3. Maintain mobile-first responsive design
4. Use async/await for asynchronous operations
5. Add proper error handling to all functions

## Component Architecture
All components should:
- Be modular and reusable
- Handle their own state
- Use consistent naming conventions
- Include proper documentation
- Handle edge cases gracefully

# AI Coding Assistant Guide

This document is specifically designed to help AI coding assistants understand and work with this codebase effectively.

## Primary Objectives
1. Maintain consistency with existing code patterns
2. Preserve the data-driven narrative of the brand
3. Optimize for ATS compatibility
4. Ensure responsive design across all devices
5. Follow Wix Studio/Velo best practices

## Code Structure Overview

### Frontend Architecture
- Component-based structure using Velo
- Modular CSS with BEM methodology
- Event-driven JavaScript implementation
- Reactive state management

### Backend Architecture
- Serverless functions via Velo
- Database collections for user data
- HTTP functions for external integrations
- Scheduled jobs for maintenance tasks

## Key Implementation Details

### Hero Section
- Uses linear gradient background
- Animated statistics counter
- Responsive typography scaling
- Mobile-first layout

### Pricing Calculator
- Dynamic calculation based on service selection
- Real-time price updates
- Package comparison logic
- Coupon code validation

### Contact Form
- Multi-step validation
- Spam protection
- Email template system
- Success/error handling

## Common Tasks

### Adding a New Page
1. Create page file in /pages directory
2. Set up route in Wix Studio
3. Implement page-specific logic
4. Add SEO metadata
5. Connect analytics tracking

### Modifying Styles
1. Locate appropriate CSS file
2. Follow existing naming conventions
3. Test across breakpoints
4. Update documentation

### Creating Components
1. Define component in /components
2. Implement props interface
3. Add event handlers
4. Document usage examples

## Troubleshooting Guide

### Common Issues
1. Wix sync failures
2. CSS conflicts
3. Mobile responsiveness
4. Form submission errors
5. Analytics tracking gaps

### Debug Procedures
1. Check browser console
2. Verify Wix Studio logs
3. Test in preview mode
4. Validate API responses
5. Review error tracking

## Code Examples

### Adding a New Section
```javascript
// Example of adding a new section to homepage
export function initNewSection() {
    $w('#newSection').onViewportEnter(() => {
        // Animation logic
        animateEntrance($w('#newSection'));
        
        // Load dynamic content
        loadSectionData();
        
        // Track analytics
        trackSectionView('newSection');
    });
}
Creating a Custom Event
javascript// Example of custom event tracking
export function trackButtonClick(buttonId, eventData) {
    const eventObject = {
        action: 'button_click',
        category: 'user_interaction',
        label: buttonId,
        ...eventData
    };
    
    wixAnalytics.trackEvent(eventObject);
}
Best Practices
Performance

Minimize DOM operations
Use event delegation
Implement lazy loading
Optimize image assets
Cache API responses

Security

Sanitize user inputs
Validate form data
Protect API endpoints
Use HTTPS everywhere
Implement rate limiting

Accessibility

ARIA labels
Keyboard navigation
Color contrast ratios
Screen reader support
Focus management

Integration Points
External Services

Google Analytics
Calendly booking
Email marketing platform
CRM system
Payment processor

Wix Platform

Wix Data API
Wix Users API
Wix Window API
Wix Location API
Wix SEO API

Version Control
Branch Strategy

main: Production code
develop: Integration branch
feature/*: New features
hotfix/*: Emergency fixes
release/*: Release candidates

Commit Messages

feat: New feature
fix: Bug fix
docs: Documentation
style: Formatting
refactor: Code restructuring
test: Testing
chore: Maintenance

AI Assistant Reminders

Always check existing patterns before implementing new code
Maintain consistent naming conventions
Consider mobile experience first
Document all changes thoroughly
Test in Wix preview before committing
Follow established error handling patterns
Preserve brand voice in all user-facing text
Optimize for search engines
Ensure accessibility compliance
Keep performance metrics in mind


This extremely detailed setup will help any AI assistant understand exactly how to work with your codebase, making future development much smoother and more consistent.