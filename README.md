# Sewa App

Sewa is a cross-platform mobile application designed to simplify the discovery and booking of local services. Built with React Native, Expo, and TypeScript, and powered by Hygraph (GraphQL CMS), Sewa provides a seamless experience for users to find businesses, book appointments, and manage their profiles securely.

## Features

- **Business Discovery:** Browse and search for local businesses by category, powered by dynamic content from Hygraph.
- **Service Booking:** Book appointments and manage your bookings directly within the app.
- **User Authentication:** Secure sign-in and profile management using Clerk.
- **Modern UI:** Responsive and attractive interface using Tailwind CSS and NativeWind.
- **Cross-Platform:** Runs smoothly on both iOS and Android devices.

## Problem Solved

Sewa addresses the challenge of fragmented service discovery and booking by providing a unified platform where users can easily find, evaluate, and book local services, all in one place.

## Major Tech Stack

- **React Native** & **Expo** (cross-platform mobile development)
- **TypeScript** (type safety)
- **Hygraph** (GraphQL CMS for dynamic business data)
- **Clerk** (authentication and user management)
- **React Navigation** (navigation)
- **NativeWind** & **Tailwind CSS** (styling)
- **GraphQL** (data fetching)
- **Date-fns**, **Moment** (date utilities)

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sewa-app.git
   cd sewa-app/nativeSewa
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   - Add your Clerk publishable key and Hygraph endpoint in `app.json` or as environment variables.

4. Start the development server:
   ```bash
   expo start
   ```

5. Run on your device:
   - Use the Expo Go app or an emulator.



## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

