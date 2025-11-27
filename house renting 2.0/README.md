# VOID - Property Rental Platform

A comprehensive web-based property rental platform built with HTML, CSS, and JavaScript, featuring role-based access for tenants and landlords.

## Features Overview

### Core Features
- **User Authentication**: Registration, login, email verification, and password reset
- **Property Listings**: Browse, search, and filter available properties
- **Property Details**: Detailed view with image gallery and location maps
- **Booking System**: Tenants can book properties with email notifications
- **Landlord Dashboard**: Property management and booking request handling
- **WhatsApp Integration**: Direct contact with landlords via WhatsApp

### User Roles
- **Tenants**: Browse properties, make bookings, view booking history
- **Landlords**: Manage properties, handle booking requests, view analytics

## Two Extra Features

### 1. Advanced Image Gallery System
**Description**: Interactive property image gallery with thumbnail navigation and dynamic image switching.

**Features**:
- Main image display with large preview
- Thumbnail navigation bar below main image
- Click-to-switch functionality between images
- Active thumbnail highlighting
- Fallback to property-type-specific default images
- Image count display on property cards
- Error handling with automatic fallback images

**Implementation**:
- Dynamic image arrays for each property
- JavaScript-powered image switching with `changeMainImage()` function
- CSS styling for hover effects and active states
- Responsive design for mobile and desktop

### 2. Real-time Notification System
**Description**: Comprehensive notification system that provides real-time updates for booking status changes.

**Features**:
- Automatic notification creation when landlords approve/reject bookings
- Notification badge showing unread count
- Different notification types (success, error, info)
- Read/unread status tracking
- Time-stamped notifications
- Interactive notification clicking to mark as read
- Persistent storage using localStorage

**Implementation**:
- `notifications.js` module for notification management
- Real-time updates when booking status changes
- Visual indicators for different notification types
- Automatic badge count updates
- Integration with booking approval/rejection workflow

## Technical Implementation

### Data Persistence
- **LocalStorage**: All data persisted using browser localStorage
- **JSON Format**: Structured data storage for users, properties, bookings, and notifications
- **Email Integration**: EmailJS for booking notification emails

### File Structure
```
├── index.html              # Main property listings page
├── login.html              # User authentication
├── register.html           # User registration
├── verify-email.html       # Email verification
├── forgot-password.html    # Password reset
├── property-details.html   # Property details view
├── landlord-dashboard.html # Landlord management panel
├── booking-history.html    # Tenant booking history
├── filters.html           # Advanced property filters
├── style.css              # Complete styling (pure CSS)
├── notifications.js       # Notification system
└── img/                   # Property images
```

### UI Design Principles
- **Clean Layout**: Consistent spacing, typography, and color scheme
- **Responsive Design**: Mobile-first approach with CSS media queries
- **Role-based Navigation**: Different interfaces for tenants and landlords
- **Intuitive UX**: Clear visual hierarchy and user-friendly interactions
- **Professional Branding**: VOID logo with modern aesthetic

### Key Technologies
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Storage**: Browser localStorage for data persistence
- **Email**: EmailJS for automated notifications
- **Maps**: Google Maps iframe integration
- **Communication**: WhatsApp Web API integration

## Setup Instructions

1. **Clone/Download** the project files
2. **Configure EmailJS**:
   - Update public key: `26vE2iCjIPkXczTKX`
   - Service ID: `service_66mzlgv`
   - Template ID: `template_gfgzvce`
3. **Open** `index.html` in a web browser
4. **Test Accounts**:
   - Landlord: `landlord@example.com` / `password123`
   - Tenant: `tenant@example.com` / `password123`

## Contact Integration
- **WhatsApp**: Direct integration with +250794559346
- **Email**: Automated notifications to danecioussmallwood20@gmail.com

## Browser Compatibility
- Modern browsers supporting ES6+ JavaScript
- LocalStorage API support required
- Responsive design for mobile and desktop

---

**Built with pure HTML, CSS, and JavaScript - No frameworks used**