# Maggie Graphics Website

This is a responsive portfolio website made for Maggie Graphics using the actual images supplied by the business owner in this conversation. No AI-generated portfolio artwork or stock photos are used.

## Brand and visual style
The website uses a charcoal/black, white and magenta-pink palette inspired by the supplied Maggie Graphics logo. It includes responsive layouts, subtle entrance animations, a mobile menu, category filters and an image-preview lightbox.

## Files
- `index.html` — page content and portfolio categories
- `styles.css` — colours, layout, responsive styling and animations
- `script.js` — menu, filtering, scroll effects and image previews
- `assets/` — the supplied Maggie Graphics logo and supplied portfolio images

## Portfolio categories
- Birthday posters
- Political posters
- Business cards
- Business logos
- Other designs (product promotion, brochures and graduation design)

## Preview
Open `index.html` in a browser. Keep the `assets` folder beside `index.html`.

## Publish with GitHub Pages
1. Create a new GitHub repository, for example `maggie-graphics`.
2. Upload `index.html`, `styles.css`, `script.js`, `README.md`, and the entire `assets` folder. Keep the folder structure unchanged.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then click **Save**.
6. GitHub Pages will provide the published website URL in the Pages settings.

## Contact information
The phone numbers, email and Kabale location shown on the website were read from the supplied business-card image. Verify that they are current before publishing.

## Adding more portfolio work
Copy the image into `assets/`, then add a `.work-card` in `index.html`. Use one of these category values for its `data-category`: `birthday`, `political`, `cards`, `logos`, or `other`.
