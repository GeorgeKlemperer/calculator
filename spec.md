# Functional Specification

## For

Version 0.1  
Prepared by

---

## Revision History

| Name | Date | Reason For Changes | Version |
| ---- | ---- | ------------------ | ------- |

---

## 1. Introduction

### 1.1 Document Purpose

This document provides a comprehensive overview of the functional requirements and core objectives for the proposed travel web application.

### 1.2 Product Scope

The product aims to provide users with a centralized platform to plan, organize, and manage their trips. It will include features like itinerary planning, flight search, weather forecast viewing, and budget tracking, all accessible via a responsive web interface.

### 1.3 Definitions, Acronyms and Abbreviations

- **UI**: User Interface
- **API**: Application Programming Interface
- **DB**: Database
- **PWA**: Progressive Web App (potential future consideration)

### 1.4 References

- Skyscanner Flights API (via RapidAPI)
- OpenWeatherMap API
- Firebase Documentation

### 1.5 Document Overview

This document is structured to outline the product’s functionality, user interactions, constraints, and implementation details to guide development for Version 0.1.

---

## 2. Product Overview

### 2.1 Product Perspective

This is a brand-new product designed as a responsive web application. It operates independently but relies on third-party APIs for weather and flight search functionality.

### 2.2 Product Functions

- User account creation, login, and password reset
- Trip creation, editing, and deletion
- Unified dashboard per trip displaying:
  - Trip overview (name, destination, date range)
  - Weather forecast (daily, auto-fetched)
  - Budget tracker (total budget, costs from flights and itinerary)
  - Itinerary planner (activities with location, time, notes)
  - Saved flight details (multi-leg, searchable via API)
- Trip list view with sorting/filtering
- Offline access to basic trip overview and itinerary

### 2.3 Product Constraints

- Web-only (responsive for mobile)
- English-only interface
- No real-time booking or payments
- Skyscanner and OpenWeatherMap API usage constraints (rate limits, etc.)

### 2.4 User Characteristics

- General consumers
- Likely range of technical skills from beginner to intermediate
- Expected to use the app occasionally during planning and daily during trips

### 2.5 Assumptions and Dependencies

- Firebase services are available and stable
- API keys for flight and weather data are correctly configured
- Users have intermittent internet access (hence offline mode for basics)

### 2.6 Apportioning of Requirements

- **Must-have**: Trip CRUD, Auth, Itinerary, Flight search/save, Weather, Budget tracker
- **Should-have**: Offline trip viewing
- **Could-have**: Trip sorting/filtering, UI polish
- **Won’t-have**: In-app notifications, real-time bookings, multi-language support

---

## 3. Requirements

### 3.1 External Interfaces

#### 3.1.1 User Interfaces

- Responsive web UI
- Separate screens: Login, Trip list, Trip dashboard, Trip edit, Add flight, Add itinerary
- Core navigation: Top nav bar or sidebar with routing

#### 3.1.2 Hardware Interfaces

- None required

#### 3.1.3 Software Interfaces

- Firebase (auth, firestore)
- OpenWeatherMap API
- Skyscanner Flight Search API

### 3.2 Functional Requirements

#### Authentication

- Register with email/password
- Login/logout
- Reset password via email

#### Trip Management

- Add/edit/delete trip (name, destination, start/end dates, companions, notes)
- Display trip dashboard with sections for weather, budget, itinerary, flights
- Trips auto-marked as past after end date

#### Itinerary Planner

- Add/edit/delete activities
- Fields: activity name, location, start/end time, notes
- Activities limited to trip date range

#### Flight Integration

- Search via Skyscanner API
- Save selected flight details (airline, time, airport, price)
- Multi-leg support
- Editable and removable saved flights

#### Budget Tracker

- Set total budget per trip
- Auto-add flight costs and itinerary-linked expenses
- View total spent vs. remaining

#### Weather Checker

- Auto-fetch daily forecast for trip date range & destination

#### Offline Access

- Cache basic trip info and itinerary for offline viewing

### 3.3 Quality of Service

#### 3.3.1 Performance

- App should load core content within 2 seconds on a stable connection
- Support up to 100 concurrent users

#### 3.3.2 Security

- Firebase Auth for account handling
- Secure access rules in Firestore
- HTTPS enforced

#### 3.3.3 Reliability

- Firebase services provide backend reliability
- Graceful error handling for failed API calls

#### 3.3.4 Availability

- App available 24/7
- Scheduled downtime communicated via app banner (future consideration)

### 3.4 Compliance

- GDPR compliance via Firebase data handling
- No sensitive financial info handled

### 3.5 Design and Implementation

#### 3.5.1 Installation

- No installation required; web-based

#### 3.5.2 Distribution

- Firebase Hosting or Vercel

#### 3.5.3 Maintainability

- Modular components in React
- Clear API abstraction layers

#### 3.5.4 Reusability

- UI components reusable across dashboard sections

#### 3.5.5 Portability

- Future portability to PWA or mobile app possible

#### 3.5.6 Cost

- Free tier services for Firebase, APIs unless traffic exceeds thresholds

#### 3.5.7 Deadline

- MVP build targeted within a few hours

#### 3.5.8 Proof of Concept

- Trip CRUD, itinerary planner, and weather integration working end-to-end

---

## 4. Verification

- Manual testing of all user flows
- API mock tests where applicable
- **Acceptance Criteria**: User can fully plan a trip and see it in dashboard

---

## 5. Appendixes

### Appendix A: Glossary

- **CRUD**: Create, Read, Update, Delete
- **MVP**: Minimum Viable Product

### Appendix B: Additional Context

- API rate limits and keys must be managed securely
- V0.1 optimized for speed of delivery; future versions may expand features
