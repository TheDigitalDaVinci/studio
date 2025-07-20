# The Digital Da Vinci - Portfolio Website

This is a Next.js portfolio website built with Firebase Studio, designed to showcase the work of a digital artisan. It features a modern design, interactive 3D background, and dedicated sections for a project portfolio, masterclasses, and contact information.

## Getting Started

To run the project locally, you can use the following command:

```bash
npm run dev
```

This will start the development server, usually on `http://localhost:9002`.

## Customizing Your Portfolio Images

The project currently uses placeholder images from `https://placehold.co`. To replace them with your own project images, follow these steps:

### 1. Add Your Images to the `public` Directory

The `public` directory is the correct place for static assets like images, which can be directly served by the application.

-   Find or create the `public` directory at the root of your project. If it doesn't exist, you can create it.
-   Place your image files (e.g., `residence-design.png`, `neon-drifters.jpg`) inside the `public` directory.

### 2. Update the Image Paths in the Data File

All project and course data, including image URLs, is managed in a central file.

-   Open the file located at `src/lib/data.ts`.
-   Inside this file, you will find two arrays: `projects` and `courses`.
-   Locate the project or course you want to update.
-   Find the `image` property for that item.
-   Change the placeholder URL (e.g., `'https://placehold.co/600x400.png'`) to a local path pointing to your new image in the `public` directory. The path should start with a `/`.

**Example:**

If you added an image named `residence-exterior.jpg` to the `public` folder, you would update the `image` property like this:

**Before:**
```typescript
{
  id: 1,
  title: 'Residence Design',
  // ...
  image: 'https://placehold.co/600x400.png',
  // ...
},
```

**After:**
```typescript
{
  id: 1,
  title: 'Residence Design',
  // ...
  image: '/residence-exterior.jpg', // Path to your image in the public folder
  // ...
},
```

Repeat this process for all the projects and courses you wish to update. Once you save the `data.ts` file, your website will display your custom images.
